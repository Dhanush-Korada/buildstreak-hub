import { Bar, Panel, PanelHead } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import { useABTalks } from "@/hooks/useABTalks";

export function ProgressCard() {
  const { state, completionPct, daysRemaining } = useABTalks();
  const { progress, currentDay, totalDays } = state;
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <Panel>
      <PanelHead
        label="Challenge progress"
        title="60-Day Challenge"
        subtitle="Your journey so far"
        action={
          <span className="shrink-0 rounded-full bg-primary-softer px-3 py-1 text-[11px] font-bold uppercase tracking-[0.07em] text-accent-foreground">
            Day {currentDay}
          </span>
        }
      />

      <div className="flex items-end justify-between gap-3">
        <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">{completionPct}%</p>
        <p className="pb-1.5 text-right text-[13px] font-semibold text-muted-foreground">
          {progress.completedDays} / {totalDays} days completed
        </p>
      </div>
      <Bar value={completionPct} className="mt-3 h-2.5" />

      <dl className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { k: "Streak", v: `${progress.streak} days` },
          { k: "Remaining", v: `${daysRemaining} days` },
          { k: "Best streak", v: `${progress.bestStreak} days` },
        ].map((item) => (
          <div key={item.k} className="min-w-0 rounded-xl bg-primary-softer/70 px-3 py-2.5">
            <dt className="label-caps truncate text-[10px]">{item.k}</dt>
            <dd className="mt-0.5 truncate text-sm font-bold">{item.v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <p className="label-caps">60-day timeline</p>
        <ol className="mt-2.5 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1" aria-label="Sixty day timeline">
          {days.map((day) => {
            const completed = day <= progress.completedDays && !progress.missedDays.includes(day);
            const missed = progress.missedDays.includes(day);
            const isCurrent = day === currentDay;
            return (
              <li
                key={day}
                title={`Day ${day}${completed ? " — completed" : missed ? " — missed" : isCurrent ? " — today" : ""}`}
                className={cn(
                  "h-5 rounded-[5px] transition-colors sm:h-6",
                  completed && "bg-primary",
                  missed && "bg-warning-soft ring-1 ring-warning/50",
                  !completed && !missed && "bg-muted",
                  isCurrent && "bg-primary-soft ring-2 ring-primary",
                )}
              />
            );
          })}
        </ol>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-primary" /> Completed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-primary-soft ring-1 ring-primary" /> Today
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-muted" /> Upcoming
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-warning-soft ring-1 ring-warning/50" /> Missed
          </span>
        </div>
      </div>
    </Panel>
  );
}
