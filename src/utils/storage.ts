import { createInitialState, type AbState } from "@/data/challenges";

export const STORAGE_KEY = "abtalks_state";

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function num(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function str(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function get(source: unknown, key: string): unknown {
  return isObj(source) ? source[key] : undefined;
}

/** Merges persisted data over the defaults, dropping anything corrupted. */
export function reconcileState(raw: unknown): AbState {
  const base = createInitialState();
  if (!isObj(raw)) return base;

  const student = get(raw, "student");
  const progress = get(raw, "progress");
  const prefs = get(raw, "preferences");
  const missed = get(progress, "missedDays");
  const achievements = get(raw, "achievements");
  const activity = get(raw, "activity");

  return {
    student: {
      name: str(get(student, "name")),
      track: str(get(student, "track")),
      email: str(get(student, "email")),
      avatarUrl: str(get(student, "avatarUrl")),
    },
    currentDay: Math.min(Math.max(num(get(raw, "currentDay"), base.currentDay), 1), 61),
    totalDays: 60,
    progress: {
      completedDays: Math.max(num(get(progress, "completedDays"), base.progress.completedDays), 0),
      streak: Math.max(num(get(progress, "streak"), base.progress.streak), 0),
      bestStreak: Math.max(num(get(progress, "bestStreak"), base.progress.bestStreak), 0),
      missedDays: Array.isArray(missed) ? missed.filter((d): d is number => typeof d === "number") : [],
      rank: Math.max(num(get(progress, "rank"), base.progress.rank), 1),
      totalBuilders: Math.max(num(get(progress, "totalBuilders"), base.progress.totalBuilders), 1),
      rankDelta: num(get(progress, "rankDelta"), base.progress.rankDelta),
      projectsBuilt: Math.max(num(get(progress, "projectsBuilt"), base.progress.projectsBuilt), 0),
      projectsThisWeek: Math.max(num(get(progress, "projectsThisWeek"), base.progress.projectsThisWeek), 0),
    },
    submissions: (get(raw, "submissions") as AbState["submissions"]) ?? {},
    requirements: (get(raw, "requirements") as AbState["requirements"]) ?? {},
    criteria: (get(raw, "criteria") as AbState["criteria"]) ?? {},
    achievements: Array.isArray(achievements)
      ? achievements.filter((a): a is string => typeof a === "string")
      : [],
    activity:
      Array.isArray(activity) && activity.length === 7 ? (activity as AbState["activity"]) : base.activity,
    preferences: {
      sidebarCollapsed: Boolean(get(prefs, "sidebarCollapsed")),
      reminders: get(prefs, "reminders") !== false,
    },
  };
}

export function loadState(): AbState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return reconcileState(JSON.parse(raw));
  } catch {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable — fall back to in-memory state */
    }
    return null;
  }
}

export function saveState(state: AbState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota or private mode — state stays in memory only */
  }
}

export function clearState(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
