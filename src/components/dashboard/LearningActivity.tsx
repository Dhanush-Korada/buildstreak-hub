import { Bar, Panel, PanelHead, Pill } from "@/components/ui/panel";
import { useABTalks } from "@/hooks/useABTalks";

export function LearningActivity() {
  const { state } = useABTalks();
  const data = state.activity;
  const maxProofs = Math.max(...data.map((d) => d.proofs), 4);
  const totalBuilds = data.reduce((t, d) => t + d.builds, 0);
  const totalProofs = data.reduce((t, d) => t + d.proofs, 0);

  return (
    <Panel>
      <PanelHead
        label="Learning activity"
        title="Builds and submissions"
        subtitle="Your builds and submissions over time"
        action={
          <div className="flex shrink-0 flex-wrap gap-1.5">
            <Pill tone="primary">{totalBuilds} builds</Pill>
            <Pill tone="muted">{totalProofs} proofs</Pill>
          </div>
        }
      />

      <div className="flex h-40 items-end gap-1.5 sm:gap-3">
        {data.map((point) => {
          const proofHeight = Math.round((point.proofs / maxProofs) * 100);
          return (
            <div key={point.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end justify-center gap-1">
                <div
                  className="w-full max-w-[18px] rounded-t-md bg-primary transition-[height] duration-500"
                  style={{ height: `${Math.max(proofHeight, 3)}%` }}
                  title={`${point.proofs} proof submissions`}
                />
                <div
                  className="w-full max-w-[10px] rounded-t-md bg-primary-soft transition-[height] duration-500"
                  style={{ height: `${point.builds > 0 ? 45 : 3}%` }}
                  title={`${point.builds} build`}
                />
              </div>
              <span className="text-[11px] font-bold text-muted-foreground">{point.label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <div className="flex items-center justify-between text-[13px] font-semibold">
          <span className="text-muted-foreground">Weekly consistency</span>
          <span>{Math.round((data.filter((d) => d.builds > 0).length / 7) * 100)}%</span>
        </div>
        <Bar value={Math.round((data.filter((d) => d.builds > 0).length / 7) * 100)} className="mt-2" />
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-primary" /> Proof submissions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-primary-soft" /> Builds
          </span>
        </div>
      </div>
    </Panel>
  );
}
