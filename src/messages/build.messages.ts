export const howItsMadeMessages = {
  eyebrow: "Built with intention",
  title: "How this website is made",
  description:
    "A modern stack with a clean UI system, repeatable builds, and automated delivery.",
  hero: {
    title: "From commit -> checks -> deployment",
    description:
      "A small but real pipeline: lint/build steps in CI, and a repeatable deploy flow backed by GitHub.",
    steps: [
      {
        title: "Build",
        text: "Deterministic builds with a consistent environment.",
        tone: "blue",
      },
      {
        title: "Validate",
        text: "CI checks keep the main branch stable.",
        tone: "red",
      },
      {
        title: "Ship",
        text: "Deployment triggered from GitHub for fast iterations.",
        tone: "neutral",
      },
    ],
  },
  pillars: [
    {
      title: "UI foundation",
      description:
        "Built with shadcn/ui components and Tailwind utilities for consistency, accessibility, and speed.",
      highlight: "shadcn/ui + Tailwind",
      logoKey: "shadcn",
      tint: "blue",
    },
    {
      title: "Icons & micro-details",
      description:
        "Lucide icons keep the visuals crisp and cohesive, especially for small interactive cues.",
      highlight: "lucide-react",
      logoKey: "lucide",
      tint: "red",
    },
    {
      title: "Containerized dev",
      description:
        "Docker makes local setup predictable so the same environment runs everywhere.",
      highlight: "Docker",
      logoKey: "docker",
      tint: "blue",
    },
    {
      title: "CI/CD pipeline",
      description:
        "GitHub Actions runs checks on every change and ships updates automatically.",
      highlight: "GitHub Actions + CI/CD",
      logoKey: "gitactions",
      tint: "red",
    },
    {
      title: "Version control",
      description:
        "Everything is tracked in Git with a clean history for easy rollbacks and collaboration.",
      highlight: "Git + GitHub",
      logoKey: "github",
      tint: "blue",
    },
    {
      title: "Deployment",
      description:
        "Deployed straight from GitHub so updates are repeatable and hands-off once merged while backend is handled by Render for simplicity.",
      highlight: "GitHub Deploy/Render",
      logoKey: "github",
      tint: "red",
    },
  ],
} as const;
