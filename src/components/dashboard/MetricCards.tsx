import { Flame, FolderGit2, Link2, Target } from "lucide-react";
import { Panel, Ring } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";
import type { LucideIcon } from "lucide-react";

function MetricCard({
  label,
  value,
  support,
  icon: Icon,
  ring,
}: {
  label: string;
  value: string;
  support: string;
  icon: LucideIcon;
  ring?: number;
}) {
  return (
    <Panel className="min-w-0">
      <div className="flex items-start justify-between gap-2">
        <p className="label-caps min-w-0 leading-tight">{label}</p>
        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary-softer text-primary">
          <Icon className="size-4" strokeWidth={2.2} />
        </span>
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <p className="text-2xl font-extrabold tracking-tight sm:text-[28px]">{value}</p>
        {typeof ring === "number" && <Ring value={ring} label={`${ring}%`} />}
      </div>
      <p className="mt-1.5 truncate text-xs font-semibold text-muted-foreground">{support}</p>
    </Panel>
  );
}

export function MetricCards() {
  const { state, completionPct, proofCount } = useABTalks();
  const { progress } = state;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
      <MetricCard
        label="Current streak"
        value={progress.streak > 0 ? `${progress.streak} days` : "0 days"}
        support={progress.streak > 0 ? `Best: ${progress.bestStreak} days` : "Your streak starts today"}
        icon={Flame}
      />
      <MetricCard
        label="Challenge progress"
        value={`${completionPct}%`}
        support={`${progress.completedDays} / ${state.totalDays} days`}
        icon={Target}
        ring={completionPct}
      />
      <MetricCard
        label="Projects built"
        value={String(progress.projectsBuilt)}
        support={progress.projectsThisWeek > 0 ? `+${progress.projectsThisWeek} this week` : "No builds yet this week"}
        icon={FolderGit2}
      />
      <MetricCard
        label="Proof submitted"
        value={String(proofCount)}
        support="GitHub + LinkedIn"
        icon={Link2}
      />
    </div>
  );
}
