export type ExpertiseItem = {
  id: string;
  title: string;
  glyph: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  accent: "violet" | "cyan" | "amber";
  sortOrder?: number;
};

export const professionalHomeContent = {
  hero: {
    title: "Evidence, not adjectives.",
    body: "I build systems that scale, teams that thrive, and experiences that matter.",
  },
  about: {
    body: "I work at the intersection of operations, technology, and people to make complex systems clearer and more useful.",
  },
  contact: {
    email: "hello@giannaspence.com",
    linkedin: "linkedin.com/in/giannaspence",
    location: "New York, NY",
    availability: "Open to new opportunities",
  },
  expertise: [
    { id: "operations", title: "Operations & Systems", glyph: "O" },
    { id: "risk", title: "Risk & Compliance", glyph: "R" },
    { id: "data", title: "Data & Technology", glyph: "D" },
  ] satisfies ExpertiseItem[],
  projects: [
    {
      id: "project-01",
      slug: "operating-model",
      title: "Operating Model",
      category: "systems",
      summary: "A clearer operating rhythm for a growing team navigating change.",
      tags: ["Strategy", "Operations"],
      accent: "violet",
      sortOrder: 1,
    },
    {
      id: "project-02",
      slug: "service-architecture",
      title: "Service Architecture",
      category: "experience",
      summary: "Connecting customer insight, process design, and measurable delivery.",
      tags: ["Research", "Design"],
      accent: "cyan",
      sortOrder: 2,
    },
    {
      id: "project-03",
      slug: "field-intelligence",
      title: "Field Intelligence",
      category: "technology",
      summary: "Turning scattered signals into decisions a team can act on.",
      tags: ["Data", "Enablement"],
      accent: "amber",
      sortOrder: 3,
    },
  ] satisfies Project[],
};