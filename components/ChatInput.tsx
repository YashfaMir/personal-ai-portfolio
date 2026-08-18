/**
 * Chat Input Component
 * Text input and send button for chat messages
 */

import { useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, isLoading = false, disabled = false }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as user types
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resetHeight = () => {
      textarea.style.height = 'auto';
    };

    const adjustHeight = () => {
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    };

    textarea.addEventListener('input', adjustHeight);
    textarea.addEventListener('focus', adjustHeight);
    textarea.addEventListener('blur', resetHeight);

    return () => {
      textarea.removeEventListener('input', adjustHeight);
      textarea.removeEventListener('focus', adjustHeight);
      textarea.removeEventListener('blur', resetHeight);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    // Shift+Enter creates a new line (default textarea behavior)
  };

  const handleSend = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const message = textarea.value.trim();

    if (!message || disabled || isLoading) {
      return;
    }

    onSendMessage(message);
    textarea.value = '';
    textarea.style.height = 'auto';

    // Refocus input
    setTimeout(() => textarea.focus(), 0);
  };

  return (
    <div className="chat-input-wrapper">
      <textarea
        ref={textareaRef}
        className="chat-input"
        placeholder="Ask me about Yashfa's work, skills, or experience..."
        disabled={disabled || isLoading}
        onKeyDown={handleKeyDown}
        aria-label="Chat message input"
        rows={1}
      />
      <button
        onClick={handleSend}
        disabled={disabled || isLoading}
        className="chat-send-btn"
        aria-label={isLoading ? 'Waiting for response' : 'Send message'}
      >
        {isLoading ? (
          <span className="send-btn-icon">⏳</span>
        ) : (
          <span className="send-btn-icon">→</span>
        )}
      </button>
    </div>
  );
}
