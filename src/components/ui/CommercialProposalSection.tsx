import Image from "next/image";

import { commercialProposalSection } from "./data";
import { ButtonLink } from "./Buttons";

type CommercialProposalSectionProps = {
  primaryPillImage: string;
  secondaryPillImage: string;
};

export function CommercialProposalSection({
  primaryPillImage,
  secondaryPillImage,
}: CommercialProposalSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-8 xl:px-[60px] xl:py-20">
      <div className="mx-auto max-w-[1728px]">
        <div className="relative overflow-hidden rounded-[36px] bg-[#f2ede7] px-5 py-8 sm:px-8 xl:min-h-[555px] xl:px-0 xl:py-0">
          <div className="xl:absolute xl:left-0 xl:top-0">
            <h2 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:max-w-[1220px] xl:text-[150px]">
              {commercialProposalSection.titleLines[0]}
            </h2>
          </div>

          <div className="mt-10 max-w-[584px] xl:absolute xl:left-0 xl:top-[228px] xl:mt-0">
            <p className="text-[18px] leading-[1.45] text-[#38312a]/74 xl:text-[20px]">
              {commercialProposalSection.description}
            </p>
          </div>

          <div className="mt-8 xl:absolute xl:left-[1260px] xl:top-[41px] xl:mt-0">
            <div className="relative h-[94px] w-full overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[350px]">
              <Image
                src={primaryPillImage}
                alt="Комерційна пропозиція"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 xl:absolute xl:left-[706px] xl:top-[223px] xl:mt-0">
            <div className="relative h-[94px] w-[220px] overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[207px]">
              <Image
                src={secondaryPillImage}
                alt="Комерційна пропозиція"
                fill
                sizes="207px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 xl:absolute xl:left-[932px] xl:top-[185px] xl:mt-0">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:text-[150px]">
              {commercialProposalSection.titleLines[1]}
            </h3>
          </div>

          <div className="mt-4 xl:absolute xl:left-[376px] xl:top-[370px] xl:mt-0">
            <h3 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px] xl:text-[150px]">
              {commercialProposalSection.titleLines[2]}
            </h3>
          </div>

          <ButtonLink
            href="/contact"
            className="mt-10 xl:absolute xl:bottom-[70px] xl:left-0 xl:mt-0"
          >
            {commercialProposalSection.action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}