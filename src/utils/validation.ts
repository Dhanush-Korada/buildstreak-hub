export type ProofField = "repo" | "commit" | "linkedin" | "deployment";

export const PROOF_FIELDS: {
  key: ProofField;
  label: string;
  placeholder: string;
  required: boolean;
}[] = [
  {
    key: "repo",
    label: "GitHub Repository",
    placeholder: "https://github.com/username/project",
    required: true,
  },
  {
    key: "commit",
    label: "GitHub Commit",
    placeholder: "https://github.com/username/project/commit/...",
    required: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn Post",
    placeholder: "https://linkedin.com/posts/...",
    required: true,
  },
  {
    key: "deployment",
    label: "Live Deployment",
    placeholder: "https://your-project.vercel.app",
    required: false,
  },
];

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Returns an error message, or null when the value is acceptable. */
export function validateProof(field: ProofField, rawValue: string): string | null {
  const value = (rawValue ?? "").trim();
  const required = PROOF_FIELDS.find((f) => f.key === field)?.required ?? false;

  if (!value) return required ? "This link is required." : null;
  if (!isHttpUrl(value)) return "Enter a full URL starting with https://";

  switch (field) {
    case "repo":
      return value.includes("github.com") ? null : "The repository link must point to github.com";
    case "commit":
      if (!value.includes("github.com")) return "The commit link must point to github.com";
      return value.includes("/commit/") ? null : "The commit link must include /commit/";
    case "linkedin":
      return value.includes("linkedin.com") ? null : "The post link must point to linkedin.com";
    case "deployment":
      return null;
  }
}

export function isProofValid(field: ProofField, value: string): boolean {
  return Boolean((value ?? "").trim()) && validateProof(field, value) === null;
}
