import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PartnerCtaSection } from "@/components/ui/PartnerCtaSection";

import { ProjectsListSection } from "./_components/ProjectsListSection";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Проєкти дизайнерів" },
        ]}
      />

      <ProjectsListSection />

      <PartnerCtaSection />
    </>
  );
}
