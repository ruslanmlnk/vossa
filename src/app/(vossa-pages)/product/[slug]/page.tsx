import { notFound } from "next/navigation";

import { getProductDetail } from "@/components/ui/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { ProductMainSection } from "./_components/ProductMainSection";
import { ProductStorySection } from "./_components/ProductStorySection";
import { ProductRelatedSection } from "./_components/ProductRelatedSection";
import { ProductCommercialProposalSection } from "./_components/ProductCommercialProposalSection";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getProductDetail(slug);

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: detail.categoryLabel, href: `/catalog?category=${detail.category}` },
          { label: detail.name },
        ]}
      />

      <ProductMainSection product={detail} />

      <ProductStorySection product={detail} />

      <ProductRelatedSection relatedSlugs={detail.relatedSlugs} />

      <ProductCommercialProposalSection />
    </>
  );
}
