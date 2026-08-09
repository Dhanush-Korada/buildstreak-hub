import { Link } from "@tanstack/react-router";
import { ArrowRight, FolderGit2, PlayCircle, TrendingUp, UploadCloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Panel, PanelHead } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";

const ROW =
  "group flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-3 transition-colors hover:border-border-strong hover:bg-primary-softer/70";

function RowBody({ icon: Icon, label, detail }: { icon: LucideIcon; label: string; detail: string }) {
  return (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
        <Icon className="size-4.5" strokeWidth={2.1} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-bold">{label}</span>
        <span className="block truncate text-xs text-muted-foreground">{detail}</span>
      </span>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function QuickActions() {
  const { state } = useABTalks();
  const day = String(state.currentDay);

  return (
    <Panel>
      <PanelHead label="Quick actions" title="Challenge actions" />
      <ul className="space-y-2">
        <Item>
          <Link to="/day/$day" params={{ day }} className={ROW}>
            <RowBody icon={PlayCircle} label="Open today's challenge" detail={`Day ${state.currentDay} brief`} />
          </Link>
        </Item>
        <Item>
          <Link to="/day/$day" params={{ day }} hash="submission" className={ROW}>
            <RowBody icon={UploadCloud} label="Submit proof" detail="Repo, commit, post, deploy" />
          </Link>
        </Item>
        <Item>
          <Link to="/progress" className={ROW}>
            <RowBody icon={TrendingUp} label="View progress" detail="Streak and timeline" />
          </Link>
        </Item>
        <Item>
          <Link to="/projects" className={ROW}>
            <RowBody icon={FolderGit2} label="My projects" detail="Everything you shipped" />
          </Link>
        </Item>
      </ul>
    </Panel>
  );
}
