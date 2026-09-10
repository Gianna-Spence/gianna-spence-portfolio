import ProfessionalLayout from "@/src/components/ProfessionalLayout";
import { ProjectPage } from "@/src/components/ProfessionalPage";
import { projectDetails } from "@/src/content/professionalPages";

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectRoute({ params }: ProjectRouteProps) {
  const { slug } = await params;

  return (
    <ProfessionalLayout>
      <ProjectPage project={projectDetails[slug]} />
    </ProfessionalLayout>
  );
}
