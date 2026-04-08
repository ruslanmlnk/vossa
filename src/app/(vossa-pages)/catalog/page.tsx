import { type CatalogCategory } from "@/components/ui/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SelectionSection } from "@/components/ui/SelectionSection";

import { CatalogMainSection } from "./_components/CatalogMainSection";
import { CatalogUpholsterySection } from "./_components/CatalogUpholsterySection";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category =
    params.category === "beds" || params.category === "sofas"
      ? (params.category as CatalogCategory)
      : "all";

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог" },
        ]}
      />

      <CatalogMainSection initialCategory={category} />

      <CatalogUpholsterySection />

      <SelectionSection />
    </>
  );
}