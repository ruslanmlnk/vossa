"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { projectsPageCards } from "@/components/ui/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

type ProjectFilter = "all" | "visualization" | "realized";

export function ProjectsListSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visibleProjects = projectsPageCards.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <section className="px-[15px] sm:px-[30px] xl:px-[60px] pt-[40px] xl:pt-[100px] pb-10 xl:pb-[140px] relative">
      <div className="mx-auto max-w-[1608px]">

        {/* Desktop Hero Layout */}
        <div className="hidden xl:block relative h-[1017px] w-full">
          <h2 className="absolute left-[269px] top-0 w-[699px] text-[150px] font-normal uppercase leading-none text-[#38312A] tracking-[-0.02em]">
            Проєкти
          </h2>
          <h2 className="absolute left-[698px] top-[185px] w-[910px] text-[150px] font-normal uppercase leading-none text-[#38312A] tracking-[-0.02em]">
            дизайнерів
          </h2>

          <div className="absolute left-0 top-[223px] flex w-[534px] flex-col items-start gap-1 text-[18px] font-normal leading-snug text-[#38312A]">
            <p className="w-full text-right uppercase">Надихайтеся реалізованими інтер’єрами з меблями</p>
            <p className="w-full uppercase">
              VOSSA — проєктами архітекторів і дизайнерів, які обирають впевнені акцентні предмети. Переглядайте, як меблі “живуть” у просторі, та знаходьте точні позиції, використані в кожному проєкті.
            </p>
          </div>

          <Link href="/designers"
            className="absolute left-[1330px] top-[70px] inline-flex h-[45px] w-[278px] justify-center items-center rounded-full bg-[#B99B6E] px-[28px] py-[14px] text-[14px] font-normal uppercase text-white transition hover:bg-[#a68a5f]"
          >
            Подати заявку на співпрацю
          </Link>

          {/* Large Image container matching Figma (Left 0 relative to max-w container, top 410 relative to inside start which is slightly shifted in design (design top was 608 minus top padding 198 = 410)) */}
          {/* Note: Figma has image top at 608px. In our container where "Проєкти" is at top 0, the image top is 410px. */}
          <div className="absolute left-[-60px] w-[calc(100%+120px)] top-[508px] h-[509px] overflow-hidden rounded-[30px] bg-[#f6f3ef]">
            <Image
              src="/vossa-pages/f93f719bead5af6c345415e8295771313a891a75.png"
              alt="Проєкти дизайнерів"
              fill
              sizes="(min-width: 1280px) 1728px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 61%" }}
            />
          </div>
        </div>

        {/* Mobile/Tablet Hero Layout fallback */}
        <div className="xl:hidden flex flex-col gap-6">
          <div>
            <h2 className="text-[54px] font-normal uppercase leading-[0.88] text-[#38312A] sm:text-[78px] md:text-[96px]">
              Проєкти
            </h2>
            <h2 className="text-[54px] font-normal uppercase leading-[0.88] text-[#38312A] sm:text-[78px] md:text-[96px]">
              дизайнерів
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] font-normal uppercase leading-[1.4] text-[#38312A] sm:text-[16px]">
            Надихайтеся реалізованими інтер’єрами з меблями VOSSA — проєктами архітекторів і дизайнерів, які обирають впевнені акцентні предмети. Переглядайте, як меблі “живуть” у просторі, та знаходьте точні позиції, використані в кожному проєкті.
          </p>

          <Link href="/designers"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#B99B6E] px-[24px] py-[14px] text-[12px] font-normal uppercase text-white sm:text-[14px]"
          >
            Подати заявку на співпрацю
          </Link>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#f6f3ef]">
            <Image
              src="/vossa-pages/e3843e422cc0b5abba066c678dfea0021cd305f7.jpg"
              alt="Проєкти дизайнерів"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Filters and List */}
        <div className="xl:pt-[140px]">
          <div className="mt-8 xl:mt-0 flex flex-wrap gap-[10px]">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`inline-flex px-[20px] py-[12px] items-center justify-center rounded-[100px] border ${filter === "all"
                  ? "border-[#38312A] bg-white text-[#38312A] opacity-100"
                  : "border-[#38312A]/10 bg-transparent text-[#38312A] opacity-40 hover:opacity-100"
                } text-[14px] xl:text-[18px] font-normal transition`}
            >
              Всі проекти
            </button>
            <button
              type="button"
              onClick={() => setFilter("visualization")}
              className={`inline-flex px-[20px] py-[12px] items-center justify-center rounded-[100px] border ${filter === "visualization"
                  ? "border-[#38312A] bg-white text-[#38312A] opacity-100"
                  : "border-[#38312A]/10 bg-transparent text-[#38312A] opacity-40 hover:opacity-100"
                } text-[14px] xl:text-[18px] font-normal transition`}
            >
              3D візуалізація
            </button>
            <button
              type="button"
              onClick={() => setFilter("realized")}
              className={`inline-flex px-[20px] py-[12px] items-center justify-center rounded-[100px] border ${filter === "realized"
                  ? "border-[#38312A] bg-white text-[#38312A] opacity-100"
                  : "border-[#38312A]/10 bg-transparent text-[#38312A] opacity-40 hover:opacity-100"
                } text-[14px] xl:text-[18px] font-normal transition`}
            >
              Реалізований об&apos;єкт
            </button>
          </div>

          <div className="mt-[20px] xl:mt-[40px] grid gap-5 xl:gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={`${project.image}-${index}`} project={project} />
            ))}
          </div>

          {/* Pagination mockup matching Figma */}
          {filter === "all" && (
            <div className="mt-10 xl:mt-[40px] flex items-center justify-between w-full">
              <button aria-label="Previous Page" className="flex h-[45px] w-[45px] items-center justify-center rounded-[100px] bg-white/40 border border-[#38312a]/10 transition hover:bg-white/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38312A" strokeWidth="1.5">
                  <path d="M15 18L9 12L15 6" />
                </svg>
              </button>

              <div className="hidden xl:flex h-[45px] items-center gap-[30px] rounded-[100px] bg-white px-[30px]">
                <div className="h-[5px] w-[5px] rounded-full bg-[#38312A]"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#38312A]/20"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#38312A]/20"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#38312A]/20"></div>
                <div className="h-[5px] w-[5px] rounded-full bg-[#38312A]/20"></div>
              </div>

              <button aria-label="Next Page" className="flex h-[45px] w-[45px] items-center justify-center rounded-[100px] bg-white transition hover:bg-white/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38312A" strokeWidth="1.5">
                  <path d="M9 18L15 12L9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
