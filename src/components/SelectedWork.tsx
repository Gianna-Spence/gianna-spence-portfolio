import Link from "next/link";
import type { Project } from "@/src/content/professionalHome";

type SelectedWorkProps = {
  projects: Project[];
};

const accentClasses = {
  violet: "bg-violet-500/20 text-violet-300",
  cyan: "bg-cyan-500/20 text-cyan-300",
  amber: "bg-amber-500/20 text-amber-300",
};

const imageShapes = [
  "aspect-[4/5] [clip-path:polygon(0_0,100%_0,100%_82%,82%_100%,0_100%)]",
  "aspect-[3/2] [clip-path:polygon(0_0,82%_0,100%_18%,100%_100%,0_100%)]",
  "aspect-square",
];

export default function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <div className="grid gap-24 lg:grid-cols-3 lg:gap-12 xl:gap-16">
      {projects.map((project, index) => (
        <article key={project.id} className="flex flex-col">
          <Link href={`/work/${project.slug}`} className="group mb-10 block">
            <div
              className={`flex items-end justify-end overflow-hidden border border-white/10 bg-white/[0.03] p-6 ${imageShapes[index] ?? imageShapes[0]}`}
            >
              <span className={`font-mono text-xs uppercase tracking-[0.18em] ${accentClasses[project.accent]}`}>
                {project.category}
              </span>
            </div>
          </Link>

          <span className={`mb-3 font-serif text-3xl ${accentClasses[project.accent].split(" ")[1]}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mb-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">
            {project.category}
          </span>
          <Link href={`/work/${project.slug}`}>
            <h3 className="mb-3 font-serif text-2xl font-normal leading-none text-white transition-colors hover:text-white/70">
              {project.title}
            </h3>
          </Link>
          <p className="mb-4 line-clamp-2 font-sans text-sm font-light leading-relaxed text-white/55">
            {project.summary}
          </p>
          <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/45">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-cyan-300"
          >
            View project →
          </Link>
        </article>
      ))}
    </div>
  );
}