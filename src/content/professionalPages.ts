import type { Project } from "@/src/content/professionalHome";

export const professionalPageContent = {
  about: {
    title: "About",
    body: "I work at the intersection of operations, technology, and people to make complex systems clearer and more useful. My practice is grounded in careful listening, useful structure, and the belief that the best systems leave more room for people to do meaningful work.",
  },
  contact: {
    title: "Let&apos;s build something extraordinary.",
    intro: "Have a complex system, a growing team, or an important question that needs a thoughtful way forward? I would like to hear about it.",
  },
  expertise: [
    {
      slug: "operations-systems",
      title: "Operations & Systems",
      accent: "violet",
      description: "Designing the structures, rhythms, and decision paths that help teams move with clarity.",
      capabilities: ["Operating models", "Process architecture", "Cross-functional systems"],
    },
    {
      slug: "risk-compliance",
      title: "Risk & Compliance",
      accent: "cyan",
      description: "Making risk visible and actionable without adding unnecessary friction to the work.",
      capabilities: ["Risk frameworks", "Controls and governance", "Change readiness"],
    },
    {
      slug: "data-technology",
      title: "Data & Technology",
      accent: "amber",
      description: "Turning scattered information into useful signals, tools, and decisions.",
      capabilities: ["Data systems", "Technology strategy", "Operational intelligence"],
    },
  ],
  resume: {
    title: "Résumé",
    summary: "An operations and systems practice shaped by the spaces between people, process, and technology.",
    experience: [
      { title: "Operations & Systems Lead", organization: "Independent practice", dates: "2022 — Present", body: "Building operating systems that help ambitious teams turn complexity into forward motion." },
      { title: "Program Strategy", organization: "Selected collaborations", dates: "2018 — 2022", body: "Connecting planning, delivery, and measurement across evolving organizations." },
    ],
    tools: ["Research", "Process design", "Data systems", "Team enablement"],
  },
};

export const projectDetails: Record<string, Project & { body: string; outcomes: string[] }> = {
  "operating-model": {
    id: "project-01",
    slug: "operating-model",
    title: "Operating Model",
    category: "systems",
    summary: "A clearer operating rhythm for a growing team navigating change.",
    tags: ["Strategy", "Operations"],
    accent: "violet",
    body: "A practical operating model that brought priorities, ownership, and decision-making into one visible system. The work balanced immediate clarity with enough flexibility for the team to keep learning.",
    outcomes: ["Clearer ownership across the team", "A shared planning rhythm", "A system designed to evolve"],
  },
  "service-architecture": {
    id: "project-02",
    slug: "service-architecture",
    title: "Service Architecture",
    category: "experience",
    summary: "Connecting customer insight, process design, and measurable delivery.",
    tags: ["Research", "Design"],
    accent: "cyan",
    body: "A service architecture shaped from customer signals and team knowledge. The result connected the visible experience to the operational work required to deliver it consistently.",
    outcomes: ["A shared service language", "More useful customer signals", "A clearer path from insight to action"],
  },
  "field-intelligence": {
    id: "project-03",
    slug: "field-intelligence",
    title: "Field Intelligence",
    category: "technology",
    summary: "Turning scattered signals into decisions a team can act on.",
    tags: ["Data", "Enablement"],
    accent: "amber",
    body: "A lightweight intelligence practice for gathering, organizing, and sharing the signals that matter. The system made information easier to find and decisions easier to explain.",
    outcomes: ["A more legible information flow", "Faster decision preparation", "Shared context across teams"],
  },
};