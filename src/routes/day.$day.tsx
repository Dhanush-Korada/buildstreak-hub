import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { ChallengeHeader } from "@/components/challenge/ChallengeHeader";
import {
  AcceptanceCriteria,
  ChallengeGoal,
  HintPanel,
  RequirementList,
} from "@/components/challenge/Checklists";
import { SubmissionForm } from "@/components/challenge/SubmissionForm";
import { Panel } from "@/components/ui/panel";
import { getChallenge } from "@/data/challenges";
import { useABTalks } from "@/hooks/useABTalks";

export const Route = createFileRoute("/day/$day")({
  head: ({ params }) => {
    const challenge = getChallenge(Number(params.day));
    const title = challenge
      ? `Day ${challenge.day}: ${challenge.title} — ABTalks`
      : "Challenge not found — ABTalks";
    const description = challenge
      ? `${challenge.description} Submit your GitHub repo, commit, LinkedIn post and live deployment.`
      : "That challenge doesn't exist yet. Head back to your ABTalks dashboard.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ChallengeDayPage,
});

function ChallengeDayPage() {
  const { day } = Route.useParams();
  const { state } = useABTalks();
  const dayNumber = Number(day);
  const challenge = Number.isInteger(dayNumber) ? getChallenge(dayNumber) : undefined;

  if (!challenge) {
    return (
      <AppShell title="Challenge">
        <Panel className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-extrabold">Challenge not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">That challenge doesn&apos;t exist yet.</p>
          <Link
            to="/dashboard"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" /> Back to dashboard
          </Link>
        </Panel>
      </AppShell>
    );
  }

  const submitted = Boolean(state.submissions[String(challenge.day)]?.submittedAt);
  const status = submitted ? "Completed" : challenge.day <= state.currentDay ? "In progress" : "Upcoming";

  return (
    <AppShell title={`Day ${challenge.day} · ${challenge.title}`}>
      <div className="space-y-4 sm:space-y-5">
        <ChallengeHeader challenge={challenge} status={status} />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ChallengeGoal challenge={challenge} />
            <RequirementList challenge={challenge} />
            <HintPanel challenge={challenge} />
            <SubmissionForm challenge={challenge} />
          </div>
          <div className="space-y-4">
            <AcceptanceCriteria challenge={challenge} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
