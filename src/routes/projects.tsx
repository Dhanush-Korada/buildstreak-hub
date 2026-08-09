import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ABTalks" },
      { name: "description", content: "Every repository, commit and deployment you submitted during the challenge." },
      { property: "og:title", content: "Projects — ABTalks" },
      { property: "og:description", content: "Every repository, commit and deployment you submitted during the challenge." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <AppShell title="Projects">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Projects</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Every repository, commit and deployment you submitted during the challenge.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Projects lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
