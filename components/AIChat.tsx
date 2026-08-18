'use client';

/**
 * AI Chat Component
 * Main portfolio assistant chat interface
 */

import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import SuggestedQuestions from './SuggestedQuestions';
import { sendMessage } from '@/lib/chat-api';
import { Message } from './types/chat';

// Suggested questions - all based on real portfolio information
const SUGGESTED_QUESTIONS = [
  'What projects has Yashfa worked on?',
  'What are Yashfa&apos;s main skills?',
  'Tell me about Yashfa&apos;s experience.',
  'What certifications does Yashfa have?',
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  /**
   * Handle sending a new message
   */
  const handleSendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    // Add user message to conversation
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setError(null);
    setIsLoading(true);

    try {
      // Call the chat API
      const response = await sendMessage(userMessage);

      if (response.success && response.message) {
        // Add assistant message to conversation
        const assistantMsg: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: response.message,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        // Handle API error
        const errorMessage = response.error || 'Failed to get a response. Please try again.';

        setError(errorMessage);

        // Add error message to conversation
        const errorMsg: Message = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: `I encountered an error: ${errorMessage}. Please try again.`,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMsg]);
      }
    } catch (err) {
      // Handle network or other errors
      const errorText = err instanceof Error ? err.message : 'An unexpected error occurred';

      setError(errorText);

      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: `I encountered an error: ${errorText}. Please try again.`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle clicking a suggested question
   */
  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <div className="ai-chat-identity">
          <h3 className="ai-chat-title">Portfolio Assistant</h3>
          <p className="ai-chat-description">
            Ask me anything about Yashfa&apos;s skills, projects, experience, and background.
          </p>
        </div>
      </div>

      <div className="ai-chat-content" role="main" aria-label="Chat conversation">
        {messages.length === 0 ? (
          <div className="ai-chat-empty">
            <div className="ai-chat-welcome">
              <p className="ai-chat-welcome-text">
                👋 Hi! I&apos;m Yashfa&apos;s portfolio assistant. Ask me about her work and experience.
              </p>
            </div>

            <SuggestedQuestions
              questions={SUGGESTED_QUESTIONS}
              onSelectQuestion={handleSuggestedQuestion}
              isLoading={isLoading}
            />
          </div>
        ) : (
          <div className="ai-chat-messages">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isLoading && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        )}

        {error && messages.length > 0 && (
          <div className="ai-chat-error-banner" role="alert">
            <p>{error}</p>
            <button
              onClick={() => setError(null)}
              className="ai-chat-error-dismiss"
              aria-label="Dismiss error"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <div className="ai-chat-input-section">
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          disabled={false}
        />
      </div>
    </div>
  );
}
