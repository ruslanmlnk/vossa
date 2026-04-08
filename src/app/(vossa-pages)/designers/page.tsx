import { sharedProjects, workflowSteps } from "@/components/ui/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsShowcase } from "@/components/ui/ProjectsShowcase";
import { WorkflowSection } from "@/components/ui/WorkflowSection";
import DesignerPartnershipHero from "@/components/vossa/DesignerPartnershipHero";

import { DesignerBenefitsSection } from "./_components/DesignerBenefitsSection";
import { DesignerFormatSection } from "./_components/DesignerFormatSection";
import { DesignerCtaSection } from "./_components/DesignerCtaSection";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Співпраця з дизайнерами" },
        ]}
      />

      <DesignerPartnershipHero />

      <DesignerBenefitsSection />

      <WorkflowSection title="Як ми працюємо" steps={workflowSteps} />

      <DesignerFormatSection />

      <DesignerCtaSection />

      <ProjectsShowcase title="Проєкти дизайнерів" items={sharedProjects.slice(0, 3)} />
    </>
  );
}