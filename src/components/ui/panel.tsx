import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("surface-card p-4 sm:p-5", className)}>
      {children}
    </section>
  );
}

export function PanelHead({
  label,
  title,
  subtitle,
  action,
  className,
}: {
  label?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-4 sm:flex sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="min-w-0">
        {label && <p className="label-caps">{label}</p>}
        {title && <h3 className="mt-1 truncate text-base font-bold sm:text-[17px]">{title}</h3>}
        {subtitle && <p className="mt-0.5 text-[13px] text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </header>
  );
}

const TONES = {
  primary: "bg-primary-soft text-accent-foreground",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  muted: "bg-muted text-muted-foreground",
  solid: "bg-primary text-primary-foreground",
} as const;

export function Pill({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.07em]",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Bar({ value, className }: { value: number; className?: string }) {
  const pct = Math.min(Math.max(value, 0), 100);
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-primary-softer", className)}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Ring({ value, label }: { value: number; label?: string }) {
  const pct = Math.min(Math.max(value, 0), 100);
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative grid size-11 shrink-0 place-items-center" aria-hidden="true">
      <svg viewBox="0 0 44 44" className="size-11 -rotate-90">
        <circle cx="22" cy="22" r={r} fill="none" strokeWidth="4" className="stroke-primary-softer" />
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="stroke-primary transition-[stroke-dashoffset] duration-500"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
        />
      </svg>
      {label && <span className="absolute text-[10px] font-extrabold">{label}</span>}
    </span>
  );
}
