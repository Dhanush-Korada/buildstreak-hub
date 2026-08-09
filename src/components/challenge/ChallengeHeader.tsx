import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Signal } from "lucide-react";
import { Pill } from "@/components/ui/panel";
import type { Challenge } from "@/data/challenges";

export function ChallengeHeader({
  challenge,
  status,
}: {
  challenge: Challenge;
  status: "Completed" | "In progress" | "Upcoming";
}) {
  return (
    <header className="space-y-4">
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to dashboard
      </Link>

      <div className="space-y-3">
        <p className="label-caps">
          Day {challenge.day} / 60 · {challenge.difficulty} track
        </p>
        <h1 className="text-2xl font-extrabold leading-tight sm:text-[32px]">{challenge.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone={status === "Completed" ? "success" : status === "In progress" ? "solid" : "muted"}>
            {status}
          </Pill>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold">
            <Signal className="size-3.5 text-primary" /> {challenge.difficulty}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold">
            <Clock className="size-3.5 text-primary" /> {challenge.estimate}
          </span>
        </div>
      </div>
    </header>
  );
}
