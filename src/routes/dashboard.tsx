import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { LearningActivity } from "@/components/dashboard/LearningActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TodayChallenge } from "@/components/dashboard/TodayChallenge";
import { ProofCard } from "@/components/dashboard/ProofCard";
import { Achievements } from "@/components/dashboard/Achievements";
import { Standing } from "@/components/dashboard/Standing";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Pill } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";
import { ArrowRight, CircleAlert, UserPlus } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — ABTalks 60-Day Coding Challenge" },
      {
        name: "description",
        content:
          "Track your streak, daily builds, proof of work and achievements across the ABTalks 60-day coding challenge.",
      },
      { property: "og:title", content: "Dashboard — ABTalks 60-Day Coding Challenge" },
      {
        property: "og:description",
        content: "Your streak, builds, proof submissions and achievements in one developer dashboard.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { state, displayName, profileComplete } = useABTalks();
  const missedLast = state.progress.missedDays.at(-1);

  return (
    <AppShell title="Dashboard">
      <div className="space-y-4 sm:space-y-5">
        <header className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Dashboard</h1>
              <Pill>
                Day {state.currentDay} / {state.totalDays}
              </Pill>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Welcome back, {displayName}. Here&apos;s your progress for today.
            </p>
          </div>
          <Link
            to="/day/$day"
            params={{ day: String(state.currentDay) }}
            className="inline-flex items-center justify-center gap-1.5 self-start rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-bold transition-colors hover:bg-primary-softer sm:self-auto"
          >
            View challenge <ArrowRight className="size-4" />
          </Link>
        </header>

        {!profileComplete && (
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
              <UserPlus className="size-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">Complete your profile</p>
              <p className="mt-0.5 text-[13px] text-muted-foreground">Add your name, track and profile photo.</p>
            </div>
            <Link
              to="/profile"
              className="shrink-0 self-center rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground"
            >
              Update
            </Link>
          </div>
        )}

        {typeof missedLast === "number" && (
          <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4">
            <CircleAlert className="mt-0.5 size-4.5 shrink-0 text-warning" />
            <p className="min-w-0 text-[13px] font-semibold">
              Day {missedLast} missed.{" "}
              <span className="font-medium text-muted-foreground">
                Your streak reset, but your progress didn&apos;t.
              </span>
            </p>
          </div>
        )}

        {state.progress.streak === 0 && state.progress.completedDays === 0 && (
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-bold">Your streak starts today.</p>
            <p className="mt-0.5 text-[13px] text-muted-foreground">
              Complete your first challenge to light the 🔥.
            </p>
          </div>
        )}

        <MetricCards />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ProgressCard />
            <LearningActivity />
            <Achievements />
          </div>
          <div className="space-y-4">
            <TodayChallenge />
            <QuickActions />
            <ProofCard />
            <Standing />
            <RecentActivity />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
