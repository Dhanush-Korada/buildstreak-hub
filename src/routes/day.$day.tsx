import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/day/$day")({
  component: () => null,
});
