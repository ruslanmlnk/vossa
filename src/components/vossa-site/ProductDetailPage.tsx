"use client";

import { useState } from "react";
import Image from "next/image";

import {
  getCatalogProductBySlug,
  type ProductDetail,
} from "./data";
import { Breadcrumbs } from "./shared/Breadcrumbs";
import { ButtonLink, cn, primaryButtonClass, secondaryButtonClass } from "./shared/Buttons";
import { CommercialProposalSection } from "./shared/CommercialProposalSection";
import { ProductCard } from "./shared/ProductCard";

type ProductDetailPageProps = {
  product: ProductDetail;
};

function DrawingPanel() {
  return (
    <div className="space-y-4 rounded-[24px] border border-[#38312a]/10 bg-white p-5">
      <div className="overflow-hidden rounded-[20px] bg-[#f3eee8] p-5">
        <svg
          viewBox="0 0 520 240"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="52" y="62" width="418" height="118" rx="22" stroke="#38312A" strokeWidth="2" />
          <rect x="84" y="96" width="120" height="50" rx="14" stroke="#38312A" strokeWidth="2" />
          <rect x="218" y="96" width="84" height="50" rx="14" stroke="#38312A" strokeWidth="2" />
          <rect x="316" y="96" width="120" height="50" rx="14" stroke="#38312A" strokeWidth="2" />
          <path d="M52 196H470" stroke="#38312A" strokeDasharray="8 8" />
          <path d="M52 42H470" stroke="#38312A" strokeDasharray="8 8" />
          <path d="M34 42V196" stroke="#38312A" strokeDasharray="8 8" />
          <path d="M488 42V196" stroke="#38312A" strokeDasharray="8 8" />
          <path d="M52 210L34 210M470 210L488 210" stroke="#38312A" />
          <path d="M34 210L34 222M488 210L488 222" stroke="#38312A" />
          <path d="M34 216H488" stroke="#38312A" />
          <path d="M12 42L12 196" stroke="#38312A" />
          <path d="M12 42L24 42M12 196L24 196" stroke="#38312A" />
          <path d="M18 42V196" stroke="#38312A" />
          <text x="240" y="235" fontSize="16" fill="#38312A">
            3200 мм
          </text>
          <text x="2" y="124" fontSize="16" fill="#38312A" transform="rotate(-90 8 124)">
            2200 мм
          </text>
        </svg>
      </div>
      <p className="text-[15px] leading-[1.5] text-[#38312a]/70">
        У технічному пакеті надаємо креслення з габаритами та 3D-модель для
        інтеграції в проєкт. Це допомагає швидко погодити конфігурацію з
        клієнтом і підрядниками.
      </p>
    </div>
  );
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(product.activeSize);
  const [openAccordionIds, setOpenAccordionIds] = useState<string[]>([
    "specs",
    "drawing",
  ]);

  const relatedProducts = product.relatedSlugs
    .map((slug) => getCatalogProductBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordionIds((current) =>
      current.includes(accordionId)
        ? current.filter((item) => item !== accordionId)
        : [...current, accordionId]
    );
  };

  const activeImage = product.gallery[activeGalleryIndex] ?? product.gallery[0];
  const secondaryImage =
    product.gallery[(activeGalleryIndex + 1) % product.gallery.length] ??
    product.gallery[0];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: product.categoryLabel, href: `/catalog?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-10">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
            <div className="xl:sticky xl:top-[118px]">
              <div className="grid gap-4 xl:grid-cols-[1.45fr_0.95fr]">
                <div className="relative aspect-square overflow-hidden rounded-[30px] bg-white">
                  <Image
                    src={activeImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(min-width: 1280px) 52vw, 100vw"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    className="absolute left-5 top-5 rounded-full border border-[#38312a]/12 bg-white/88 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#38312a] backdrop-blur-sm"
                  >
                    Переглянути в AR
                  </button>
                </div>

                <div className="relative aspect-[0.84/1] overflow-hidden rounded-[30px] bg-white">
                  <Image
                    src={secondaryImage}
                    alt={`${product.name} lifestyle`}
                    fill
                    sizes="(min-width: 1280px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#38312a]/40"
                  onClick={() =>
                    setActiveGalleryIndex((value) =>
                      value === 0 ? product.gallery.length - 1 : value - 1
                    )
                  }
                >
                  ←
                </button>

                <div className="flex items-center gap-3 rounded-full bg-white px-6 py-4">
                  {product.gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveGalleryIndex(index)}
                      className={cn(
                        "h-2.5 w-2.5 rounded-full transition",
                        index === activeGalleryIndex
                          ? "bg-[#38312a]"
                          : "bg-[#38312a]/20"
                      )}
                      aria-label={`Показати зображення ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#38312a]"
                  onClick={() =>
                    setActiveGalleryIndex((value) =>
                      value === product.gallery.length - 1 ? 0 : value + 1
                    )
                  }
                >
                  →
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-5">
                <div>
                  <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/42">
                    {product.collectionLabel}
                  </p>
                  <h1 className="mt-3 text-[42px] uppercase leading-[0.92] text-[#38312a] sm:text-[56px] xl:text-[64px]">
                    {product.name}
                  </h1>
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-[14px] uppercase tracking-[0.14em] text-[#38312a]/42">
                    від
                  </span>
                  <span className="text-[28px] uppercase text-[#38312a]">
                    {product.price}
                  </span>
                </div>

                <p className="max-w-[620px] text-[18px] leading-[1.55] text-[#38312a]/72">
                  {product.summary}
                </p>
              </div>

              <div className="space-y-6 rounded-[28px] border border-[#38312a]/10 bg-white p-6 shadow-[0_12px_44px_rgba(56,49,42,0.05)]">
                <div>
                  <p className="text-[18px] font-medium uppercase tracking-[0.08em] text-[#38312a]">
                    Обрати опції дивану
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.5] text-[#38312a]/62">
                    Не знаєте, що вибрати, або потрібна допомога? Підкажемо
                    конфігурацію, тканину та потрібну комплектацію.
                  </p>
                </div>

                <div>
                  <p className="text-[15px] uppercase tracking-[0.12em] text-[#38312a]/52">
                    Оберіть розмір
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setActiveSize(size)}
                        className={cn(
                          "rounded-full border px-5 py-3 text-[14px] uppercase tracking-[0.12em] transition",
                          activeSize === size
                            ? "border-[#b99b6e] text-[#b99b6e]"
                            : "border-[#38312a]/12 text-[#38312a]/76 hover:border-[#38312a]/24"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="relative h-[86px] w-[86px] overflow-hidden rounded-[22px]">
                    <Image
                      src={product.fabricSwatch}
                      alt={product.fabricName}
                      fill
                      sizes="86px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[13px] uppercase tracking-[0.14em] text-[#38312a]/45">
                      Тканина
                    </p>
                    <p className="text-[17px] uppercase text-[#38312a]">
                      {product.fabricName}
                    </p>
                    <button
                      type="button"
                      className="text-[13px] uppercase tracking-[0.14em] text-[#b99b6e]"
                    >
                      Отримати взірці тканини
                    </button>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#f4efe8] p-5">
                  {product.oldPrice ? (
                    <p className="text-[13px] uppercase tracking-[0.14em] text-[#38312a]/42 line-through">
                      {product.oldPrice}
                    </p>
                  ) : null}
                  <p className="mt-1 text-[24px] uppercase text-[#38312a]">
                    {product.price}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button className={cn(primaryButtonClass, "w-full")} type="button">
                      Замовити в 1 клік
                    </button>
                    <button className={cn(secondaryButtonClass, "w-full")} type="button">
                      Розтермінування
                    </button>
                  </div>
                </div>

                <ButtonLink href="/contact" secondary>
                  Отримати консультацію
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-10 xl:grid-cols-[0.98fr_1.02fr]">
            <div className="xl:sticky xl:top-[118px]">
              <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_12px_44px_rgba(56,49,42,0.05)]">
                <div className="relative aspect-[1.05/0.68]">
                  <Image
                    src={product.storyImage}
                    alt={product.storyTitle}
                    fill
                    sizes="(min-width: 1280px) 52vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[32px] uppercase leading-[0.95] text-[#38312a] sm:text-[42px] xl:text-[52px]">
                {product.storyTitle}
              </h2>

              <div className="mt-6 space-y-4 text-[17px] leading-[1.58] text-[#38312a]/74">
                {product.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                {product.accordions.map((accordion) => {
                  const isOpen = openAccordionIds.includes(accordion.id);

                  return (
                    <div
                      key={accordion.id}
                      className="overflow-hidden rounded-[24px] border border-[#38312a]/10 bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(accordion.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[18px] uppercase tracking-[0.08em] text-[#38312a]"
                      >
                        <span>{accordion.title}</span>
                        <span className="text-[24px] leading-none">{isOpen ? "−" : "+"}</span>
                      </button>

                      {isOpen ? (
                        <div className="border-t border-[#38312a]/10 px-5 py-5">
                          {accordion.kind === "specs" ? (
                            <div className="grid gap-3 sm:grid-cols-2">
                              {product.specs.map((spec) => (
                                <div
                                  key={spec.label}
                                  className="rounded-[18px] bg-[#f6f3ef] px-4 py-4"
                                >
                                  <p className="text-[12px] uppercase tracking-[0.14em] text-[#38312a]/42">
                                    {spec.label}
                                  </p>
                                  <p className="mt-2 text-[15px] leading-[1.45] text-[#38312a]">
                                    {spec.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {accordion.kind === "drawing" ? <DrawingPanel /> : null}

                          {accordion.kind === "materials" ? (
                            <div className="space-y-3">
                              {product.materials.map((item) => (
                                <p
                                  key={item}
                                  className="rounded-[18px] bg-[#f6f3ef] px-4 py-4 text-[15px] leading-[1.5] text-[#38312a]/75"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          ) : null}

                          {accordion.kind === "warranty" ? (
                            <div className="space-y-3">
                              {product.warranty.map((item) => (
                                <p
                                  key={item}
                                  className="rounded-[18px] bg-[#f6f3ef] px-4 py-4 text-[15px] leading-[1.5] text-[#38312a]/75"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          ) : null}

                          {accordion.kind === "shipping" ? (
                            <div className="space-y-3">
                              {product.shipping.map((item) => (
                                <p
                                  key={item}
                                  className="rounded-[18px] bg-[#f6f3ef] px-4 py-4 text-[15px] leading-[1.5] text-[#38312a]/75"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <CommercialProposalSection
        primaryPillImage="/vossa-pages/1f69265f370df3685d8623e68c64393e57905c50.jpg"
        secondaryPillImage="/vossa-pages/f7fcec8acbcc2fa2b99dd0a0bae62f79bd45b870.jpg"
      />
    </>
  );
}
