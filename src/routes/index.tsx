import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, GitBranch, Trophy } from "lucide-react";
import { Panel } from "@/components/ui/panel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABTalks — 60-Day Coding Challenge for Builders" },
      {
        name: "description",
        content:
          "Ship one project a day for 60 days. ABTalks gives you daily briefs, proof-of-work submissions, streaks and achievements.",
      },
      { property: "og:title", content: "ABTalks — 60-Day Coding Challenge for Builders" },
      {
        property: "og:description",
        content: "Ship one project a day for 60 days. ABTalks gives you daily briefs, proof-of-work submissions, streaks and achievements.",
      },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: GitBranch, title: "Proof of work", body: "Every day ends with a repo, a commit and a public post." },
  { icon: Flame, title: "Streaks that stick", body: "Miss a day and your streak resets — never your progress." },
  { icon: Trophy, title: "Achievements", body: "Unlock milestones from first commit to the 60-day finish." },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="label-caps">ABTalks · 60-day challenge</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Build for 60 days.
          <span className="block text-primary">Prove every single one.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A daily brief, a build, and a public proof of work. ABTalks tracks your streak, your submissions and the
          milestones you unlock along the way.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open dashboard <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/challenges"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-bold transition-colors hover:bg-primary-softer"
          >
            Browse all 60 days
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <Panel key={title} className="p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-3.5 text-base font-bold">{title}</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
            </Panel>
          ))}
        </div>
      </div>
    </main>
  );
}
