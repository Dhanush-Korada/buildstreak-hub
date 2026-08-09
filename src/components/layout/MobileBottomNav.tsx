import { Link } from "@tanstack/react-router";
import { MOBILE_NAV } from "./nav";

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {MOBILE_NAV.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              activeProps={{ className: "text-primary", "aria-current": "page" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="flex flex-col items-center gap-1 px-2 py-2.5 text-[11px] font-bold transition-colors"
            >
              <item.icon className="size-5" strokeWidth={2.1} />
              <span className="truncate">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
