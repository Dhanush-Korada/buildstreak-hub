import { Award, Lock } from "lucide-react";
import { Panel, PanelHead } from "@/components/ui/panel";
import { ACHIEVEMENTS } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";
import { cn } from "@/lib/utils";

export function Achievements({ grid = false }: { grid?: boolean }) {
  const { unlockedAchievements } = useABTalks();
  const unlockedCount = ACHIEVEMENTS.filter((a) => unlockedAchievements.includes(a.id)).length;

  return (
    <Panel>
      <PanelHead
        label="Achievements"
        title="Milestones"
        subtitle={`${unlockedCount} of ${ACHIEVEMENTS.length} unlocked`}
      />
      <ul
        className={cn(
          grid
            ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            : "-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-1 no-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible",
        )}
      >
        {ACHIEVEMENTS.map((achievement) => {
          const unlocked = unlockedAchievements.includes(achievement.id);
          return (
            <li
              key={achievement.id}
              className={cn(
                "shrink-0 snap-start rounded-2xl border p-3 transition-colors",
                grid ? "" : "w-[148px] sm:w-auto",
                unlocked
                  ? "border-primary/25 bg-primary-softer"
                  : "border-border bg-muted/60 opacity-70",
              )}
            >
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-xl",
                  unlocked ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
                )}
              >
                {unlocked ? <Award className="size-4.5" /> : <Lock className="size-4" />}
              </span>
              <p className="mt-2.5 text-sm font-bold leading-tight">{achievement.name}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
                {unlocked ? "Unlocked" : achievement.detail}
              </p>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
