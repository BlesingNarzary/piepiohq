import { type ActionFunctionArgs } from '@remix-run/cloudflare';
import { generateText } from 'ai';
import { getAPIKey } from '~/lib/.server/llm/api-key';
import { getAnthropicModel } from '~/lib/.server/llm/model';
import type { AgentRequestPayload, AgentResponsePayload } from '~/lib/agent/types';

export async function action({ context, request }: ActionFunctionArgs) {
  const { prompt, files } = (await request.json()) as AgentRequestPayload;

  const systemPrompt =
    'You are an AI code editor that modifies a small TypeScript/JavaScript project.\n' +
    'You must respond with a single JSON object matching this TypeScript type:\n' +
    'type AgentResponsePayload = { changes: { operation: \"create\" | \"update\" | \"delete\"; path: string; content?: string }[]; summary?: string };\n' +
    'Rules:\n' +
    '- Never include markdown, prose, or explanations.\n' +
    '- Respond with valid JSON only.\n' +
    '- For \"create\" and \"update\", always include full file contents in `content`.\n' +
    '- For \"delete\", omit `content`.\n' +
    '- Never include comments or trailing commas in JSON.\n';

  const payload = {
    prompt,
    files,
  };

  const apiKey = getAPIKey(context.cloudflare.env);

  const { text } = await generateText({
    model: getAnthropicModel(apiKey),
    maxTokens: 2048,
    system: systemPrompt,
    prompt: JSON.stringify(payload),
  });

  let parsed: AgentResponsePayload;

  try {
    parsed = JSON.parse(text) as AgentResponsePayload;
  } catch {
    throw new Response(null, { status: 500, statusText: 'Failed to parse agent response' });
  }

  if (!parsed.changes || !Array.isArray(parsed.changes)) {
    throw new Response(null, { status: 500, statusText: 'Agent returned invalid payload' });
  }

  return Response.json(parsed);
}

