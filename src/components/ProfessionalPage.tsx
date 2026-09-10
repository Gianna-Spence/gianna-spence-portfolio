import Link from "next/link";
import type { Project } from "@/src/content/professionalHome";
import { professionalPageContent } from "@/src/content/professionalPages";

const accentText = { violet: "text-violet-300", cyan: "text-cyan-300", amber: "text-amber-300" };

export function WorkPage({ projects }: { projects: Project[] }) {
  return <PageFrame number="02" title="Work" eyebrow="CASE FILES"><div className="grid gap-16 lg:grid-cols-2">{projects.map((project, index) => <ProjectPreview key={project.id} project={project} index={index} />)}</div></PageFrame>;
}

export function ProjectPage({ project }: { project?: (Project & { body: string; outcomes: string[] }) }) {
  if (!project) return <PageFrame number="02" title="Project not found" eyebrow="CASE FILE"><Link href="/work" className="label-mono text-white hover:text-cyan-300">← Back to work</Link></PageFrame>;
  return <PageFrame number="02" title={project.title} eyebrow={project.category.toUpperCase()}><Link href="/work" className="label-mono text-white/55 hover:text-cyan-300">← Back to work</Link><div className="mt-16 max-w-3xl"><p className={`mb-6 font-serif text-2xl lg:text-3xl ${accentText[project.accent]}`}>{project.summary}</p><p className="body-sans mb-12 text-white/60">{project.body}</p><h2 className="mb-6 font-serif text-3xl">Evidence</h2><div className="mb-12 border-t border-white/10">{project.outcomes.map((outcome) => <div key={outcome} className="border-b border-white/10 py-5 font-sans text-white/70">{outcome}</div>)}</div><div className="flex flex-wrap gap-4">{project.tags.map((tag) => <span key={tag} className="label-mono text-white/45">{tag}</span>)}</div></div></PageFrame>;
}

export function ExpertisePage() {
  return <PageFrame number="03" title="Expertise" eyebrow="PRACTICE"><div className="space-y-16">{professionalPageContent.expertise.map((item, index) => <section key={item.slug} id={item.slug} className="border-t border-white/10 pt-6"><span className={`label-mono ${accentText[item.accent as keyof typeof accentText]}`}>{String(index + 1).padStart(2, "0")}</span><h2 className="mt-4 font-serif text-3xl lg:text-4xl">{item.title}</h2><p className="body-sans mt-5 max-w-xl text-white/60">{item.description}</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{item.capabilities.map((capability) => <span key={capability} className="border border-white/10 p-4 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/55">{capability}</span>)}</div></section>)}</div></PageFrame>;
}

export function AboutPage() {
  return <PageFrame number="04" title={professionalPageContent.about.title} eyebrow="FIELD NOTES"><div className="grid gap-12 lg:grid-cols-12 lg:gap-16"><div className="h-48 w-48 border border-white/10 bg-white/[0.03] lg:col-span-4" /><p className="body-sans max-w-xl text-white/60 lg:col-span-6 lg:col-start-7">{professionalPageContent.about.body}</p></div></PageFrame>;
}

export function ContactPage() {
  return <PageFrame number="06" title={professionalPageContent.contact.title} eyebrow="CONTACT"><p className="body-sans mb-12 max-w-xl text-white/60">{professionalPageContent.contact.intro}</p><div className="space-y-4 border-t border-white/10 pt-6"><ContactRow label="Email" value="hello@giannaspence.com" /><ContactRow label="LinkedIn" value="linkedin.com/in/giannaspence" /><ContactRow label="Location" value="New York, NY" /><ContactRow label="Status" value="Open to new opportunities" accent /></div></PageFrame>;
}

export function ResumePage() {
  const { resume } = professionalPageContent;
  return <PageFrame number="05" title={resume.title} eyebrow="FIELD NOTES"><p className="body-sans mb-16 max-w-xl text-white/60">{resume.summary}</p><section className="mb-16"><h2 className="mb-6 font-serif text-3xl">Experience</h2><div className="border-t border-white/10">{resume.experience.map((entry) => <article key={entry.title} className="grid gap-4 border-b border-white/10 py-6 lg:grid-cols-12"><div className="lg:col-span-3"><span className="label-mono text-white/45">{entry.dates}</span></div><div className="lg:col-span-6"><h3 className="font-serif text-2xl">{entry.title}</h3><p className="label-mono mt-2 text-white/45">{entry.organization}</p><p className="body-sans mt-4 text-white/60">{entry.body}</p></div></article>)}</div></section><section><h2 className="mb-6 font-serif text-3xl">Tools & Systems</h2><div className="flex flex-wrap gap-3">{resume.tools.map((tool) => <span key={tool} className="border border-white/10 px-4 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/55">{tool}</span>)}</div></section></PageFrame>;
}

function PageFrame({ number, title, eyebrow, children }: { number: string; title: string; eyebrow: string; children: React.ReactNode }) {
  return <section className="pt-24 lg:pt-32"><div className="mb-16 flex items-baseline justify-between"><div><span className="label-mono mb-2 block text-white/55">{number}</span><h1 className="heading-serif text-5xl lg:text-7xl">{title}</h1></div><span className="label-mono hidden text-white/55 lg:block">{eyebrow}</span></div>{children}</section>;
}

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return <article><Link href={`/work/${project.slug}`} className="group block"><div className={`mb-8 flex aspect-[4/3] items-end justify-end border border-white/10 bg-white/[0.03] p-6 ${index === 1 ? "[clip-path:polygon(0_0,82%_0,100%_18%,100%_100%,0_100%)]" : "[clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]"}`}><span className={`label-mono ${accentText[project.accent]}`}>{project.category}</span></div><span className="label-mono text-white/35">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-3 font-serif text-3xl transition-colors group-hover:text-cyan-300">{project.title}</h2><p className="body-sans mt-3 max-w-md text-white/55">{project.summary}</p></Link></article>;
}

function ContactRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div className="flex gap-4"><span className="label-mono w-20 shrink-0 text-white/55">{label}</span><span className={`body-sans text-sm ${accent ? "text-cyan-300" : "text-white/55"}`}>{value}</span></div>;
}