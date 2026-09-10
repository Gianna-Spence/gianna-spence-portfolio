import ProfessionalLayout from "@/src/components/ProfessionalLayout";
import { WorkPage } from "@/src/components/ProfessionalPage";
import { professionalHomeContent } from "@/src/content/professionalHome";

export default function WorkRoute() {
  return (
    <ProfessionalLayout>
      <WorkPage projects={professionalHomeContent.projects} />
    </ProfessionalLayout>
  );
}
