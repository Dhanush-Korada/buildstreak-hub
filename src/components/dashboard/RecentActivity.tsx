import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Panel, PanelHead } from "@/components/ui/panel";
import { getChallenge } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";

export function RecentActivity() {
  const { state } = useABTalks();
  const days = Object.keys(state.submissions)
    .map(Number)
    .filter((d) => Boolean(state.submissions[String(d)]?.submittedAt))
    .sort((a, b) => b - a)
    .slice(0, 4);

  return (
    <Panel>
      <PanelHead label="Recent activity" title="Latest completed builds" />
      {days.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border-strong px-4 py-6 text-center text-sm text-muted-foreground">
          No builds submitted yet. Your first completed day will appear here.
        </p>
      ) : (
        <ol className="space-y-2">
          {days.map((day) => {
            const challenge = getChallenge(day);
            return (
              <li key={day}>
                <Link
                  to="/day/$day"
                  params={{ day: String(day) }}
                  className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 transition-colors hover:bg-primary-softer/70"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-softer text-[11px] font-extrabold text-accent-foreground">
                    {String(day).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold">{challenge?.title ?? "Challenge"}</span>
                    <span className="block truncate text-xs text-muted-foreground">Day {day} of 60</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-success">
                    <Check className="size-3" strokeWidth={3} /> Done
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </Panel>
  );
}
