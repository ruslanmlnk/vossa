import { notFound } from "next/navigation";

import { getCatalogProductBySlug, getProductDetail } from "@/components/ui/data";
import ProductDetailPage from "@/app/(vossa-pages)/product/[slug]/page";

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

  return <ProductDetailPage params={Promise.resolve({ slug })} />;
}
