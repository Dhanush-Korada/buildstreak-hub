import { useState } from "react";
import { Check, ChevronDown, Circle, Target } from "lucide-react";
import { Bar, Panel, PanelHead } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import type { Challenge } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";

export function ChallengeGoal({ challenge }: { challenge: Challenge }) {
  return (
    <Panel>
      <PanelHead label="Today's goal" title="What this build must communicate" />
      <p className="text-sm leading-relaxed text-muted-foreground">{challenge.description}</p>
      <ul className="mt-4 space-y-2">
        {challenge.goals.map((goal) => (
          <li key={goal} className="flex items-start gap-2.5 text-sm font-semibold">
            <Target className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="min-w-0">{goal}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function CheckList({
  items,
  checked,
  onToggle,
  idPrefix,
}: {
  items: string[];
  checked: number[];
  onToggle: (index: number) => void;
  idPrefix: string;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => {
        const isChecked = checked.includes(index);
        return (
          <li key={item}>
            <button
              type="button"
              id={`${idPrefix}-${index}`}
              onClick={() => onToggle(index)}
              aria-pressed={isChecked}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors",
                isChecked
                  ? "border-primary/30 bg-primary-softer"
                  : "border-border bg-card hover:bg-primary-softer/60",
              )}
            >
              <span
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-md border transition-colors",
                  isChecked ? "border-primary bg-primary text-primary-foreground" : "border-border-strong",
                )}
              >
                {isChecked ? <Check className="size-3.5" strokeWidth={3} /> : <Circle className="size-0" />}
              </span>
              <span
                className={cn(
                  "min-w-0 text-sm font-semibold",
                  isChecked && "text-muted-foreground line-through",
                )}
              >
                {item}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function RequirementList({ challenge }: { challenge: Challenge }) {
  const { state, toggleRequirement } = useABTalks();
  const checked = state.requirements[String(challenge.day)] ?? [];

  return (
    <Panel>
      <PanelHead
        label="What to build"
        title="Requirements"
        subtitle={`${checked.length} / ${challenge.requirements.length} complete`}
      />
      <CheckList
        items={challenge.requirements}
        checked={checked}
        onToggle={(i) => toggleRequirement(challenge.day, i)}
        idPrefix="req"
      />
      <Bar value={(checked.length / challenge.requirements.length) * 100} className="mt-4" />
    </Panel>
  );
}

export function AcceptanceCriteria({ challenge }: { challenge: Challenge }) {
  const { state, toggleCriterion } = useABTalks();
  const checked = state.criteria[String(challenge.day)] ?? [];

  return (
    <Panel>
      <PanelHead
        label="Before you submit"
        title="Acceptance criteria"
        subtitle={`${checked.length} / ${challenge.criteria.length} complete`}
      />
      <CheckList
        items={challenge.criteria}
        checked={checked}
        onToggle={(i) => toggleCriterion(challenge.day, i)}
        idPrefix="crit"
      />
    </Panel>
  );
}

export function HintPanel({ challenge }: { challenge: Challenge }) {
  const [open, setOpen] = useState(false);

  return (
    <Panel>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="min-w-0">
          <span className="label-caps block">Stuck?</span>
          <span className="mt-1 block truncate text-base font-bold">Need a hint?</span>
        </span>
        <ChevronDown className={cn("size-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <ol className="overflow-hidden space-y-2">
          {challenge.hint.map((hint, i) => (
            <li key={hint} className="flex items-start gap-3 rounded-xl bg-primary-softer/70 px-3 py-2.5">
              <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-card text-[11px] font-extrabold text-primary">
                {i + 1}
              </span>
              <span className="min-w-0 text-sm font-semibold">{hint}</span>
            </li>
          ))}
        </ol>
      </div>
    </Panel>
  );
}
