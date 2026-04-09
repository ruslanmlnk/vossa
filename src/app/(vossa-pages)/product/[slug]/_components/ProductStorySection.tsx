"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/components/ui/Buttons";
import { ScaledArtboard } from "@/components/ui/ScaledArtboard";
import { type ProductDetail } from "@/components/ui/data";

function DrawingPanel() {
  return (
    <div className="px-[30px] pb-[30px]">
      <div className="rounded-[20px] bg-[#f3eee8] p-5">
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
      <p className="mt-4 text-[15px] leading-[1.5] text-[#38312a]/70">
        У технічному пакеті надаємо креслення з габаритами та 3D-модель для інтеграції в
        проєкт. Це допомагає швидко погодити конфігурацію з клієнтом і підрядниками.
      </p>
    </div>
  );
}

function AccordionIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="20"
      viewBox="0 0 20 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M0 1H10H20" stroke="#38312A" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M0 10H10M20 10H10M10 10V0M10 10V20" stroke="#38312A" strokeWidth="1.5" />
    </svg>
  );
}

function SpecsContent({ product }: { product: ProductDetail }) {
  return (
    <div className="px-[30px] pb-[30px]">
      {product.specs.map((spec, index) => (
        <div
          key={spec.label}
          className={cn(
            "flex items-center justify-between gap-6 py-[15px]",
            index !== product.specs.length - 1 && "border-b border-[#38312a]/20"
          )}
        >
          <p className="text-[16px] font-light text-[#38312a]">{spec.label}</p>
          <p className="text-right text-[16px] font-medium text-[#38312a]">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}

function TextContent({ items }: { items: string[] }) {
  return (
    <div className="px-[30px] pb-[30px]">
      <div className="space-y-3">
        {items.map((item) => (
          <p key={item} className="text-[16px] leading-[1.5] text-[#38312a]/75">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function StoryAccordion({
  product,
  openAccordionIds,
  toggleAccordion,
}: {
  product: ProductDetail;
  openAccordionIds: string[];
  toggleAccordion: (accordionId: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      {product.accordions.map((accordion) => {
        const isOpen = openAccordionIds.includes(accordion.id);

        return (
          <div key={accordion.id} className="overflow-hidden rounded-[20px] bg-white/50">
            <button
              type="button"
              onClick={() => toggleAccordion(accordion.id)}
              className="flex w-full items-center justify-between gap-4 px-[30px] py-[30px] text-left"
            >
              <span className="text-[20px] font-medium text-[#38312a]">{accordion.title}</span>
              <AccordionIcon open={isOpen} />
            </button>

            {isOpen ? (
              <>
                {accordion.kind === "specs" ? <SpecsContent product={product} /> : null}
                {accordion.kind === "drawing" ? <DrawingPanel /> : null}
                {accordion.kind === "materials" ? <TextContent items={product.materials} /> : null}
                {accordion.kind === "warranty" ? <TextContent items={product.warranty} /> : null}
                {accordion.kind === "shipping" ? <TextContent items={product.shipping} /> : null}
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ProductStoryDesktop({
  product,
  openAccordionIds,
  toggleAccordion,
}: {
  product: ProductDetail;
  openAccordionIds: string[];
  toggleAccordion: (accordionId: string) => void;
}) {
  const leadParagraph = product.storyParagraphs[0] ?? "";
  const bodyParagraphs = product.storyParagraphs.slice(1);

  return (
    <div className="grid min-h-[1175px] w-[1608px] grid-cols-[789px_789px] items-start gap-[30px]">
      <div className="pt-3">
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[40px] uppercase leading-none text-[#38312a]">
            {product.storyTitle}
          </h2>

          <p className="text-[18px] leading-normal text-[#38312a]">{leadParagraph}</p>

          <div className="relative h-[572px] overflow-hidden rounded-[20px]">
            <Image
              src={product.storyImage}
              alt={product.storyTitle}
              fill
              sizes="789px"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-[18px] leading-normal text-[#38312a]">
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <StoryAccordion
          product={product}
          openAccordionIds={openAccordionIds}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
}

export function ProductStorySection({ product }: { product: ProductDetail }) {
  const [openAccordionIds, setOpenAccordionIds] = useState<string[]>(["specs"]);

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordionIds((current) =>
      current.includes(accordionId)
        ? current.filter((item) => item !== accordionId)
        : [...current, accordionId]
    );
  };

  const leadParagraph = product.storyParagraphs[0] ?? "";
  const bodyParagraphs = product.storyParagraphs.slice(1);

  return (
    <section className="px-4 pb-10 sm:px-8 xl:px-10 xl:pb-[70px] min-[1728px]:px-[60px]">
      <div className="mx-auto max-w-[1608px] xl:hidden">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-[32px] uppercase leading-[0.95] text-[#38312a] sm:text-[40px]">
              {product.storyTitle}
            </h2>

            <p className="text-[18px] leading-[1.5] text-[#38312a]">{leadParagraph}</p>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src={product.storyImage}
                alt={product.storyTitle}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-[18px] leading-[1.5] text-[#38312a]">
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <StoryAccordion
            product={product}
            openAccordionIds={openAccordionIds}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1608px] xl:block min-[1728px]:hidden">
        <ScaledArtboard baseWidth={1608} baseHeight={1175}>
          <ProductStoryDesktop
            product={product}
            openAccordionIds={openAccordionIds}
            toggleAccordion={toggleAccordion}
          />
        </ScaledArtboard>
      </div>

      <div className="mx-auto hidden max-w-[1608px] min-[1728px]:block">
        <ProductStoryDesktop
          product={product}
          openAccordionIds={openAccordionIds}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </section>
  );
}
