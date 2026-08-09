import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_SECTIONS } from "./nav";
import { useABTalks } from "@/hooks/useABTalks";

function Wordmark({ collapsed }: { collapsed: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-xl px-1 py-1 transition-opacity hover:opacity-80"
      aria-label="ABTalks home"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-[0.75rem] bg-primary text-primary-foreground">
        <span className="text-[15px] font-black leading-none">◈</span>
      </span>
      {!collapsed && <span className="truncate text-[17px] font-extrabold tracking-tight">ABTalks</span>}
    </Link>
  );
}

interface SidebarProps {
  collapsed?: boolean;
  onNavigate?: () => void;
  onClose?: () => void;
}

export function Sidebar({ collapsed = false, onNavigate, onClose }: SidebarProps) {
  const { state, initials, displayName } = useABTalks();

  return (
    <div className="flex h-full flex-col gap-6 border-r border-sidebar-border bg-sidebar px-3 py-4">
      <div className="flex items-center justify-between gap-2 px-1">
        <Wordmark collapsed={collapsed} />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-9 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-primary-softer hover:text-foreground lg:hidden"
          >
            <X className="size-4.5" />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto no-scrollbar" aria-label="Main navigation">
        {NAV_SECTIONS.map((section) => (
          <div key={section.heading} className="space-y-1">
            {!collapsed && <p className="label-caps px-3 pb-1">{section.heading}</p>}
            {section.items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onNavigate}
                title={item.label}
                activeProps={{
                  className: "bg-primary-soft text-accent-foreground",
                  "aria-current": "page",
                }}
                inactiveProps={{ className: "text-muted-foreground hover:bg-primary-softer hover:text-foreground" }}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                  collapsed && "justify-center px-0",
                )}
              >
                <item.icon className="size-4.5 shrink-0" strokeWidth={2} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <Link
        to="/profile"
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-card",
          collapsed && "justify-center border-transparent bg-transparent p-1",
        )}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-xs font-extrabold text-accent-foreground">
          {initials}
        </span>
        {!collapsed && (
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold">{displayName}</span>
            <span className="block truncate text-xs text-muted-foreground">
              {state.student.track || "Track not set"}
            </span>
          </span>
        )}
      </Link>
    </div>
  );
}
