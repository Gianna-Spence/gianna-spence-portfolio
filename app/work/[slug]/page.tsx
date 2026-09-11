import ProfessionalLayout from "@/src/components/ProfessionalLayout";
import { ProjectPage } from "@/src/components/ProfessionalPage";
import { projectRecords } from "@/src/content/professional/projects";
import { notFound } from "next/navigation";

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectRecords.map(({ slug }) => ({ slug }));
}

export default async function ProjectRoute({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const record = projectRecords.find((item) => item.slug === slug);
  const project = record ? { ...record, accent: "violet" as const } : undefined;

  if (!project) notFound();

  return (
    <ProfessionalLayout>
      <ProjectPage project={project} />
    </ProfessionalLayout>
  );
}
