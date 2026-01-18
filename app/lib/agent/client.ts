import type { AgentFileContext, AgentResponsePayload } from './types';

export async function runAgent(prompt: string, files: AgentFileContext[]): Promise<AgentResponsePayload> {
  const response = await fetch('/api.agent', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ prompt, files }),
  });

  if (!response.ok) {
    throw new Error('Failed to run agent');
  }

  return response.json() as Promise<AgentResponsePayload>;
}
