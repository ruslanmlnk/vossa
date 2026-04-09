import Image from "next/image";
import Link from "next/link";

import { ScaledArtboard } from "@/components/ui/ScaledArtboard";

function ContactCommercialProposalDesktop() {
  return (
    <div className="relative h-[555px] w-[1608px]">
      <Link
        href="/contact"
        className="absolute left-0 top-[440px] inline-flex h-[45px] w-[231px] items-center justify-center rounded-full bg-[#b99b6e] text-[14px] uppercase text-white transition duration-200 hover:brightness-105"
      >
        Отримати пропозицію
      </Link>

      <h2 className="absolute left-[101px] top-0 w-[814px] text-center text-[150px] uppercase leading-none text-[#38312a]">
        Отримати
      </h2>

      <div className="absolute left-0 top-[240px] flex w-[562px] flex-col">
        <p className="text-right text-[20px] leading-none text-[#38312a]">
          Надішлемо прайс, умови співпраці та комплектацію
        </p>
        <p className="mt-[7px] text-[20px] leading-none text-[#38312a]">
          під ваш запит. За потреби — підберемо моделі, тканини й підготуємо специфікації для
          проєкту.
        </p>
      </div>

      <h3 className="absolute left-[647px] top-[185px] w-[961px] text-center text-[150px] uppercase leading-none text-[#38312a]">
        Комерційну
      </h3>

      <h3 className="absolute left-[341px] top-[370px] w-[1027px] text-center text-[150px] uppercase leading-none text-[#38312a]">
        пропозицію
      </h3>

      <div className="absolute left-[939px] top-[41px] flex h-[109px] w-[350px] items-center justify-center overflow-hidden rounded-full bg-white">
        <div className="relative h-[350px] w-[350px] -translate-y-[153px]">
          <Image
            src="/vossa-pages/commercial-proposal-pill-sofa.jpg"
            alt="Комерційна пропозиція"
            fill
            sizes="350px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute left-[1401px] top-[416px] flex h-[109px] w-[207px] items-center justify-center overflow-hidden rounded-full bg-white">
        <div className="relative h-[214px] w-[214px] -translate-y-[94px]">
          <Image
            src="/vossa-pages/contact-pill-lounge.jpg"
            alt="Комерційна пропозиція"
            fill
            sizes="207px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function ContactCommercialProposalSection() {
  return (
    <section className="px-4 pb-10 sm:px-8 xl:px-10 xl:pb-[140px] min-[1728px]:px-[60px]">
      <div className="mx-auto max-w-[1608px] xl:hidden">
        <div className="rounded-[30px] bg-[#f2ede7] px-5 py-8 sm:px-8">
          <h2 className="text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
            Отримати
          </h2>
          <h3 className="mt-4 text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
            комерційну
          </h3>
          <h3 className="mt-4 text-[52px] uppercase leading-[0.9] text-[#38312a] sm:text-[74px]">
            пропозицію
          </h3>

          <div className="mt-10 space-y-2 text-[18px] leading-[1.45] text-[#38312a]">
            <p>Надішлемо прайс, умови співпраці та комплектацію</p>
            <p>
              під ваш запит. За потреби — підберемо моделі, тканини й підготуємо специфікації для
              проєкту.
            </p>
          </div>

          <div className="mt-8">
            <div className="relative h-[94px] w-full overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[350px]">
              <Image
                src="/vossa-pages/commercial-proposal-pill-sofa.jpg"
                alt="Комерційна пропозиція"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative h-[94px] w-[220px] overflow-hidden rounded-full bg-white sm:h-[109px] sm:w-[207px]">
              <Image
                src="/vossa-pages/contact-pill-lounge.jpg"
                alt="Комерційна пропозиція"
                fill
                sizes="207px"
                className="object-cover"
              />
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex h-[45px] w-full items-center justify-center rounded-full bg-[#b99b6e] px-[28px] text-[14px] uppercase text-white transition duration-200 hover:brightness-105 sm:w-auto"
          >
            Отримати пропозицію
          </Link>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1608px] xl:block min-[1728px]:hidden">
        <ScaledArtboard baseWidth={1608} baseHeight={555}>
          <ContactCommercialProposalDesktop />
        </ScaledArtboard>
      </div>

      <div className="mx-auto hidden max-w-[1608px] min-[1728px]:block">
        <ContactCommercialProposalDesktop />
      </div>
    </section>
  );
}
