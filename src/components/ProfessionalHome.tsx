import Link from "next/link";
import SelectedWork from "@/src/components/SelectedWork";
import ProfessionalLayout from "@/src/components/ProfessionalLayout";
import { contentBlockRecords } from "@/src/content/professional/contentBlocks";
import { expertiseRecords } from "@/src/content/professional/expertise";
import { homepagePlacementRecords } from "@/src/content/professional/homepagePlacements";
import { projectRecords } from "@/src/content/professional/projects";

const projects = homepagePlacementRecords
  .slice()
  .sort((a, b) => a.sort_order - b.sort_order)
  .map((placement) => {
    const project = projectRecords.find((record) => record.id === placement.project_id);
    return project
      ? {
          id: project.id,
          slug: project.slug,
          title: project.title,
          category: project.category,
          summary: project.summary,
          tags: project.tags,
          accent: placement.accent,
        }
      : null;
  })
  .filter((project): project is NonNullable<typeof project> => project !== null);

const contactBlock = contentBlockRecords.find((record) => record.section === "contact_info");
const contact = contactBlock?.metadata ?? { email: "", linkedin: "", location: "", availability: "" };
const expertise = expertiseRecords.slice().sort((a, b) => a.sort_order - b.sort_order);

export default function ProfessionalHome() {
  const hero = {
    title: "Evidence, not adjectives.",
    body: "I build systems that scale, teams that thrive, and experiences that matter.",
  };
  const about = {
    body: "I work at the intersection of operations, technology, and people to make complex systems clearer and more useful.",
  };

  return (
    <ProfessionalLayout>
          <section className="flex min-h-[80vh] max-w-3xl flex-col justify-center">
            <span className="mb-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">01</span>
        <span className="mb-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">
          G.S / Field Notes
        </span>
        <h1 className="font-serif text-6xl font-normal leading-none lg:text-8xl xl:text-9xl">Gianna</h1>
        <h1 className="mb-8 font-serif text-6xl font-normal leading-none lg:text-8xl xl:text-9xl">Spence</h1>
        <p className="mb-10 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">
          Operations · Systems · People · Impact
        </p>
        <p className="mb-6 font-serif text-2xl font-normal text-white/90 lg:text-3xl">{hero.title}</p>
        <p className="mb-10 max-w-md font-sans text-base font-light leading-relaxed text-white/55">{hero.body}</p>
        <Link
          href="/work"
          className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-cyan-300"
        >
          Explore my work →
        </Link>
          </section>

          <section className="mt-32 lg:mt-48">
        <div className="mb-16 flex items-baseline justify-between">
          <div>
            <span className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">02</span>
            <h2 className="font-serif text-4xl font-normal leading-none lg:text-5xl">Selected Work</h2>
          </div>
          <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55 lg:block">Case Files</span>
        </div>
        <SelectedWork projects={projects} />
          </section>

          <section className="mt-32 lg:mt-48">
        <div className="mb-16 flex items-baseline justify-between">
          <div>
            <span className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">03</span>
            <h2 className="font-serif text-4xl font-normal leading-none lg:text-5xl">Expertise</h2>
          </div>
          <Link href="/expertise" className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white lg:block">
            View all expertise →
          </Link>
        </div>
        <div>
          {expertise.map((item, index) => (
            <div key={item.id} className="flex items-center gap-6 border-t border-white/10 py-5 last:border-b">
              <span className="w-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/35">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex h-7 w-7 items-center justify-center border border-white/20 font-mono text-xs text-white/60">{item.glyph_key.slice(0, 1).toUpperCase()}</span>
              <span className="font-serif text-xl font-normal text-white/90 lg:text-2xl">{item.title}</span>
            </div>
          ))}
        </div>
          </section>

          <section className="mt-32 lg:mt-48">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">04</span>
            <h2 className="mb-8 font-serif text-4xl font-normal leading-none lg:text-5xl">About</h2>
            <div className="mb-6 h-24 w-24 border border-white/10 bg-white/[0.03]" />
            <p className="mb-6 font-sans text-base font-light leading-relaxed text-white/55">{about.body}</p>
            <Link href="/about" className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-cyan-300">More about me →</Link>
          </div>

        </div>
          </section>

          <section className="mt-32 lg:mt-48">
        <div className="max-w-3xl">
          <span className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">05</span>
          <h2 className="mb-10 font-serif text-4xl font-normal leading-none lg:text-6xl">Let&apos;s build something<br /><em className="not-italic text-cyan-300">extraordinary.</em></h2>
          <Link href="/contact" className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-cyan-300">Get in touch →</Link>
          <div className="mt-12 space-y-3">
            <ContactRow label="Email" value={contact.email} />
            <ContactRow label="LinkedIn" value={contact.linkedin} />
            <ContactRow label="Location" value={contact.location} />
            <ContactRow label="Status" value={contact.availability} accent />
          </div>
        </div>
          </section>

          <footer className="mt-32 flex justify-between border-t border-white/10 pt-8 lg:mt-48">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/30">G.S / Field Notes — 2026</span>
        <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/30 sm:block">Evidence, not adjectives.</span>
          </footer>
    </ProfessionalLayout>
  );
}

function ContactRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-20 shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">{label}</span>
      <span className={`font-sans text-sm font-light ${accent ? "text-cyan-300" : "text-white/55"}`}>{value}</span>
    </div>
  );
}