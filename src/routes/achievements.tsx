import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — ABTalks" },
      { name: "description", content: "Every milestone you can unlock across the ABTalks 60-day coding challenge." },
      { property: "og:title", content: "Achievements — ABTalks" },
      { property: "og:description", content: "Every milestone you can unlock across the ABTalks 60-day coding challenge." },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <AppShell title="Achievements">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Achievements</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Every milestone you can unlock across the ABTalks 60-day coding challenge.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Achievements lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
