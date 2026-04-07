import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CommercialProposalSection } from "@/components/ui/CommercialProposalSection";

import { ContactFormSection } from "./_components/ContactFormSection";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Контакти" },
        ]}
      />

      <ContactFormSection />

      <CommercialProposalSection
        primaryPillImage="/vossa-pages/a6cdcb0da3f1496f7f9ee7155caff690d2bfda37.jpg"
        secondaryPillImage="/vossa-pages/b40c53d33a3a35109cacadc5026304b594f03981.jpg"
      />
    </>
  );
}
