"use client";

import { useState } from "react";
import Image from "next/image";

import { type ProductDetail } from "@/components/ui/data";

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

export function ProductStorySection({ product }: { product: ProductDetail }) {
  const [openAccordionIds, setOpenAccordionIds] = useState<string[]>([
    "specs",
    "drawing",
  ]);

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordionIds((current) =>
      current.includes(accordionId)
        ? current.filter((item) => item !== accordionId)
        : [...current, accordionId]
    );
  };

  return (
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
  );
}
