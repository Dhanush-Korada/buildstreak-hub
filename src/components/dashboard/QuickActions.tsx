import { Link } from "@tanstack/react-router";
import { ArrowRight, FolderGit2, PlayCircle, TrendingUp, UploadCloud } from "lucide-react";
import { Panel, PanelHead } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";

export function QuickActions() {
  const { state } = useABTalks();
  const day = String(state.currentDay);

  const actions = [
    {
      label: "Open today's challenge",
      detail: `Day ${state.currentDay} brief`,
      icon: PlayCircle,
      to: "/day/$day" as const,
      params: { day },
      hash: undefined,
    },
    {
      label: "Submit proof",
      detail: "Repo, commit, post, deploy",
      icon: UploadCloud,
      to: "/day/$day" as const,
      params: { day },
      hash: "submission",
    },
    {
      label: "View progress",
      detail: "Streak and timeline",
      icon: TrendingUp,
      to: "/progress" as const,
      params: undefined,
      hash: undefined,
    },
    {
      label: "My projects",
      detail: "Everything you shipped",
      icon: FolderGit2,
      to: "/projects" as const,
      params: undefined,
      hash: undefined,
    },
  ];

  return (
    <Panel>
      <PanelHead label="Quick actions" title="Challenge actions" />
      <ul className="space-y-2">
        {actions.map((action) => (
          <li key={action.label}>
            <Link
              to={action.to}
              params={action.params as never}
              hash={action.hash}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-3 transition-colors hover:border-border-strong hover:bg-primary-softer/70"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
                <action.icon className="size-4.5" strokeWidth={2.1} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">{action.label}</span>
                <span className="block truncate text-xs text-muted-foreground">{action.detail}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
