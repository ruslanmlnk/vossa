import Image from "next/image";
import Link from "next/link";

import { CircleArrow } from "@/components/vossa/shared/CircleArrow";

import type { ProjectCardData } from "./data";

type ProjectCardProps = {
  project: ProjectCardData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-4">
      <Link href={project.href} className="group relative block overflow-hidden rounded-[28px]">
        <div className="relative aspect-[516/558]">
          <Image
            src={project.image}
            alt={project.designer}
            fill
            sizes="(min-width: 1280px) 516px, (min-width: 768px) 40vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {project.tag ? (
          <div className="absolute left-4 top-[78%] z-10">
            <div className="rounded-full border border-[#dbd7d1] bg-black/10 px-3 py-1 text-[12px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {project.tag}
            </div>
            <div className="mx-auto h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#dbd7d1]" />
          </div>
        ) : null}

        <div className="absolute left-6 top-[82%] rounded-full">
          <Image
            src={project.avatar}
            alt={project.designer}
            width={62}
            height={62}
            className="h-[62px] w-[62px] rounded-full object-cover"
          />
        </div>

        <div className="absolute right-6 top-6">
          <CircleArrow size={54} dark />
        </div>
      </Link>

      <div className="max-w-[200px]">
        <p className="text-[13px] uppercase tracking-[0.14em] text-[#38312a]/45">
          Дизайн виконали:
        </p>
        <p className="mt-2 text-[22px] uppercase leading-none text-[#38312a]">
          {project.designer}
        </p>
      </div>
    </article>
  );
}