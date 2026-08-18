/**
 * Suggested Questions Component
 * Shows a set of suggested starter questions
 */

interface SuggestedQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
  isLoading?: boolean;
}

export default function SuggestedQuestions({
  questions,
  onSelectQuestion,
  isLoading = false,
}: SuggestedQuestionsProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div className="chat-suggestions" role="region" aria-label="Suggested questions">
      <p className="chat-suggestions-label">Try asking:</p>
      <div className="chat-suggestions-grid">
        {questions.map((question, index) => (
          <button
            key={index}
            className="chat-suggestion-btn"
            onClick={() => onSelectQuestion(question)}
            disabled={isLoading}
            aria-label={`Ask: ${question}`}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
