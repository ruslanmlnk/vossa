import Image from "next/image";

import { designStoryCopy } from "./data";

function DesignStorySectionArtboard() {
  return (
    <div className="relative h-[645px] w-[1608px]">
      <div className="absolute left-0 top-0 flex h-[645px] w-[516px] flex-col justify-between">
        <div>
          <h2 className="font-display max-w-[420px] text-[40px] uppercase leading-[1.02] text-[#38312a]">
            {designStoryCopy.title}
          </h2>
        </div>

        <div>
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

      <div className="absolute left-[546px] top-0 h-[645px] w-[516px] overflow-hidden rounded-[20px]">
        <Image
          src="/vossa/design-story-sofa-top-view.jpg"
          alt="Design story sofa"
          fill
          sizes="516px"
          className="object-cover"
        />
      </div>

      <div className="absolute left-[1092px] top-0 flex h-[645px] w-[516px] flex-col justify-between">
        <p className="max-w-[516px] text-[18px] leading-[1.32] text-[#5d544c]">
          {designStoryCopy.aside}
        </p>

        <div className="self-end text-right">
          <div className="font-display text-[70px] uppercase leading-none text-[#38312a]/7">
            voice of
          </div>
          <div className="font-display mt-1 text-[70px] uppercase leading-none text-[#38312a]/7">
            your space
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesignStorySection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-16 sm:px-8 xl:px-10 xl:py-20 min-[1728px]:px-[60px] min-[1728px]:py-[140px]">
      <div className="xl:hidden">
        <div className="grid gap-8">
          <div>
            <h2 className="font-display max-w-[420px] text-[36px] uppercase leading-[1.02] text-[#38312a] sm:text-[40px]">
              {designStoryCopy.title}
            </h2>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <Image
              src="/vossa/design-story-sofa-top-view.jpg"
              alt="Design story sofa"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-6">
            <p className="max-w-[516px] text-[18px] leading-[1.32] text-[#5d544c]">
              {designStoryCopy.lead}
            </p>

            <p className="max-w-[516px] text-[18px] leading-[1.32] text-[#5d544c]">
              {designStoryCopy.aside}
            </p>

            <div className="text-right">
              <div className="font-display text-[58px] uppercase leading-none text-[#38312a]/7 sm:text-[70px]">
                voice of
              </div>
              <div className="font-display mt-1 text-[58px] uppercase leading-none text-[#38312a]/7 sm:text-[70px]">
                your space
              </div>
            </div>

            <button
              className="w-full rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105 sm:w-auto"
              type="button"
            >
              {designStoryCopy.action}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden overflow-hidden xl:block min-[1728px]:hidden">
        <div className="relative h-[477px] w-full min-[1400px]:h-[529px] 2xl:h-[581px] min-[1660px]:h-[626px]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.74] min-[1400px]:scale-[0.82] 2xl:scale-[0.9] min-[1660px]:scale-[0.97]">
            <DesignStorySectionArtboard />
          </div>
        </div>
      </div>

      <div className="hidden min-[1728px]:block">
        <DesignStorySectionArtboard />
      </div>
    </section>
  );
}
