import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ACHIEVEMENTS,
  createInitialState,
  getChallenge,
  type AbState,
  type Student,
  type Submission,
} from "@/data/challenges";
import { clearState, loadState, saveState } from "@/utils/storage";

export interface AbContextValue {
  state: AbState;
  hydrated: boolean;
  /** Derived */
  completionPct: number;
  daysRemaining: number;
  deployments: number;
  proofCount: number;
  unlockedAchievements: string[];
  displayName: string;
  initials: string;
  profileComplete: boolean;
  /** Actions */
  toggleRequirement: (day: number, index: number) => void;
  toggleCriterion: (day: number, index: number) => void;
  saveDraft: (day: number, draft: Partial<Submission>) => void;
  submitDay: (day: number, submission: Omit<Submission, "submittedAt">) => string[];
  updateProfile: (patch: Partial<Student>) => void;
  setPreference: (key: keyof AbState["preferences"], value: boolean) => void;
  simulateMissedDay: () => void;
  resetDemo: () => void;
}

export const ABTalksContext = createContext<AbContextValue | null>(null);

function countDeployments(state: AbState): number {
  return Object.values(state.submissions).filter((s) => Boolean(s?.deployment)).length;
}

function countProofs(state: AbState): number {
  return Object.values(state.submissions).reduce((total, s) => {
    if (!s) return total;
    return total + [s.repo, s.commit, s.linkedin, s.deployment].filter(Boolean).length;
  }, 0);
}

function resolveAchievements(state: AbState): string[] {
  const stats = {
    completedDays: state.progress.completedDays,
    streak: state.progress.streak,
    bestStreak: state.progress.bestStreak,
    deployments: countDeployments(state),
  };
  return ACHIEVEMENTS.filter((a) => a.test(stats)).map((a) => a.id);
}

export function ABTalksProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AbState>(() => createInitialState());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = loadState();
    if (stored) setState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveState(state);
  }, [state, hydrated]);

  const toggleIndex = useCallback(
    (bucket: "requirements" | "criteria", day: number, index: number) => {
      setState((prev) => {
        const key = String(day);
        const current = prev[bucket][key] ?? [];
        const next = current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index].sort((a, b) => a - b);
        return { ...prev, [bucket]: { ...prev[bucket], [key]: next } };
      });
    },
    [],
  );

  const toggleRequirement = useCallback(
    (day: number, index: number) => toggleIndex("requirements", day, index),
    [toggleIndex],
  );
  const toggleCriterion = useCallback(
    (day: number, index: number) => toggleIndex("criteria", day, index),
    [toggleIndex],
  );

  const saveDraft = useCallback((day: number, draft: Partial<Submission>) => {
    setState((prev) => {
      const key = String(day);
      const existing = prev.submissions[key];
      return {
        ...prev,
        submissions: {
          ...prev.submissions,
          [key]: {
            repo: "",
            commit: "",
            linkedin: "",
            deployment: "",
            submittedAt: "",
            ...existing,
            ...draft,
          },
        },
      };
    });
  }, []);

  const submitDay = useCallback<AbContextValue["submitDay"]>((day, submission) => {
    let unlocked: string[] = [];
    setState((prev) => {
      const key = String(day);
      const already = Boolean(prev.submissions[key]?.submittedAt);
      const nextStreak = already ? prev.progress.streak : prev.progress.streak + 1;
      const next: AbState = {
        ...prev,
        currentDay: already ? prev.currentDay : Math.min(day + 1, prev.totalDays + 1),
        submissions: {
          ...prev.submissions,
          [key]: { ...submission, submittedAt: new Date().toISOString() },
        },
        progress: already
          ? prev.progress
          : {
              ...prev.progress,
              completedDays: Math.min(prev.progress.completedDays + 1, prev.totalDays),
              streak: nextStreak,
              bestStreak: Math.max(prev.progress.bestStreak, nextStreak),
              projectsBuilt: prev.progress.projectsBuilt + 1,
              projectsThisWeek: prev.progress.projectsThisWeek + 1,
              rank: Math.max(1, prev.progress.rank - 4),
              rankDelta: prev.progress.rankDelta + 4,
            },
        activity: already
          ? prev.activity
          : prev.activity.map((point, i) =>
              i === prev.activity.length - 1
                ? {
                    ...point,
                    builds: point.builds + 1,
                    proofs:
                      point.proofs +
                      [submission.repo, submission.commit, submission.linkedin, submission.deployment].filter(
                        Boolean,
                      ).length,
                  }
                : point,
            ),
      };
      const resolved = resolveAchievements(next);
      unlocked = resolved.filter((id) => !prev.achievements.includes(id));
      return { ...next, achievements: resolved };
    });
    return unlocked;
  }, []);

  const updateProfile = useCallback((patch: Partial<Student>) => {
    setState((prev) => ({ ...prev, student: { ...prev.student, ...patch } }));
  }, []);

  const setPreference = useCallback((key: keyof AbState["preferences"], value: boolean) => {
    setState((prev) => ({ ...prev, preferences: { ...prev.preferences, [key]: value } }));
  }, []);

  const simulateMissedDay = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentDay: Math.min(prev.currentDay + 1, prev.totalDays),
      progress: {
        ...prev.progress,
        streak: 0,
        missedDays: prev.progress.missedDays.includes(prev.currentDay)
          ? prev.progress.missedDays
          : [...prev.progress.missedDays, prev.currentDay],
      },
    }));
  }, []);

  const resetDemo = useCallback(() => {
    clearState();
    setState(createInitialState());
  }, []);

  const value = useMemo<AbContextValue>(() => {
    const name = state.student.name.trim();
    const initials =
      name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("") || "AB";
    return {
      state,
      hydrated,
      completionPct: Math.round((state.progress.completedDays / state.totalDays) * 100),
      daysRemaining: Math.max(state.totalDays - state.progress.completedDays, 0),
      deployments: countDeployments(state),
      proofCount: countProofs(state),
      unlockedAchievements: state.achievements,
      displayName: name || "Builder",
      initials,
      profileComplete: Boolean(name && state.student.track),
      toggleRequirement,
      toggleCriterion,
      saveDraft,
      submitDay,
      updateProfile,
      setPreference,
      simulateMissedDay,
      resetDemo,
    };
  }, [
    state,
    hydrated,
    toggleRequirement,
    toggleCriterion,
    saveDraft,
    submitDay,
    updateProfile,
    setPreference,
    simulateMissedDay,
    resetDemo,
  ]);

  return <ABTalksContext.Provider value={value}>{children}</ABTalksContext.Provider>;
}

export { getChallenge };
