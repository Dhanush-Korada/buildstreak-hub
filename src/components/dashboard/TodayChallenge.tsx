import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Signal } from "lucide-react";
import { Panel, PanelHead, Pill } from "@/components/ui/panel";
import { getChallenge } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";

export function TodayChallenge() {
  const { state } = useABTalks();
  const challenge = getChallenge(state.currentDay);

  if (!challenge) {
    return (
      <Panel>
        <PanelHead label="Today's challenge" title="Challenge complete" subtitle="All 60 days are done." />
        <p className="text-sm text-muted-foreground">
          You finished the full challenge. Revisit any day from the challenges list to polish your builds.
        </p>
        <Link
          to="/challenges"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Browse challenges <ArrowRight className="size-4" />
        </Link>
      </Panel>
    );
  }

  return (
    <Panel className="bg-card">
      <PanelHead
        label="Today's challenge"
        title={challenge.title}
        action={<Pill tone="solid">Day {challenge.day}</Pill>}
      />
      <p className="text-sm leading-relaxed text-muted-foreground">{challenge.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-xl bg-primary-softer px-3 py-2 text-xs font-bold">
          <Signal className="size-3.5 text-primary" /> {challenge.difficulty}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-xl bg-primary-softer px-3 py-2 text-xs font-bold">
          <Clock className="size-3.5 text-primary" /> {challenge.estimate}
        </span>
      </div>
      <Link
        to="/day/$day"
        params={{ day: String(challenge.day) }}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80"
      >
        Open challenge <ArrowRight className="size-4" />
      </Link>
    </Panel>
  );
}
