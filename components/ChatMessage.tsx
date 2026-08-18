/**
 * Chat Message Component
 * Displays a single message in the conversation
 */

import { Message } from './types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`chat-message ${isUser ? 'chat-message-user' : 'chat-message-assistant'}`}
      role="article"
      aria-label={`${isUser ? 'Your' : 'Assistant'} message`}
    >
      <div className="chat-message-content">{message.content}</div>
      <div className="chat-message-timestamp">
        {message.timestamp.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
}
