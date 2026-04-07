import { notFound } from "next/navigation";

import { getProductDetail } from "@/components/ui/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CommercialProposalSection } from "@/components/ui/CommercialProposalSection";

import { ProductMainSection } from "./_components/ProductMainSection";
import { ProductStorySection } from "./_components/ProductStorySection";
import { ProductRelatedSection } from "./_components/ProductRelatedSection";

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

      <CommercialProposalSection
        primaryPillImage="/vossa-pages/1f69265f370df3685d8623e68c64393e57905c50.jpg"
        secondaryPillImage="/vossa-pages/f7fcec8acbcc2fa2b99dd0a0bae62f79bd45b870.jpg"
      />
    </>
  );
}
