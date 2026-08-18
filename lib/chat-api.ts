/**
 * Chat API Utility Functions
 * 
 * This module provides type-safe functions for communicating with
 * the portfolio AI assistant backend.
 * 
 * Usage:
 * import { sendMessage } from '@/lib/chat-api';
 * const response = await sendMessage('Hello!');
 */

export interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
  code?: string;
  timestamp?: string;
}

/**
 * Send a message to the AI portfolio assistant
 * @param message - The user's message
 * @returns Promise resolving to the assistant's response
 */
export async function sendMessage(message: string): Promise<ChatResponse> {
  if (!message || message.trim().length === 0) {
    return {
      success: false,
      error: 'Message cannot be empty',
      code: 'EMPTY_MESSAGE',
    };
  }

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message.trim() }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.error || 'Failed to get response',
        code: errorData.code || 'API_ERROR',
      };
    }

    const data: ChatResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Chat API Error:', error);
    return {
      success: false,
      error: 'Network error. Please try again.',
      code: 'NETWORK_ERROR',
    };
  }
}

/**
 * Check if the chat API is available
 * @returns Promise resolving to true if API is available
 */
export async function checkChatApiHealth(): Promise<boolean> {
  try {
    const response = await fetch('/api/chat', {
      method: 'GET',
    });
    // GET should return 405 (method not allowed) if API exists
    return response.status === 405 || response.status === 200;
  } catch {
    return false;
  }
}
