import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { PaymentInfoSection } from "./_components/PaymentInfoSection";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Доставка та оплата" },
        ]}
      />

      <PaymentInfoSection />
    </>
  );
}