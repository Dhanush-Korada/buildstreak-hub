import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — ABTalks" },
      { name: "description", content: "Manage notifications, reminders and challenge preferences in ABTalks." },
      { property: "og:title", content: "Settings — ABTalks" },
      { property: "og:description", content: "Manage notifications, reminders and challenge preferences in ABTalks." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <AppShell title="Settings">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Settings</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Manage notifications, reminders and challenge preferences in ABTalks.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Settings lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
