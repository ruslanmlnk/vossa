import Image from "next/image";

import { partnerCtaSection } from "./data";
import { ButtonLink } from "./Buttons";

export function PartnerCtaSection() {
  return (
    <section className="px-[15px] sm:px-[30px] xl:px-[60px] pt-[40px] xl:pt-0 pb-[40px] xl:pb-[140px]">
      <div className="mx-auto max-w-[1608px]">
        {/* Mobile/Tablet Fallback Layout */}
        <div className="xl:hidden relative overflow-hidden rounded-[36px] bg-[#f2ede7] px-5 py-8 sm:px-8">
          <h2 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
            {partnerCtaSection.titleLines[0]}
          </h2>

          <div className="mt-10 max-w-[584px]">
            <p className="text-[18px] leading-[1.45] text-[#38312a]/74">
              {partnerCtaSection.description}
            </p>
          </div>

          <div className="mt-8">
            <div className="relative h-[94px] w-full overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[350px]">
              <Image
                src={partnerCtaSection.primaryPill}
                alt="Стати партнером"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative h-[94px] w-[220px] overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[207px]">
              <Image
                src={partnerCtaSection.secondaryPill}
                alt="Стати партнером"
                fill
                sizes="207px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
              {partnerCtaSection.titleLines[1]}
            </h3>
          </div>

          <div className="mt-4">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
              {partnerCtaSection.titleLines[2]}
            </h3>
          </div>

          <ButtonLink
            href="/designers"
            className="mt-10"
          >
            {partnerCtaSection.action}
          </ButtonLink>
        </div>

        {/* Desktop Pixel-Perfect Layout (1728px reference) */}
        <div className="hidden xl:block relative h-[555px] w-full">
          <h2 className="absolute left-0 top-0 w-[1218px] text-[150px] font-normal uppercase leading-none text-[#38312a] tracking-[-0.02em]">
            {partnerCtaSection.titleLines[0]}
          </h2>

          <div className="absolute left-[955px] top-[185px] w-[597px]">
            <h3 className="text-[150px] font-normal uppercase leading-none text-[#38312a] tracking-[-0.02em]">
              {partnerCtaSection.titleLines[1]}
            </h3>
          </div>

          <div className="absolute left-[363px] top-[370px] w-[982px]">
            <h3 className="text-[150px] font-normal uppercase leading-none text-[#38312a] tracking-[-0.02em]">
              {partnerCtaSection.titleLines[2]}
            </h3>
          </div>

          <div className="absolute left-0 top-[228px] w-[584px] h-[100px] flex flex-col justify-start">
            <p className="w-full text-[20px] font-normal uppercase leading-snug text-[#38312a] text-right">
              {partnerCtaSection.description.split(": ")[0]}:
            </p>
            <p className="w-full text-[20px] font-normal uppercase leading-snug text-[#38312a] text-left">
              {partnerCtaSection.description.split(": ")[1]}
            </p>
          </div>

          <a
            href="/designers"
            className="absolute left-0 top-[440px] inline-flex h-[45px] w-[292px] items-center justify-center rounded-full bg-[#B99B6E] px-[28px] py-[14px] text-[14px] font-normal uppercase text-white transition hover:bg-[#a68a5f]"
          >
            {partnerCtaSection.action}
          </a>

          {/* First Box/Image */}
          <div className="absolute left-[1258px] top-[41px] flex h-[109px] w-[350px] items-center justify-center overflow-hidden rounded-[100px] bg-white">
            <div className="relative h-[350px] w-[350px] shrink-0 top-[-108px]">
              <Image
                src={partnerCtaSection.primaryPill}
                alt="Image 1"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Second Box/Image */}
          <div className="absolute left-[708px] top-[223px] flex h-[109px] w-[207px] items-center justify-center overflow-hidden rounded-[100px] bg-white">
            <div className="relative h-[214px] w-[214px] shrink-0 top-[-44.5px]">
              <Image
                src={partnerCtaSection.secondaryPill}
                alt="Image 2"
                fill
                sizes="214px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
