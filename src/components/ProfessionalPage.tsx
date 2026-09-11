import Link from "next/link";
import BlueprintOverlay from "@/src/components/BlueprintOverlay";
import { contentBlockRecords } from "@/src/content/professional/contentBlocks";
import { expertiseRecords } from "@/src/content/professional/expertise";
import { projectRecords } from "@/src/content/professional/projects";
import { resumeRecords } from "@/src/content/professional/resume";

type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: readonly string[];
  accent: "violet" | "cyan" | "amber";
  cover_image_url?: string;
  external_url?: string;
  sort_order?: number;
};

const projects: Project[] = projectRecords.map((project) => ({ ...project, accent: "violet" }));
const resumeMeta = contentBlockRecords.find((record) => record.section === "resume_meta");
const contactMeta = contentBlockRecords.find((record) => record.section === "contact_info")?.metadata ?? {
  email: "",
  linkedin: "",
  location: "",
  availability: "",
};
const resume = {
  title: resumeMeta?.title ?? "Résumé",
  summary: resumeRecords.find((entry) => entry.type === "summary")?.body ?? "",
  executiveSummary: resumeMeta?.body ?? "",
  experience: resumeRecords.filter((entry) => entry.type === "experience").sort((a, b) => a.sort_order - b.sort_order),
  corePractice: resumeRecords.filter((entry) => entry.type === "skill_group" && entry.group === "core_practice").sort((a, b) => a.sort_order - b.sort_order),
  tools: resumeRecords.filter((entry) => entry.type === "skill_group" && entry.group === "tools").sort((a, b) => a.sort_order - b.sort_order),
  initiatives: resumeRecords.filter((entry) => entry.type === "initiative").sort((a, b) => a.sort_order - b.sort_order),
  education: resumeRecords.filter((entry) => entry.type === "education" || entry.type === "credential").sort((a, b) => a.sort_order - b.sort_order),
};

const accentText = { violet: "text-violet-300", cyan: "text-cyan-300", amber: "text-amber-300" };

export function WorkPage({ projects: pageProjects = projects }: { projects?: Project[] }) {
  const orderedProjects = [...pageProjects].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

  return (
    <PageFrame number="03" title="Work" eyebrow="">
      <div className="space-y-16 lg:space-y-24">
        {orderedProjects.map((project, index) => (
          <ProjectPreview key={project.id} project={project} index={index} />
        ))}
      </div>
    </PageFrame>
  );
}

export function ProjectPage({ project }: { project?: Project }) {
  if (!project) return <PageFrame number="02" title="Project not found" eyebrow=""><Link href="/work" className="label-mono text-white hover:text-cyan-300">← Back to work</Link></PageFrame>;
  return <PageFrame number="02" title={project.title} eyebrow={project.category.toUpperCase()}><Link href="/work" className="label-mono text-white/55 hover:text-cyan-300">← Back to work</Link><div className="mt-16 max-w-3xl"><p className={`mb-6 font-serif text-2xl lg:text-3xl ${accentText[project.accent]}`}>{project.summary}</p><div className="flex flex-wrap gap-4">{project.tags.map((tag) => <span key={tag} className="label-mono text-white/45">{tag}</span>)}</div></div></PageFrame>;
}

export function ExpertisePage() {
  return <PageFrame number="04" title="Expertise" eyebrow=""><div className="grid gap-16 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16">{expertiseRecords.slice().sort((a, b) => a.sort_order - b.sort_order).map((item, index) => <section key={item.slug} id={item.slug} className="scroll-mt-20"><span className={`label-mono ${accentText[item.accent as keyof typeof accentText]}`}>{String(index + 1).padStart(2, "0")}</span><h2 className="mt-4 font-serif text-3xl lg:text-4xl">{item.title}</h2><div className="body-sans mt-5 max-w-xl min-w-0 text-white/60 [overflow-wrap:anywhere]" dangerouslySetInnerHTML={{ __html: item.framing }} /></section>)}</div></PageFrame>;
}

export function AboutPage() {
  return <PageFrame number="02" title="About" eyebrow=""><div className="grid gap-12 lg:grid-cols-12 lg:gap-16"><div className="h-48 w-48 border border-white/10 bg-white/[0.03] lg:col-span-4" /><p className="body-sans max-w-xl text-white/60 lg:col-span-6 lg:col-start-7">I work at the intersection of operations, technology, and people to make complex systems clearer and more useful.</p></div></PageFrame>;
}

export function ContactPage() {
  return <PageFrame number="06" title="Contact" eyebrow=""><p className="body-sans mb-12 max-w-xl text-white/60">Have a complex system, a growing team, or an important question that needs a thoughtful way forward? I would like to hear about it.</p><div className="space-y-4 border-t border-white/10 pt-6"><ContactRow label="Email" value={contactMeta.email} /><ContactRow label="LinkedIn" value={contactMeta.linkedin.replace("https://", "")} /><ContactRow label="Location" value={contactMeta.location} /><ContactRow label="Status" value={contactMeta.availability} accent /></div></PageFrame>;
}

export function ResumePage() {
  return <PageFrame number="05" title="Résumé" eyebrow=""><section className="mb-20 max-w-3xl"><h2 className="heading-serif text-3xl leading-tight text-white/95 lg:text-5xl">{resume.title}</h2></section><section className="mb-16"><span className="label-mono mb-3 block text-white/45">EXECUTIVE SUMMARY</span><p className="body-sans max-w-2xl text-lg text-white/80">{resume.executiveSummary}</p></section><section className="mb-16"><SectionLabel number="01" label="PROFILE" /><div className="body-sans max-w-2xl min-w-0 text-white/60 [overflow-wrap:anywhere]" dangerouslySetInnerHTML={{ __html: resume.summary }} /></section><section className="mb-16"><SectionLabel number="02" label="CORE PRACTICE" /><div className="grid gap-x-12 lg:grid-cols-2">{resume.corePractice.map((group) => <div key={group.id} className="border-t border-white/10 py-8"><span className="label-mono text-white/45">{group.organization}</span><h3 className="mt-3 mb-4 font-serif text-2xl">{group.title}</h3><ul className="space-y-2">{group.items.map((item) => <li key={item} className="body-sans text-white/60">· {item}</li>)}</ul></div>)}</div></section><section className="mb-16"><SectionLabel number="03" label="EXPERIENCE" /><div className="relative border-l border-white/10 pl-6 lg:pl-10">{resume.experience.map((entry) => <article key={entry.id} className="relative mb-10 last:mb-0"><span className="absolute -left-[1.65rem] top-1.5 h-2 w-2 rounded-full bg-white/40 lg:-left-[2.65rem]" /><span className="label-mono text-white/45">{entry.start_date} — {entry.end_date || "PRESENT"}</span><h3 className="mt-3 font-serif text-2xl lg:text-3xl">{entry.title}</h3><p className="label-mono mt-2 text-cyan-300">{entry.organization} · {entry.location}</p><p className="body-sans mt-4 max-w-2xl text-white/60" style={{ overflowWrap: "anywhere" }}>{entry.body}</p><ul className="body-sans mt-3 max-w-2xl space-y-1 text-sm text-white/55">{entry.bullets.map((bullet) => <li key={bullet}>— {bullet}</li>)}</ul><div className="mt-4 flex flex-wrap gap-3">{entry.tags.map((tag) => <span key={tag} className="label-mono text-white/40">{tag}</span>)}</div></article>)}</div></section><section className="mb-16"><SectionLabel number="04" label="SELECTED INITIATIVES" /><div className="max-w-3xl border-t border-white/10">{resume.initiatives.map((initiative) => <Link key={initiative.id} href={initiative.project_slug ? `/work/${initiative.project_slug}` : "#"} className="block border-b border-white/10 py-5 font-serif text-xl text-white hover:text-cyan-300">{initiative.title} →</Link>)}</div></section><section className="mb-16"><SectionLabel number="05" label="TOOLS & SYSTEMS" /><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{resume.tools.map((tool) => <div key={tool.id}><span className="label-mono text-white/45">{tool.title}</span><ul className="mt-2 space-y-1">{tool.items.map((item) => <li key={item} className="body-sans text-white/70">{item}</li>)}</ul></div>)}</div></section><section><SectionLabel number="06" label="EDUCATION & CREDENTIALS" /><div className="border-t border-white/10">{resume.education.map((item) => <div key={item.id} className="border-b border-white/10 py-5"><div className="font-serif text-xl text-white">{item.title}</div><div className="label-mono mt-1 text-white/45">{item.organization}</div></div>)}</div></section></PageFrame>;
}

function PageFrame({ number, title, eyebrow, children }: { number: string; title: string; eyebrow: string; children: React.ReactNode }) {
  return <section className="relative py-20 lg:py-32"><BlueprintOverlay /><div className="relative z-10 mb-16 flex items-baseline justify-between"><div><span className="label-mono mb-2 block text-white/55">{number}</span><h1 className="heading-serif text-5xl lg:text-7xl">{title}</h1></div><span className="label-mono hidden text-white/55 lg:block">{eyebrow}</span></div><div className="relative z-10 lg:pt-56">{children}</div></section>;
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="mb-8 flex items-baseline gap-4"><span className="label-mono text-white/55">{number}</span><span className="label-mono text-white/40">{label}</span></div>;
}

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return <article><Link href={`/work/${project.slug}`} className="group block"><div className={`mb-8 flex aspect-[4/3] items-end justify-end border border-white/10 bg-white/[0.03] p-6 ${index === 1 ? "[clip-path:polygon(0_0,82%_0,100%_18%,100%_100%,0_100%)]" : "[clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]"}`}><span className={`label-mono ${accentText[project.accent]}`}>{project.category}</span></div><span className="label-mono text-white/35">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-3 font-serif text-3xl transition-colors group-hover:text-cyan-300">{project.title}</h2><p className="body-sans mt-3 max-w-md text-white/55">{project.summary}</p></Link></article>;
}

function ContactRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div className="flex gap-4"><span className="label-mono w-20 shrink-0 text-white/55">{label}</span><span className={`body-sans text-sm ${accent ? "text-cyan-300" : "text-white/55"}`}>{value}</span></div>;
}