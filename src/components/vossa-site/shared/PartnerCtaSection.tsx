import Image from "next/image";

import { partnerCtaSection } from "../data";
import { ButtonLink } from "./Buttons";

export function PartnerCtaSection() {
  return (
    <section className="px-4 py-16 sm:px-8 xl:px-[60px] xl:py-20">
      <div className="mx-auto max-w-[1728px]">
        <div className="relative overflow-hidden rounded-[36px] bg-[#f2ede7] px-5 py-8 sm:px-8 xl:min-h-[555px] xl:px-0 xl:py-0">
          <div className="xl:absolute xl:left-0 xl:top-0">
            <h2 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:max-w-[1220px] xl:text-[150px]">
              {partnerCtaSection.titleLines[0]}
            </h2>
          </div>

          <div className="mt-10 max-w-[584px] xl:absolute xl:left-0 xl:top-[228px] xl:mt-0">
            <p className="text-[18px] leading-[1.45] text-[#38312a]/74 xl:text-[20px]">
              {partnerCtaSection.description}
            </p>
          </div>

          <div className="mt-8 xl:absolute xl:left-[1258px] xl:top-[41px] xl:mt-0">
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

          <div className="mt-6 xl:absolute xl:left-[708px] xl:top-[223px] xl:mt-0">
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

          <div className="mt-8 xl:absolute xl:left-[955px] xl:top-[185px] xl:mt-0">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:text-[150px]">
              {partnerCtaSection.titleLines[1]}
            </h3>
          </div>

          <div className="mt-4 xl:absolute xl:left-[363px] xl:top-[370px] xl:mt-0">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:text-[150px]">
              {partnerCtaSection.titleLines[2]}
            </h3>
          </div>

          <ButtonLink
            href="/designers"
            className="mt-10 xl:absolute xl:bottom-[70px] xl:left-0 xl:mt-0"
          >
            {partnerCtaSection.action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
