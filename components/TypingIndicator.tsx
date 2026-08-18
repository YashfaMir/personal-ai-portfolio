/**
 * Typing Indicator Component
 * Shows a subtle indicator that the assistant is typing
 */

export default function TypingIndicator() {
  return (
    <div className="chat-message chat-message-assistant" aria-label="Assistant is typing">
      <div className="chat-message-content">
        <div className="typing-indicator">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>
      </div>
    </div>
  );
}
