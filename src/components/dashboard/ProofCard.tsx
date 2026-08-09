import { Link } from "@tanstack/react-router";
import { Check, Circle, ExternalLink } from "lucide-react";
import { Bar, Panel, PanelHead } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";
import { PROOF_FIELDS } from "@/utils/validation";
import { cn } from "@/lib/utils";

export function ProofCard() {
  const { state } = useABTalks();
  const day = state.currentDay;
  const submission = state.submissions[String(day)];
  const rows = PROOF_FIELDS.map((field) => ({
    label: field.label,
    value: submission?.[field.key] ?? "",
  }));
  const done = rows.filter((r) => Boolean(r.value)).length;

  return (
    <Panel>
      <PanelHead
        label="Today's proof"
        title={`Day ${day} proof of work`}
        subtitle={`${done} / ${rows.length} complete`}
      />
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5"
          >
            <span
              className={cn(
                "grid size-6 shrink-0 place-items-center rounded-full",
                row.value ? "bg-success-soft text-success" : "bg-muted text-muted-foreground",
              )}
            >
              {row.value ? <Check className="size-3.5" strokeWidth={3} /> : <Circle className="size-3" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{row.label}</span>
              <span className="block truncate text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {row.value ? "Submitted" : "Missing"}
              </span>
            </span>
            {row.value && (
              <a
                href={row.value}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${row.label} in a new tab`}
                className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-primary-softer hover:text-primary"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </li>
        ))}
      </ul>
      <Bar value={(done / rows.length) * 100} className="mt-4" />
      <Link
        to="/day/$day"
        params={{ day: String(day) }}
        hash="submission"
        className="mt-4 flex w-full items-center justify-center rounded-xl border border-border bg-primary-softer px-4 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-primary-soft"
      >
        {done === rows.length ? "Review submission" : "Complete submission"}
      </Link>
    </Panel>
  );
}
