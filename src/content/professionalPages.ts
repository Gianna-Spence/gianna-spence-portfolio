import type { Project } from "@/src/content/professionalHome";

export const professionalPageContent = {
  about: {
    title: "About",
    body: "I work at the intersection of operations, technology, and people to make complex systems clearer and more useful. My practice is grounded in careful listening, useful structure, and the belief that the best systems leave more room for people to do meaningful work.",
  },
  contact: {
    intro: "Have a complex system, a growing team, or an important question that needs a thoughtful way forward? I would like to hear about it.",
    email: "hello@giannaspence.com",
    linkedin: "https://linkedin.com/in/giannaspence",
    location: "New York, NY",
    availability: "Open to new opportunities",
  },
  expertise: [
    {
      slug: "operations-systems",
      title: "Operations & Systems",
      accent: "violet",
      glyph: "O",
      description: "Designing the structures, rhythms, and decision paths that help teams move with clarity.",
      capabilities: [
        { title: "Operating models", description: "Structures that clarify how teams make decisions and deliver work." },
        { title: "Process architecture", description: "Practical systems that make complex work easier to navigate." },
        { title: "Cross-functional systems", description: "Shared rhythms that connect people, priorities, and outcomes." },
      ],
    },
    {
      slug: "risk-compliance",
      title: "Risk & Compliance",
      accent: "cyan",
      glyph: "R",
      description: "Making risk visible and actionable without adding unnecessary friction to the work.",
      capabilities: [
        { title: "Risk frameworks", description: "Clear ways to see, prioritize, and act on operational risk." },
        { title: "Controls and governance", description: "Governance that supports good judgment without unnecessary friction." },
        { title: "Change readiness", description: "Preparing teams and systems for the work of meaningful change." },
      ],
    },
    {
      slug: "data-technology",
      title: "Data & Technology",
      accent: "amber",
      glyph: "D",
      description: "Turning scattered information into useful signals, tools, and decisions.",
      capabilities: [
        { title: "Data systems", description: "Information structures that make signals easier to trust and use." },
        { title: "Technology strategy", description: "Technology choices grounded in the work they need to support." },
        { title: "Operational intelligence", description: "Turning scattered information into decisions a team can act on." },
      ],
    },
  ],
  resume: {
    title: "Résumé",
    summary: "An operations and systems practice shaped by the spaces between people, process, and technology.",
    executiveSummary: "I build the connective tissue between strategy and execution: operating models, systems, and practices that help teams make better decisions and deliver meaningful work.",
    experience: [
      { title: "Operations & Systems Lead", organization: "Independent practice", dates: "2022 — Present", body: "Building operating systems that help ambitious teams turn complexity into forward motion.", location: "New York, NY", bullets: ["Designed clearer operating rhythms across growing teams", "Connected strategy, process, and measurable delivery"], tags: ["Operations", "Systems"] },
      { title: "Program Strategy", organization: "Selected collaborations", dates: "2018 — 2022", body: "Connecting planning, delivery, and measurement across evolving organizations.", location: "New York, NY", bullets: ["Translated complex priorities into executable programs", "Created shared language across disciplines"], tags: ["Strategy", "Enablement"] },
    ],
    corePractice: [
      { title: "Systems Thinking", organization: "Core practice", items: ["Operating models", "Process architecture", "Decision systems"] },
      { title: "People & Practice", organization: "Core practice", items: ["Team enablement", "Change readiness", "Shared language"] },
    ],
    tools: ["Research", "Process design", "Data systems", "Team enablement"],
    initiatives: [
      { title: "Operating Model", projectSlug: "operating-model" },
      { title: "Service Architecture", projectSlug: "service-architecture" },
    ],
    education: ["Systems thinking", "Organizational design", "Operational practice"],
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
    sortOrder: 1,
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
    sortOrder: 2,
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
    sortOrder: 3,
    body: "A lightweight intelligence practice for gathering, organizing, and sharing the signals that matter. The system made information easier to find and decisions easier to explain.",
    outcomes: ["A more legible information flow", "Faster decision preparation", "Shared context across teams"],
  },
};