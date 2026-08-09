import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleAlert, Circle, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { Bar, Panel, PanelHead } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import { ACHIEVEMENTS, type Challenge } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";
import { PROOF_FIELDS, isProofValid, validateProof, type ProofField } from "@/utils/validation";

type Values = Record<ProofField, string>;

const EMPTY: Values = { repo: "", commit: "", linkedin: "", deployment: "" };

export function SubmissionForm({ challenge }: { challenge: Challenge }) {
  const { state, saveDraft, submitDay } = useABTalks();
  const stored = state.submissions[String(challenge.day)];
  const alreadySubmitted = Boolean(stored?.submittedAt);

  const [values, setValues] = useState<Values>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<ProofField, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(alreadySubmitted ? "done" : "idle");

  useEffect(() => {
    if (stored) {
      setValues({
        repo: stored.repo ?? "",
        commit: stored.commit ?? "",
        linkedin: stored.linkedin ?? "",
        deployment: stored.deployment ?? "",
      });
      if (stored.submittedAt) setStatus("done");
    }
  }, [stored]);

  const errors = useMemo(() => {
    const next: Partial<Record<ProofField, string>> = {};
    for (const field of PROOF_FIELDS) {
      const error = validateProof(field.key, values[field.key]);
      if (error) next[field.key] = error;
    }
    return next;
  }, [values]);

  const completed = PROOF_FIELDS.filter((f) => isProofValid(f.key, values[f.key]));
  const requiredReady = PROOF_FIELDS.filter((f) => f.required).every((f) => isProofValid(f.key, values[f.key]));

  function handleChange(field: ProofField, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    saveDraft(challenge.day, { [field]: value });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setTouched({ repo: true, commit: true, linkedin: true, deployment: true });
    if (!requiredReady || status !== "idle") {
      if (!requiredReady) toast.warning("Add every required link before submitting.");
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    const unlocked = submitDay(challenge.day, values);
    setStatus("done");
    toast.success(`Day ${challenge.day} submitted successfully.`);
    unlocked.forEach((id) => {
      const achievement = ACHIEVEMENTS.find((a) => a.id === id);
      if (achievement) toast.success(`Achievement unlocked — ${achievement.name}!`);
    });
  }

  if (status === "done") {
    return <SuccessState challenge={challenge} />;
  }

  return (
    <Panel id="submission">
      <PanelHead
        label="Submit your proof"
        title="Show what you built today"
        subtitle="Add the links that prove your work."
      />

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {PROOF_FIELDS.map((field) => {
          const error = touched[field.key] ? errors[field.key] : undefined;
          return (
            <div key={field.key} className="space-y-1.5">
              <label htmlFor={`proof-${field.key}`} className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold">
                  {field.label}
                  {!field.required && <span className="ml-1.5 text-xs font-semibold text-muted-foreground">optional</span>}
                </span>
                {isProofValid(field.key, values[field.key]) && (
                  <Check className="size-4 shrink-0 text-success" strokeWidth={3} />
                )}
              </label>
              <input
                id={`proof-${field.key}`}
                type="url"
                inputMode="url"
                value={values[field.key]}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.key, e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, [field.key]: true }))}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `proof-${field.key}-error` : undefined}
                className={cn(
                  "w-full rounded-xl border bg-card px-3.5 py-3 text-sm font-medium outline-none transition-colors placeholder:text-muted-foreground/70",
                  error ? "border-destructive" : "border-input focus:border-primary",
                )}
              />
              {error && (
                <p
                  id={`proof-${field.key}-error`}
                  role="alert"
                  className="flex items-center gap-1.5 text-xs font-semibold text-destructive"
                >
                  <CircleAlert className="size-3.5 shrink-0" /> {error}
                </p>
              )}
            </div>
          );
        })}

        <div className="rounded-2xl border border-border bg-primary-softer/60 p-3.5">
          <p className="label-caps">Submission checklist</p>
          <ul className="mt-2.5 space-y-1.5">
            {PROOF_FIELDS.map((field) => {
              const ok = isProofValid(field.key, values[field.key]);
              return (
                <li key={field.key} className="flex items-center gap-2 text-sm font-semibold">
                  <span
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-full",
                      ok ? "bg-success-soft text-success" : "bg-card text-muted-foreground",
                    )}
                  >
                    {ok ? <Check className="size-3" strokeWidth={3} /> : <Circle className="size-2.5" />}
                  </span>
                  <span className={cn("min-w-0 truncate", !ok && "text-muted-foreground")}>{field.label}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs font-bold text-muted-foreground">
            {completed.length} / {PROOF_FIELDS.length} complete
          </p>
          <Bar value={(completed.length / PROOF_FIELDS.length) * 100} className="mt-2" />
        </div>

        <button
          type="submit"
          disabled={!requiredReady || status === "submitting"}
          className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "submitting" ? "Submitting..." : `Submit Day ${challenge.day}`}
        </button>
        {!requiredReady && (
          <p className="text-center text-xs font-semibold text-muted-foreground">
            Repository, commit and LinkedIn links are required.
          </p>
        )}
      </form>
    </Panel>
  );
}

export function SuccessState({ challenge }: { challenge: Challenge }) {
  const { state, completionPct } = useABTalks();
  const nextDay = Math.min(challenge.day + 1, state.totalDays);

  return (
    <Panel id="submission" className="text-center">
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-success-soft text-success">
        <Check className="size-7" strokeWidth={3} />
      </span>
      <h2 className="mt-4 text-xl font-extrabold sm:text-2xl">Day {challenge.day} complete!</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">Your proof of work has been submitted.</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-primary-softer px-3 py-3">
          <p className="label-caps">Streak</p>
          <p className="mt-1 text-lg font-extrabold">🔥 {state.progress.streak} days</p>
        </div>
        <div className="rounded-2xl bg-primary-softer px-3 py-3">
          <p className="label-caps">Completed</p>
          <p className="mt-1 text-lg font-extrabold">
            {state.progress.completedDays} / {state.totalDays}
          </p>
        </div>
      </div>
      <Bar value={completionPct} className="mt-4" />

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          to="/dashboard"
          className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm font-bold transition-colors hover:bg-primary-softer"
        >
          Back to dashboard
        </Link>
        <Link
          to="/day/$day"
          params={{ day: String(nextDay) }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Continue to day {nextDay} <ArrowRight className="size-4" />
        </Link>
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
        <PartyPopper className="size-3.5" /> Your dashboard has been updated.
      </p>
    </Panel>
  );
}
