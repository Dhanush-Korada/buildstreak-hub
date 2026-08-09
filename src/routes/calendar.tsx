import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — ABTalks" },
      { name: "description", content: "See which days you shipped and which days you missed across the challenge." },
      { property: "og:title", content: "Calendar — ABTalks" },
      { property: "og:description", content: "See which days you shipped and which days you missed across the challenge." },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <AppShell title="Calendar">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Calendar</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">See which days you shipped and which days you missed across the challenge.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Calendar lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
