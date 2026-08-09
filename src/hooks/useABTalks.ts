import { useContext } from "react";
import { ABTalksContext, type AbContextValue } from "@/context/ABTalksContext";

export function useABTalks(): AbContextValue {
  const ctx = useContext(ABTalksContext);
  if (!ctx) throw new Error("useABTalks must be used inside ABTalksProvider");
  return ctx;
}
