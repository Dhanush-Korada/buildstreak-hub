import { Panel, PanelHead } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";

export function Standing() {
  const { state } = useABTalks();
  const { progress } = state;

  return (
    <Panel>
      <PanelHead label="Your standing" title={`#${progress.rank}`} subtitle={`among ${progress.totalBuilders.toLocaleString("en-IN")} builders`} />
      <p className="inline-flex rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.07em] text-success">
        +{Math.abs(progress.rankDelta)} this week
      </p>
      <p className="mt-3 border-t border-border pt-3 text-[13px] leading-relaxed text-muted-foreground">
        Consistency matters more than rank.
      </p>
    </Panel>
  );
}
