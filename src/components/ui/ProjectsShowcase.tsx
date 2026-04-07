import type { ProjectCardData } from "./data";
import { ProjectCard } from "./ProjectCard";

type ProjectsShowcaseProps = {
  title: string;
  items: ProjectCardData[];
};

export function ProjectsShowcase({ title, items }: ProjectsShowcaseProps) {
  return (
    <section className="px-4 py-16 sm:px-8 xl:px-[60px] xl:pt-0 xl:pb-[140px]">
      <div className="mx-auto max-w-[1728px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[600px] text-[34px] uppercase leading-[0.92] text-[#38312a] sm:text-[44px] xl:text-[56px]">
            {title}
          </h2>
          <p className="max-w-[460px] text-[17px] leading-[1.45] text-[#38312a]/72">
            Реалізовані простори, де меблі VOSSA працюють як впевнений центр композиції та підсилюють характер інтер’єру.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <ProjectCard key={`${item.image}-${index}`} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
