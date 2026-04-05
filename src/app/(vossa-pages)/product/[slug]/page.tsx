import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/vossa-site/ProductDetailPage";
import { getProductDetail } from "@/components/vossa-site/data";

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

  return <ProductDetailPage product={detail} />;
}
