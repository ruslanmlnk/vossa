import { CatalogPage } from "@/components/vossa-site/CatalogPage";
import type { CatalogCategory } from "@/components/vossa-site/data";

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

  return <CatalogPage initialCategory={category} />;
}
