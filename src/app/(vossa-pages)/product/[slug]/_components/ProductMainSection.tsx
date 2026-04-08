"use client";

import { useState } from "react";
import Image from "next/image";

import { type ProductDetail } from "@/components/ui/data";
import { ButtonLink, cn, primaryButtonClass, secondaryButtonClass } from "@/components/ui/Buttons";

export function ProductMainSection({ product }: { product: ProductDetail }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(product.activeSize);

  const activeImage = product.gallery[activeGalleryIndex] ?? product.gallery[0];
  const secondaryImage =
    product.gallery[(activeGalleryIndex + 1) % product.gallery.length] ??
    product.gallery[0];

  return (
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
  );
}