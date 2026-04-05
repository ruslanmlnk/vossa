import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/vossa-site/ProductDetailPage";
import { getCatalogProductBySlug, getProductDetail } from "@/components/vossa-site/data";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getCatalogProductBySlug(slug);

  if (!product || product.category !== category) {
    notFound();
  }

  const detail = getProductDetail(slug);

  if (!detail) {
    notFound();
  }

  return <ProductDetailPage product={detail} />;
}
