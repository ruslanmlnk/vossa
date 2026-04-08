import { sharedProjects, workflowSteps } from "@/components/ui/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsShowcase } from "@/components/ui/ProjectsShowcase";
import { SelectionSection } from "@/components/ui/SelectionSection";
import { WorkflowSection } from "@/components/ui/WorkflowSection";

import { AboutHeroSection } from "./_components/AboutHeroSection";
import { AboutStorySection } from "./_components/AboutStorySection";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Про нас" },
        ]}
      />

      <AboutHeroSection />
      
      <WorkflowSection title="Як ми працюємо" steps={workflowSteps} />

      <AboutStorySection />

      <SelectionSection />
      <ProjectsShowcase title="Проєкти дизайнерів" items={sharedProjects.slice(0, 3)} />
    </>
  );
}