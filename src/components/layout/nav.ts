import {
  Award,
  CalendarDays,
  FolderGit2,
  Home,
  LayoutDashboard,
  ListChecks,
  Route as RouteIcon,
  Settings,
  TrendingUp,
  User,
} from "lucide-react";

export const NAV_SECTIONS = [
  {
    heading: "Main",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/challenges", label: "Challenges", icon: ListChecks },
      { to: "/progress", label: "Progress", icon: TrendingUp },
      { to: "/achievements", label: "Achievements", icon: Award },
    ],
  },
  {
    heading: "Learning",
    items: [
      { to: "/track", label: "My Track", icon: RouteIcon },
      { to: "/calendar", label: "Challenge Calendar", icon: CalendarDays },
      { to: "/projects", label: "My Projects", icon: FolderGit2 },
    ],
  },
  {
    heading: "Account",
    items: [
      { to: "/profile", label: "Profile", icon: User },
      { to: "/settings", label: "Settings", icon: Settings },
    ],
  },
] as const;

export const MOBILE_NAV = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/challenges", label: "Challenges", icon: ListChecks },
  { to: "/progress", label: "Progress", icon: TrendingUp },
  { to: "/profile", label: "Profile", icon: User },
] as const;
