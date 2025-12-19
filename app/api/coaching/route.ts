import { generateText } from 'ai';
import { getModel, SYSTEM_PROMPTS } from '@/lib/ai';
import { ChatRequest } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body: ChatRequest = await req.json();
    const { message, history = [], model } = body;

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPTS.coaching },
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
      model: model || 'gpt-4o-mini',
    });
  } catch (error) {
    console.error('Coaching API error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
