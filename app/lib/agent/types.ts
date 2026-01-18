export type AgentFileOperation = 'create' | 'update' | 'delete';

export interface AgentFileContext {
  path: string;
  content: string;
}

export interface AgentFileChange {
  operation: AgentFileOperation;
  path: string;
  content?: string;
}

export interface AgentRequestPayload {
  prompt: string;
  files: AgentFileContext[];
}

export interface AgentResponsePayload {
  changes: AgentFileChange[];
  summary?: string;
}

