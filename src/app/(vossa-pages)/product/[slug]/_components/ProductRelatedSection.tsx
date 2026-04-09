import Image from "next/image";
import Link from "next/link";

import { ScaledArtboard } from "@/components/ui/ScaledArtboard";
import { getCatalogProductBySlug, getProductHref } from "@/components/ui/data";

const paletteDots = ["#A79D91", "#CBC7C2", "#337664", "#42403F", "#385F8A", "#745229"];

function CarouselArrowButton({
  direction,
  muted = false,
}: {
  direction: "prev" | "next";
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      className={`grid h-[45px] w-[45px] place-items-center rounded-full bg-white ${
        muted ? "opacity-40" : ""
      }`}
      aria-label={direction === "prev" ? "Previous related products" : "Next related products"}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "prev" ? (
          <path d="M15 7.5H0M0 7.5L7.5 0M0 7.5L7.5 15" stroke="#38312A" />
        ) : (
          <path d="M0 7.5H15M15 7.5L7.5 0M15 7.5L7.5 15" stroke="#38312A" />
        )}
      </svg>
    </button>
  );
}

function RelatedCard({
  product,
}: {
  product: NonNullable<ReturnType<typeof getCatalogProductBySlug>>;
}) {
  return (
    <Link
      href={getProductHref(product)}
      className="flex h-[599px] w-[516px] flex-col gap-5 rounded-[20px] bg-white p-5 transition hover:-translate-y-1"
    >
      <div className="relative h-[478px] overflow-hidden rounded-[20px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="478px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 px-5">
        <div className="flex items-end justify-between gap-5">
          <div className="flex-1">
            <h3 className="text-[25px] uppercase leading-none text-[#38312a]">
              {product.name}
            </h3>

            <div className="mt-[15px] flex items-center gap-[10px]">
              {paletteDots.map((color) => (
                <span
                  key={`${product.slug}-${color}`}
                  className="h-[15px] w-[15px] rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="grid h-[15px] w-[15px] place-items-center text-[12px] text-[#38312a]/60">
                +
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-[5px]">
            <div className="flex items-end gap-[7px]">
              <span className="text-[16px] text-[#38312a]/40">від</span>
              <span className="text-[20px] uppercase text-[#38312a]">{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductRelatedDesktop({
  relatedSlugs,
}: {
  relatedSlugs: string[];
}) {
  const relatedProducts = relatedSlugs
    .map((slug) => getCatalogProductBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 3);

  return (
    <div className="relative h-[773px] w-[1608px]">
      <h2 className="absolute left-[493px] top-0 w-[623px] text-center text-[40px] uppercase text-[#38312a]">
        Інші конфігурації цієї моделі
      </h2>

      <div className="absolute left-0 top-[89px] flex gap-[30px]">
        {relatedProducts.map((related) => (
          <RelatedCard key={related.slug} product={related} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between">
        <CarouselArrowButton direction="prev" muted />

        <div className="flex h-[45px] items-center gap-[30px] rounded-full bg-white px-[30px]">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`h-[5px] w-[5px] rounded-full ${
                index === 0 ? "bg-[#38312a]" : "bg-[#38312a]/20"
              }`}
            />
          ))}
        </div>

        <CarouselArrowButton direction="next" />
      </div>
    </div>
  );
}

export function ProductRelatedSection({ relatedSlugs }: { relatedSlugs: string[] }) {
  const relatedProducts = relatedSlugs
    .map((slug) => getCatalogProductBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="px-4 pb-10 sm:px-8 xl:px-10 xl:pb-[70px] min-[1728px]:px-[60px]">
      <div className="mx-auto max-w-[1608px] xl:hidden">
        <div className="space-y-8">
          <h2 className="text-center text-[32px] uppercase leading-[0.95] text-[#38312a] sm:text-[40px]">
            Інші конфігурації цієї моделі
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.slice(0, 3).map((related) => (
              <article key={related.slug} className="rounded-[20px] bg-white p-5">
                <Link href={getProductHref(related)} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-[20px]">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="mt-5 space-y-4 px-2">
                  <h3 className="text-[24px] uppercase leading-none text-[#38312a]">
                    {related.name}
                  </h3>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-[10px]">
                      {paletteDots.map((color) => (
                        <span
                          key={`${related.slug}-${color}`}
                          className="h-[15px] w-[15px] rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <span className="text-[12px] text-[#38312a]/60">+</span>
                    </div>

                    <div className="flex items-end gap-[7px]">
                      <span className="text-[14px] text-[#38312a]/40">від</span>
                      <span className="text-[18px] uppercase text-[#38312a]">
                        {related.price}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1608px] xl:block min-[1728px]:hidden">
        <ScaledArtboard baseWidth={1608} baseHeight={773}>
          <ProductRelatedDesktop relatedSlugs={relatedSlugs} />
        </ScaledArtboard>
      </div>

      <div className="mx-auto hidden max-w-[1608px] min-[1728px]:block">
        <ProductRelatedDesktop relatedSlugs={relatedSlugs} />
      </div>
    </section>
  );
}
