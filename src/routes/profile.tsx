import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Panel, PanelHead } from "@/components/ui/panel";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — ABTalks" },
      { name: "description", content: "Update your name, track and avatar for the ABTalks challenge." },
      { property: "og:title", content: "Profile — ABTalks" },
      { property: "og:description", content: "Update your name, track and avatar for the ABTalks challenge." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell title="Profile">
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[30px]">Profile</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Update your name, track and avatar for the ABTalks challenge.</p>
        </header>
        <Panel>
          <PanelHead label="Coming next" title="Profile lives on your dashboard for now" subtitle="Everything you need is on the dashboard while this view is built out." />
          <Link to="/dashboard" className="inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">Go to dashboard</Link>
        </Panel>
      </div>
    </AppShell>
  );
}
