"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  type CatalogCategory,
  catalogFeaturedCards,
  catalogProducts,
  upholsterySection,
} from "./data";
import { Breadcrumbs } from "./shared/Breadcrumbs";
import {
  ButtonLink,
  cn,
  primaryButtonClass,
  secondaryButtonClass,
  softTagClass,
} from "./shared/Buttons";
import { ProductCard } from "./shared/ProductCard";
import { SelectionSection } from "./shared/SelectionSection";

type SortMode = "default" | "price-asc" | "price-desc";
type CatalogPageProps = {
  initialCategory?: CatalogCategory | "all";
};

function parsePrice(value: string) {
  return Number(value.replace(/[^\d]/g, ""));
}

export function CatalogPage({ initialCategory = "all" }: CatalogPageProps) {
  const [category, setCategory] =
    useState<CatalogCategory | "all">(initialCategory);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const visibleProducts = catalogProducts
    .filter((product) => category === "all" || product.category === category)
    .slice()
    .sort((left, right) => {
      if (sortMode === "price-asc") {
        return parsePrice(left.price) - parsePrice(right.price);
      }

      if (sortMode === "price-desc") {
        return parsePrice(right.price) - parsePrice(left.price);
      }

      return 0;
    });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог" },
        ]}
      />

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-[54px]">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="xl:pt-4">
              <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/48">
                Каталог
              </p>
              <h1 className="mt-4 max-w-[520px] text-[42px] uppercase leading-[0.92] sm:text-[56px] xl:text-[72px]">
                Знайдіть свою ідеальну модель
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] leading-[1.52] text-[#38312a]/72">
                Обирайте ліжка та дивани VOSSA — стриманий дизайн, впевнені
                пропорції й якість, яка відчувається щодня. Використовуйте
                фільтри, щоб швидко знайти свою модель.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  className={cn(
                    category === "beds" ? primaryButtonClass : secondaryButtonClass
                  )}
                  type="button"
                  onClick={() => setCategory("beds")}
                >
                  Ліжка
                </button>
                <button
                  className={cn(
                    category === "sofas" ? primaryButtonClass : secondaryButtonClass
                  )}
                  type="button"
                  onClick={() => setCategory("sofas")}
                >
                  Дивани
                </button>
                <button
                  className={cn(
                    category === "all" ? primaryButtonClass : secondaryButtonClass
                  )}
                  type="button"
                  onClick={() => setCategory("all")}
                >
                  Усе
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {catalogFeaturedCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_12px_44px_rgba(56,49,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(56,49,42,0.10)]"
                >
                  <div className="relative aspect-[1.05/1] overflow-hidden rounded-[22px] bg-[#efe8e0]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1280px) 540px, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5 px-2 pb-2 pt-4">
                    <h2 className="text-[22px] uppercase leading-none text-[#38312a]">
                      {card.title}
                    </h2>
                    <p className="text-[15px] uppercase tracking-[0.12em] text-[#38312a]/72">
                      {card.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-[#38312a]/10 bg-white/60 px-5 py-4 backdrop-blur-sm md:flex-row md:items-center md:justify-between xl:mt-12 xl:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={softTagClass}>Фільтрація</span>
              <span className="text-[14px] uppercase tracking-[0.14em] text-[#38312a]/55">
                67 результатів
              </span>
            </div>

            <label className="flex items-center gap-3 text-[13px] uppercase tracking-[0.14em] text-[#38312a]/55">
              <span>Сортування</span>
              <select
                className="rounded-full border border-[#38312a]/12 bg-white px-4 py-2 text-[13px] uppercase tracking-[0.12em] text-[#38312a]"
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
              >
                <option value="default">За замовчуванням</option>
                <option value="price-asc">Ціна: зростання</option>
                <option value="price-desc">Ціна: спадання</option>
              </select>
            </label>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}

            <article className="relative overflow-hidden rounded-[28px] bg-[#181512] p-6 text-white shadow-[0_14px_44px_rgba(20,16,14,0.22)] xl:min-h-[620px]">
              <Image
                src="/vossa-pages/909263de88b5ba59f08ccdf9e66950cd4486ab0e.jpg"
                alt="Підібрати опції"
                fill
                sizes="(min-width: 1280px) 516px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />
              <div className="relative flex h-full min-h-[340px] flex-col justify-end rounded-[24px] border border-white/18 bg-black/5 p-6 xl:min-h-[540px]">
                <div>
                  <h3 className="max-w-[350px] text-[28px] uppercase leading-[0.98]">
                    Потрібні інші тканини чи конфігурація?
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[16px] leading-[1.5] text-white/82">
                    Підберемо виконання під стиль і задачу інтер’єру.
                  </p>
                </div>
                <ButtonLink href="/contact" className="mt-8 w-fit">
                  Запитати про опції
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-[80px]">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-8 rounded-[36px] bg-white px-5 py-8 shadow-[0_12px_44px_rgba(56,49,42,0.05)] sm:px-8 xl:grid-cols-[0.82fr_1.18fr] xl:px-[60px] xl:py-[70px]">
            <div className="xl:pt-10">
              <p className="text-[12px] uppercase tracking-[0.18em] text-[#38312a]/35">
                {upholsterySection.eyebrowLeft}
              </p>
              <h2 className="mt-5 max-w-[360px] text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[64px]">
                {upholsterySection.title}
              </h2>
              <p className="mt-6 max-w-[420px] text-[18px] leading-[1.5] text-[#38312a]/72">
                {upholsterySection.lead}
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] bg-[#f0ece7] p-5">
                <div className="relative aspect-[1/1.2] overflow-hidden rounded-[24px] bg-white">
                  <Image
                    src={upholsterySection.image}
                    alt={upholsterySection.label}
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <p className="pt-4 text-center text-[15px] uppercase tracking-[0.14em] text-[#38312a]">
                  {upholsterySection.label}
                </p>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#38312a]/35">
                  {upholsterySection.eyebrowRight}
                </p>
                <p className="mt-5 text-[18px] leading-[1.52] text-[#38312a]/72">
                  {upholsterySection.body}
                </p>
                <ButtonLink href="/contact" className="mt-8">
                  {upholsterySection.action}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SelectionSection />
    </>
  );
}
