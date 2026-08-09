import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead, Pill } from "@/components/ui/panel";
import { CHALLENGES } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenges")({
  head: () => ({
    meta: [
      { title: "All 60 Challenges — ABTalks" },
      {
        name: "description",
        content: "Browse every day of the ABTalks 60-day coding challenge, from setup day to capstone launch.",
      },
      { property: "og:title", content: "All 60 Challenges — ABTalks" },
      { property: "og:description", content: "Every build in the ABTalks 60-day coding challenge." },
    ],
  }),
  component: ChallengesPage,
});

function ChallengesPage() {
  const { state } = useABTalks();

  return (
    <AppShell title="Challenges">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Challenges</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            All 60 daily builds in your {state.student.track || "coding"} track.
          </p>
        </header>

        <Panel>
          <PanelHead label="Challenge library" title="Day by day" subtitle="Tap any day to open the brief." />
          <ul className="space-y-2">
            {CHALLENGES.map((challenge) => {
              const done = Boolean(state.submissions[String(challenge.day)]?.submittedAt);
              const isToday = challenge.day === state.currentDay;
              return (
                <li key={challenge.day}>
                  <Link
                    to="/day/$day"
                    params={{ day: String(challenge.day) }}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors",
                      isToday ? "border-primary/40 bg-primary-softer" : "border-border hover:bg-primary-softer/60",
                    )}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-card text-[11px] font-extrabold text-accent-foreground">
                      {String(challenge.day).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold">{challenge.title}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {challenge.difficulty} · {challenge.estimate}
                      </span>
                    </span>
                    {done ? (
                      <Pill tone="success" className="shrink-0">
                        <Check className="size-3" strokeWidth={3} /> Done
                      </Pill>
                    ) : isToday ? (
                      <Pill tone="solid" className="shrink-0">
                        Today
                      </Pill>
                    ) : (
                      <Pill tone="muted" className="shrink-0">
                        Soon
                      </Pill>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}
