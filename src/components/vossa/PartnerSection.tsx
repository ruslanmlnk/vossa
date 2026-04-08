import Image from "next/image";
import { partnerCopy } from "./data";

export function PartnerSection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-16 sm:px-8 xl:px-[60px] xl:py-[140px]">
      <div className="relative xl:h-[555px]">
        <div className="xl:absolute xl:left-0 xl:top-0">
          <h2 className="font-display max-w-[1218px] text-[58px] uppercase leading-[0.96] sm:text-[92px] xl:text-[150px]">
            {partnerCopy.intro}
          </h2>
        </div>

        <div className="mt-6 max-w-[584px] xl:absolute xl:left-0 xl:top-[228px] xl:mt-0">
          <p className="text-[20px] leading-[1.2]">{partnerCopy.description}</p>
        </div>

        <div className="mt-8 flex items-center gap-4 xl:absolute xl:left-[1258px] xl:top-[41px] xl:mt-0 xl:block">
          <div className="relative h-[109px] w-[350px] overflow-hidden rounded-full bg-white">
            <Image
              src="/vossa/partner-wide-sofa-pill.jpg"
              alt="Партнерський блок 1"
              fill
              sizes="350px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-6 xl:absolute xl:left-[708px] xl:top-[223px] xl:mt-0">
          <div className="relative h-[109px] w-[207px] overflow-hidden rounded-full bg-white">
            <Image
              src="/vossa/partner-compact-sofa-pill.jpg"
              alt="Партнерський блок 2"
              fill
              sizes="207px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-8 xl:absolute xl:left-[955px] xl:top-[185px] xl:mt-0">
          <div className="font-display text-[58px] uppercase leading-[0.96] sm:text-[92px] xl:text-[150px]">
            {partnerCopy.middle}
          </div>
        </div>

        <div className="mt-4 xl:absolute xl:left-[363px] xl:top-[370px] xl:mt-0">
          <div className="font-display text-[58px] uppercase leading-[0.96] sm:text-[92px] xl:text-[150px]">
            {partnerCopy.outro}
          </div>
        </div>

        <button
          className="mt-10 rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105 xl:absolute xl:bottom-[70px] xl:left-0 xl:mt-0"
          type="button"
        >
          {partnerCopy.action}
        </button>
      </div>
    </section>
  );
}