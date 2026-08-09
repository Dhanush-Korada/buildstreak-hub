import { Link, useNavigate } from "@tanstack/react-router";
import { Bell, ChevronDown, Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pill } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";
import { toast } from "sonner";

interface TopHeaderProps {
  title: string;
  collapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobileMenu: () => void;
}

export function TopHeader({ title, collapsed, onToggleSidebar, onOpenMobileMenu }: TopHeaderProps) {
  const { state, initials, displayName, resetDemo } = useABTalks();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          aria-label="Open menu"
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          <Menu className="size-5" />
        </button>
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground lg:grid"
        >
          {collapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
        </button>

        <p className="min-w-0 flex-1 truncate text-sm font-bold sm:text-[15px]">{title}</p>

        <Pill className="hidden sm:inline-flex">60 Day Challenge</Pill>

        <button
          type="button"
          aria-label="Notifications"
          onClick={() =>
            toast(`Day ${state.currentDay} is waiting`, {
              description: "Keep the streak alive — submit your proof before midnight.",
            })
          }
          className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          <Bell className="size-4.5" />
          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Account menu"
            className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card p-1.5 pr-2 transition-colors hover:bg-primary-softer"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-primary-soft text-[11px] font-extrabold text-accent-foreground">
              {initials}
            </span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl">
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              Signed in as
              <span className="mt-0.5 block text-sm font-bold text-foreground">{displayName}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/day/$day" params={{ day: String(state.currentDay) }}>
                Today&apos;s challenge
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                resetDemo();
                toast.success("Demo data reset.");
                navigate({ to: "/dashboard" });
              }}
            >
              Reset demo data
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
