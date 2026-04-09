import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { ContactCommercialProposalSection } from "./_components/ContactCommercialProposalSection";
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
      <ContactCommercialProposalSection />
    </>
  );
}
