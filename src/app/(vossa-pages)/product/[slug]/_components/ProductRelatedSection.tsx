import { getCatalogProductBySlug } from "@/components/ui/data";
import { ButtonLink } from "@/components/ui/Buttons";
import { ProductCard } from "@/components/ui/ProductCard";

export function ProductRelatedSection({ relatedSlugs }: { relatedSlugs: string[] }) {
  const relatedProducts = relatedSlugs
    .map((slug) => getCatalogProductBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-14">
      <div className="mx-auto max-w-[1728px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] text-[#38312a]/42">
              Інші конфігурації цієї моделі
            </p>
            <h2 className="mt-3 text-[34px] uppercase leading-[0.94] text-[#38312a] sm:text-[44px] xl:text-[56px]">
              Підібрані варіанти з тієї ж колекції
            </h2>
          </div>

          <ButtonLink href="/catalog" secondary>
            Перейти в каталог
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {relatedProducts.map((related) => (
            <ProductCard key={related.slug} product={related} />
          ))}
        </div>
      </div>
    </section>
  );
}