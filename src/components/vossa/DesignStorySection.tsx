import Image from "next/image";
import { designStoryCopy } from "./data";

export function DesignStorySection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-16 sm:px-8 xl:px-[60px] xl:py-[140px]">
      <div className="grid gap-8 xl:grid-cols-[516px_516px_516px] xl:justify-between">
        <div className="flex flex-col justify-between xl:h-[645px]">
          <div>
            <h2 className="font-display max-w-[420px] text-[36px] uppercase leading-[1.02] xl:text-[40px]">
              {designStoryCopy.title}
            </h2>
          </div>

          <div className="mt-10 xl:mt-0">
            <p className="max-w-[516px] text-[18px] leading-[1.32] text-[#5d544c]">
              {designStoryCopy.lead}
            </p>

            <button
              className="mt-8 rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105"
              type="button"
            >
              {designStoryCopy.action}
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[20px] xl:h-[645px]">
          <Image
            src="/vossa/design-story-sofa-top-view.jpg"
            alt="Сучасний інтер’єр VOSSA"
            fill
            sizes="(min-width: 1280px) 516px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-between xl:h-[645px]">
          <p className="max-w-[516px] text-[18px] leading-[1.32] text-[#5d544c]">
            {designStoryCopy.aside}
          </p>

          <div className="mt-12 self-end text-right xl:mt-0">
            <div className="font-display text-[58px] uppercase leading-none text-[#38312a]/7 xl:text-[70px]">
              voice of
            </div>
            <div className="font-display mt-1 text-[58px] uppercase leading-none text-[#38312a]/7 xl:text-[70px]">
              your space
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
