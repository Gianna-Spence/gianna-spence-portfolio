import ProfessionalLayout from "@/src/components/ProfessionalLayout";
import { WorkPage } from "@/src/components/ProfessionalPage";
import { projectRecords } from "@/src/content/professional/projects";

const projects = projectRecords.map((project) => ({
  ...project,
  tags: project.tags,
  accent: "violet" as const,
}));

export default function WorkRoute() {
  return (
    <ProfessionalLayout>
      <WorkPage projects={projects} />
    </ProfessionalLayout>
  );
}
