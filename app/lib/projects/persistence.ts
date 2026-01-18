export interface ProjectFileSnapshot {
  path: string;
  content: string;
}

export interface ProjectSnapshot {
  files: ProjectFileSnapshot[];
}

const STORAGE_KEY = 'piepio_project_v1';

export function saveProjectSnapshot(snapshot: ProjectSnapshot) {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {}
}

export function loadProjectSnapshot(): ProjectSnapshot | undefined {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return undefined;
    }

    const parsed = JSON.parse(raw) as ProjectSnapshot;

    if (!parsed || !Array.isArray(parsed.files)) {
      return undefined;
    }

    return parsed;
  } catch {
    return undefined;
  }
}
