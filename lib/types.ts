export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  message: string;
  history?: Message[];
  model?: string;
  assistant?: 'default' | 'jobs' | 'coaching';
}

export interface ChatResponse {
  response: string;
  model: string;
}
