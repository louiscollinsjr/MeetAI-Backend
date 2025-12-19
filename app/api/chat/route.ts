import { generateText } from 'ai';
import 'dotenv/config';
import { getModel, SYSTEM_PROMPTS, AssistantType } from '@/lib/ai';
import { ChatRequest } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body: ChatRequest = await req.json();
    const { message, history = [], model, assistant = 'default' } = body;

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = SYSTEM_PROMPTS[assistant as AssistantType] || SYSTEM_PROMPTS.default;

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...history.slice(-10),
      { role: 'user' as const, content: message },
    ];

    const result = await generateText({
      model: getModel(model),
      messages,
      maxTokens: 500,
      temperature: 0.7,
    });

    return Response.json({
      response: result.text,
      model: model || 'mistral/devstral-small-2505',
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
