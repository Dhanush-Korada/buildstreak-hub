import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import { MobileBottomNav } from "./MobileBottomNav";
import { useABTalks } from "@/hooks/useABTalks";

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const { state, setPreference } = useABTalks();
  const collapsed = state.preferences.sidebarCollapsed;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden lg:block",
          collapsed ? "w-[76px]" : "w-[240px]",
        )}
      >
        <Sidebar collapsed={collapsed} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[264px] max-w-[85vw] animate-in slide-in-from-left duration-200">
            <Sidebar onNavigate={() => setMobileOpen(false)} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className={cn("flex min-h-screen flex-col", collapsed ? "lg:pl-[76px]" : "lg:pl-[240px]")}>
        <TopHeader
          title={title}
          collapsed={collapsed}
          onToggleSidebar={() => setPreference("sidebarCollapsed", !collapsed)}
          onOpenMobileMenu={() => setMobileOpen(true)}
        />
        <main className="flex-1 px-4 pb-28 pt-5 sm:px-6 lg:px-8 lg:pb-12">
          <div className="mx-auto w-full max-w-[1180px]">{children}</div>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
