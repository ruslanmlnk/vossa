import Image from "next/image";
import { CircleArrow } from "./shared/CircleArrow";

function CatalogCard({
  title,
  image,
  imagePosition,
  leftRounded,
  rightRounded,
}: {
  title: string;
  image: string;
  imagePosition?: string;
  leftRounded?: boolean;
  rightRounded?: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[30px] bg-black text-white xl:h-[662px] ${
        leftRounded ? "xl:rounded-r-none" : ""
      } ${rightRounded ? "xl:rounded-l-none" : ""}`}
    >
      <Image
        src={image}
        alt={`${title} VOSSA`}
        fill
        sizes="(min-width: 1280px) 50vw, 100vw"
        className={`object-cover ${imagePosition ?? ""}`}
      />

      <div className="absolute inset-x-[20px] top-[20px] flex items-end justify-between sm:inset-x-[32px] sm:top-[28px] xl:left-[60px] xl:right-[60px] xl:top-0 xl:h-[190px]">
        <span className="border-b border-white/20 pb-2 font-display text-[28px] uppercase xl:text-[30px]">
          {title}
        </span>
        <CircleArrow dark size={110} />
      </div>
    </article>
  );
}

export function CatalogSplitSection({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative mx-auto grid max-w-[1728px] gap-px bg-[#f6f3ef] xl:grid-cols-2 ${className}`}
    >
      <CatalogCard
        title="Дивани"
        image="/vossa/catalog-sofa.jpg"
        imagePosition="object-[center_64%]"
        leftRounded
      />
      <CatalogCard title="Ліжка" image="/vossa/catalog-bed.jpg" rightRounded />
    </section>
  );
}