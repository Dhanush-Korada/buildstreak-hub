export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Challenge {
  day: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimate: string;
  goals: string[];
  requirements: string[];
  criteria: string[];
  hint: string[];
}

export interface Student {
  name: string;
  track: string;
  email: string;
  avatarUrl: string;
}

export interface Submission {
  repo: string;
  commit: string;
  linkedin: string;
  deployment: string;
  submittedAt: string;
}

export interface Progress {
  completedDays: number;
  streak: number;
  bestStreak: number;
  missedDays: number[];
  rank: number;
  totalBuilders: number;
  rankDelta: number;
  projectsBuilt: number;
  projectsThisWeek: number;
}

export interface ActivityPoint {
  label: string;
  builds: number;
  proofs: number;
}

export interface AbState {
  student: Student;
  currentDay: number;
  totalDays: number;
  progress: Progress;
  submissions: Record<string, Submission>;
  requirements: Record<string, number[]>;
  criteria: Record<string, number[]>;
  achievements: string[];
  activity: ActivityPoint[];
  preferences: { sidebarCollapsed: boolean; reminders: boolean };
}

export interface AchievementDef {
  id: string;
  name: string;
  detail: string;
  test: (s: { completedDays: number; streak: number; bestStreak: number; deployments: number }) => boolean;
}

const TITLES: [string, string, Difficulty][] = [
  ["Developer Setup & First Commit", "Set up your environment, create your challenge repository and push your first commit.", "Beginner"],
  ["HTML Semantics Landing", "Build a semantic, accessible one-screen landing page with no framework.", "Beginner"],
  ["Flexbox Pricing Layout", "Recreate a three-tier pricing layout using only flexbox.", "Beginner"],
  ["CSS Grid Photo Wall", "Build a responsive masonry-style gallery with CSS grid.", "Beginner"],
  ["Responsive Navbar", "Build a navbar with a working mobile menu and keyboard support.", "Beginner"],
  ["JavaScript Quiz App", "Build a timed multiple-choice quiz with score tracking.", "Beginner"],
  ["DOM To-Do List", "Build a to-do app with filters and localStorage persistence.", "Beginner"],
  ["Fetch & Render an API", "Consume a public REST API and render results with loading and error states.", "Intermediate"],
  ["Weather Dashboard", "Build a weather dashboard with search, units toggle and error handling.", "Intermediate"],
  ["Expense Tracker", "Build an expense tracker with categories, totals and charts.", "Intermediate"],
  ["Component Library Basics", "Build reusable Button, Card and Input components with variants.", "Intermediate"],
  ["Build a Developer Portfolio", "Create a responsive portfolio that showcases your skills, projects, experience and contact information.", "Intermediate"],
  ["Blog with Markdown", "Render markdown posts with routing and reading time.", "Intermediate"],
  ["Auth UI Flow", "Design and build sign in, sign up and forgot password screens with validation.", "Intermediate"],
  ["Dashboard Layout", "Build an app shell with sidebar, header and responsive content grid.", "Intermediate"],
  ["Data Table with Sorting", "Build a table with sorting, pagination and empty states.", "Intermediate"],
  ["Form Validation Deep Dive", "Build a multi-step form with schema validation and inline errors.", "Intermediate"],
  ["Dark Mode System", "Implement a token-based theming system with persistence.", "Intermediate"],
  ["Kanban Board", "Build a drag-free kanban board with keyboard-accessible move actions.", "Intermediate"],
  ["Notes App with Search", "Build a notes app with fuzzy search and tags.", "Intermediate"],
  ["Chat UI", "Build a realtime-feeling chat interface with optimistic messages.", "Intermediate"],
  ["E-commerce Product Page", "Build a product page with gallery, variants and cart state.", "Intermediate"],
  ["Cart & Checkout Flow", "Build a multi-step cart to checkout flow with order summary.", "Intermediate"],
  ["Charts & Analytics View", "Visualise a dataset with three chart types and a date filter.", "Intermediate"],
  ["File Upload Interface", "Build a drag-and-drop upload UI with progress and validation.", "Intermediate"],
  ["Calendar & Scheduler", "Build a month calendar with event creation.", "Advanced"],
  ["Search with Debounce", "Build an instant search experience with debounce and caching.", "Intermediate"],
  ["Infinite Scroll Feed", "Build a paginated feed with infinite scroll and skeletons.", "Intermediate"],
  ["Accessibility Audit", "Audit and fix a previous build for keyboard and screen reader support.", "Intermediate"],
  ["Performance Pass", "Measure and improve load performance of an earlier project.", "Advanced"],
  ["REST API with Node", "Build a small REST API with routes, validation and error handling.", "Advanced"],
  ["Database Modelling", "Model a relational schema and write the core queries.", "Advanced"],
  ["Full-stack CRUD App", "Wire a frontend to your own API with full CRUD.", "Advanced"],
  ["Authentication Backend", "Implement session handling, hashing and protected routes.", "Advanced"],
  ["Role-based Access", "Add roles and permission checks across your API.", "Advanced"],
  ["File Storage Integration", "Add file uploads with storage and signed URLs.", "Advanced"],
  ["Email Notifications", "Send transactional email from a server route.", "Advanced"],
  ["Payments Sandbox", "Integrate a sandbox payment flow end to end.", "Advanced"],
  ["Background Jobs", "Add a queued job with retry handling.", "Advanced"],
  ["Caching Layer", "Add caching and measure the improvement.", "Advanced"],
  ["Testing Fundamentals", "Write unit tests for your core business logic.", "Intermediate"],
  ["Integration Tests", "Test a full user flow end to end.", "Advanced"],
  ["CI Pipeline", "Set up automated checks on every push.", "Advanced"],
  ["Deployment Pipeline", "Ship your app with environment configuration.", "Advanced"],
  ["Monitoring & Logging", "Add structured logging and error reporting.", "Advanced"],
  ["Design System Refresh", "Rebuild your portfolio with a consistent token system.", "Intermediate"],
  ["Animation & Micro-interactions", "Add restrained motion to a previous build.", "Intermediate"],
  ["Mobile-first Rebuild", "Rebuild a desktop-first project mobile-first.", "Intermediate"],
  ["Offline-first PWA", "Make an app installable and usable offline.", "Advanced"],
  ["AI Feature Integration", "Add one useful AI-powered feature to an existing project.", "Advanced"],
  ["Open Source Contribution", "Find an issue, submit a pull request and document it.", "Advanced"],
  ["Technical Blog Post", "Write and publish a deep technical article on something you built.", "Intermediate"],
  ["Code Review Practice", "Review a peer's repository and leave actionable feedback.", "Intermediate"],
  ["Refactor Week", "Refactor your worst codebase and document the decisions.", "Advanced"],
  ["Capstone Planning", "Scope your capstone project with milestones and a schema.", "Advanced"],
  ["Capstone Build I", "Build the core data layer of your capstone.", "Advanced"],
  ["Capstone Build II", "Build the primary user flows of your capstone.", "Advanced"],
  ["Capstone Polish", "Polish, test and document your capstone.", "Advanced"],
  ["Capstone Launch", "Deploy your capstone and publish the launch post.", "Advanced"],
  ["Portfolio Finale", "Ship the final portfolio with all 60 builds documented.", "Advanced"],
];

const GENERIC_REQ = [
  "Read the brief and plan your approach",
  "Scaffold the project structure",
  "Implement the core functionality",
  "Handle loading, empty and error states",
  "Make the layout responsive",
  "Write the README",
  "Deploy and verify the live URL",
];

const GENERIC_CRITERIA = [
  "Works on mobile",
  "No broken links",
  "GitHub repository created",
  "README included",
  "Live URL works",
  "LinkedIn post published",
];

const DAY_12: Partial<Challenge> = {
  goals: [
    "Who you are",
    "What you build",
    "Your technical skills",
    "Your projects",
    "How people can contact you",
  ],
  requirements: [
    "Hero section",
    "About section",
    "Skills section",
    "Projects section",
    "Contact section",
    "Responsive mobile layout",
    "Working navigation",
  ],
  hint: [
    "Hero — name, one-line positioning and a primary call to action",
    "About — two short paragraphs, no life story",
    "Skills — group by category instead of using rating bars",
    "Projects — three strong builds with problem, stack and live link",
    "Contact — email plus GitHub and LinkedIn, and nothing else",
  ],
};

export const CHALLENGES: Challenge[] = TITLES.map(([title, description, difficulty], i) => {
  const day = i + 1;
  const estimate = difficulty === "Beginner" ? "45–60 min" : difficulty === "Intermediate" ? "60–90 min" : "90–120 min";
  const base: Challenge = {
    day,
    title,
    description,
    difficulty,
    estimate,
    goals: [
      "What you are building today",
      "Why it matters for your portfolio",
      "The core technical skill being practised",
    ],
    requirements: GENERIC_REQ,
    criteria: GENERIC_CRITERIA,
    hint: [
      "Sketch the screens before writing code",
      "Build the smallest working version first",
      "Then improve the states and the styling",
      "Commit in small, readable steps",
      "Write the LinkedIn post while it is still fresh",
    ],
  };
  return day === 12 ? { ...base, ...DAY_12 } : base;
});

export function getChallenge(day: number): Challenge | undefined {
  return CHALLENGES.find((c) => c.day === day);
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first-commit", name: "First Commit", detail: "Complete day 1", test: (s) => s.completedDays >= 1 },
  { id: "streak-7", name: "7 Day Streak", detail: "Seven days in a row", test: (s) => s.bestStreak >= 7 },
  { id: "builds-10", name: "10 Builds", detail: "Ten projects shipped", test: (s) => s.completedDays >= 10 },
  { id: "first-deploy", name: "First Deployment", detail: "Ship a live URL", test: (s) => s.deployments >= 1 },
  { id: "streak-14", name: "14 Day Streak", detail: "Two weeks unbroken", test: (s) => s.bestStreak >= 14 },
  { id: "streak-30", name: "Halfway There", detail: "Thirty builds done", test: (s) => s.completedDays >= 30 },
  { id: "builds-45", name: "45 Builds", detail: "Forty-five projects shipped", test: (s) => s.completedDays >= 45 },
  { id: "complete", name: "Challenge Complete", detail: "All sixty days", test: (s) => s.completedDays >= 60 },
];

export const TRACKS = ["Web Development", "Frontend Engineering", "Backend Engineering", "Full-stack", "Data & AI"];

export function createInitialState(): AbState {
  const submissions: Record<string, Submission> = {};
  for (let d = 1; d <= 11; d++) {
    const slug = (getChallenge(d)?.title ?? "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    submissions[String(d)] = {
      repo: `https://github.com/dhanush/${slug}`,
      commit: `https://github.com/dhanush/${slug}/commit/a1b2c3d`,
      linkedin: `https://linkedin.com/posts/dhanush-abtalks-day-${d}`,
      deployment: d % 3 === 0 ? "" : `https://${slug}.vercel.app`,
      submittedAt: new Date(Date.now() - (12 - d) * 86400000).toISOString(),
    };
  }
  return {
    student: {
      name: "Dhanush",
      track: "Web Development",
      email: "dhanush@abtalks.dev",
      avatarUrl: "",
    },
    currentDay: 12,
    totalDays: 60,
    progress: {
      completedDays: 11,
      streak: 11,
      bestStreak: 18,
      missedDays: [],
      rank: 128,
      totalBuilders: 2430,
      rankDelta: 17,
      projectsBuilt: 11,
      projectsThisWeek: 3,
    },
    submissions,
    requirements: {},
    criteria: {},
    achievements: ["first-commit", "streak-7", "builds-10", "first-deploy"],
    activity: [
      { label: "Mon", builds: 1, proofs: 3 },
      { label: "Tue", builds: 1, proofs: 4 },
      { label: "Wed", builds: 1, proofs: 2 },
      { label: "Thu", builds: 1, proofs: 4 },
      { label: "Fri", builds: 1, proofs: 3 },
      { label: "Sat", builds: 1, proofs: 4 },
      { label: "Sun", builds: 0, proofs: 0 },
    ],
    preferences: { sidebarCollapsed: false, reminders: true },
  };
}
