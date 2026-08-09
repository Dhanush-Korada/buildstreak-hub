import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Your Track — ABTalks" },
      { name: "description", content: "The learning track powering your daily ABTalks challenge briefs." },
      { property: "og:title", content: "Your Track — ABTalks" },
      { property: "og:description", content: "The learning track powering your daily ABTalks challenge briefs." },
    ],
  }),
  component: TrackPage,
});

function TrackPage() {
  return (
    <AppShell title="Track">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Track</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">The learning track powering your daily ABTalks challenge briefs.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Track lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
