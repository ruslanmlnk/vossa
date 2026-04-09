import Image from "next/image";

import { partnerCopy } from "./data";

function PartnerSectionArtboard() {
  return (
    <div className="relative h-[555px] w-[1608px]">
      <div className="absolute left-0 top-0">
        <h2 className="font-display max-w-[1218px] text-[150px] uppercase leading-[0.96] text-[#38312a]">
          {partnerCopy.intro}
        </h2>
      </div>

      <div className="absolute left-0 top-[228px] max-w-[584px]">
        <p className="text-[20px] leading-[1.2] text-[#38312a]">{partnerCopy.description}</p>
      </div>

      <div className="absolute left-[1258px] top-[41px]">
        <div className="relative h-[109px] w-[350px] overflow-hidden rounded-full bg-white">
          <Image
            src="/vossa/partner-wide-sofa-pill.jpg"
            alt="Partner showcase image"
            fill
            sizes="350px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="absolute left-[708px] top-[223px]">
        <div className="relative h-[109px] w-[207px] overflow-hidden rounded-full bg-white">
          <Image
            src="/vossa/partner-compact-sofa-pill.jpg"
            alt="Partner detail image"
            fill
            sizes="207px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="absolute left-[955px] top-[185px]">
        <div className="font-display text-[150px] uppercase leading-[0.96] text-[#38312a]">
          {partnerCopy.middle}
        </div>
      </div>

      <div className="absolute left-[363px] top-[370px]">
        <div className="font-display text-[150px] uppercase leading-[0.96] text-[#38312a]">
          {partnerCopy.outro}
        </div>
      </div>

      <button
        className="absolute bottom-[70px] left-0 rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105"
        type="button"
      >
        {partnerCopy.action}
      </button>
    </div>
  );
}

export function PartnerSection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-16 sm:px-8 xl:px-10 xl:py-20 min-[1728px]:px-[60px] min-[1728px]:py-[140px]">
      <div className="xl:hidden">
        <div className="grid gap-8">
          <div>
            <h2 className="font-display max-w-[11ch] text-[52px] uppercase leading-[0.92] text-[#38312a] sm:text-[72px]">
              {partnerCopy.intro}
            </h2>

            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.28] text-[#38312a]">
              {partnerCopy.description}
            </p>
          </div>

          <div className="flex justify-start">
            <div className="relative h-[94px] w-full max-w-[350px] overflow-hidden rounded-full bg-white sm:h-[109px]">
              <Image
                src="/vossa/partner-wide-sofa-pill.jpg"
                alt="Partner showcase image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[207px_minmax(0,1fr)] md:items-center">
          <div className="relative h-[94px] w-[220px] overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[207px]">
            <Image
              src="/vossa/partner-compact-sofa-pill.jpg"
              alt="Partner detail image"
              fill
              sizes="207px"
              className="object-cover object-center"
            />
          </div>

          <div>
            <div className="font-display text-[52px] uppercase leading-[0.92] text-[#38312a] sm:text-[72px]">
              {partnerCopy.middle}
            </div>
            <div className="mt-2 font-display text-[52px] uppercase leading-[0.92] text-[#38312a] sm:text-[72px]">
              {partnerCopy.outro}
            </div>
          </div>
        </div>

        <button
          className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#b99b6e] px-7 py-[14px] text-center text-[13px] uppercase tracking-[0.04em] text-white transition hover:brightness-105 sm:w-auto sm:text-[14px]"
          type="button"
        >
          {partnerCopy.action}
        </button>
      </div>

      <div className="hidden overflow-hidden xl:block min-[1728px]:hidden">
        <div className="relative h-[411px] w-full min-[1400px]:h-[455px] 2xl:h-[500px] min-[1660px]:h-[538px]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.74] min-[1400px]:scale-[0.82] 2xl:scale-[0.9] min-[1660px]:scale-[0.97]">
            <PartnerSectionArtboard />
          </div>
        </div>
      </div>

      <div className="hidden min-[1728px]:block">
        <PartnerSectionArtboard />
      </div>
    </section>
  );
}
