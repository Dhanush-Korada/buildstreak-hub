import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Progress — ABTalks" },
      { name: "description", content: "Track your completion rate, streak history and 60-day timeline in ABTalks." },
      { property: "og:title", content: "Progress — ABTalks" },
      { property: "og:description", content: "Track your completion rate, streak history and 60-day timeline in ABTalks." },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <AppShell title="Progress">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Progress</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Track your completion rate, streak history and 60-day timeline in ABTalks.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Progress lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
