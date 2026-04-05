"use client";

import { useState } from "react";
import Image from "next/image";

import { projectsPageCards } from "./data";
import { Breadcrumbs } from "./shared/Breadcrumbs";
import { ButtonLink, cn, softTagClass } from "./shared/Buttons";
import { PartnerCtaSection } from "./shared/PartnerCtaSection";
import { ProjectCard } from "./shared/ProjectCard";

type ProjectFilter = "all" | "visualization" | "realized";

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visibleProjects = projectsPageCards.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Проєкти дизайнерів" },
        ]}
      />

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
            <div>
              <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
                Проєкти дизайнерів
              </p>
              <h1 className="mt-4 text-[54px] uppercase leading-[0.88] text-[#38312a] sm:text-[78px] xl:text-[108px]">
                Проєкти дизайнерів
              </h1>
            </div>

            <div className="space-y-6 xl:pt-4">
              <p className="max-w-[620px] text-[18px] leading-[1.55] text-[#38312a]/74">
                Надихайтеся реалізованими інтер’єрами з меблями VOSSA —
                проєктами архітекторів і дизайнерів, які обирають впевнені
                акцентні предмети. Переглядайте, як меблі живуть у просторі, та
                знаходьте точні позиції, використані в кожному проєкті.
              </p>
              <ButtonLink href="/designers">Подати заявку на співпрацю</ButtonLink>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[36px]">
            <div className="relative aspect-[1728/520] min-h-[280px]">
              <Image
                src="/vossa-pages/e3843e422cc0b5abba066c678dfea0021cd305f7.jpg"
                alt="Проєкти дизайнерів"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={cn(
                softTagClass,
                filter === "all" && "border-[#b99b6e] bg-[#f0e9df] text-[#38312a]"
              )}
            >
              Всі проєкти
            </button>
            <button
              type="button"
              onClick={() => setFilter("visualization")}
              className={cn(
                softTagClass,
                filter === "visualization" &&
                  "border-[#b99b6e] bg-[#f0e9df] text-[#38312a]"
              )}
            >
              3D візуалізація
            </button>
            <button
              type="button"
              onClick={() => setFilter("realized")}
              className={cn(
                softTagClass,
                filter === "realized" &&
                  "border-[#b99b6e] bg-[#f0e9df] text-[#38312a]"
              )}
            >
              Реалізований об&apos;єкт
            </button>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={`${project.image}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>

      <PartnerCtaSection />
    </>
  );
}
