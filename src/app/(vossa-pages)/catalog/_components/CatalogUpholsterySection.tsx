import Image from "next/image";

import { upholsterySection } from "@/components/ui/data";
import { ButtonLink } from "@/components/ui/Buttons";

export function CatalogUpholsterySection() {
  return (
    <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-[80px]">
      <div className="mx-auto max-w-[1728px]">
        <div className="grid gap-8 rounded-[36px] bg-white px-5 py-8 shadow-[0_12px_44px_rgba(56,49,42,0.05)] sm:px-8 xl:grid-cols-[0.82fr_1.18fr] xl:px-[60px] xl:py-[70px]">
          <div className="xl:pt-10">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#38312a]/35">
              {upholsterySection.eyebrowLeft}
            </p>
            <h2 className="mt-5 max-w-[360px] text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[64px]">
              {upholsterySection.title}
            </h2>
            <p className="mt-6 max-w-[420px] text-[18px] leading-[1.5] text-[#38312a]/72">
              {upholsterySection.lead}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] bg-[#f0ece7] p-5">
              <div className="relative aspect-[1/1.2] overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={upholsterySection.image}
                  alt={upholsterySection.label}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <p className="pt-4 text-center text-[15px] uppercase tracking-[0.14em] text-[#38312a]">
                {upholsterySection.label}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[#38312a]/35">
                {upholsterySection.eyebrowRight}
              </p>
              <p className="mt-5 text-[18px] leading-[1.52] text-[#38312a]/72">
                {upholsterySection.body}
              </p>
              <ButtonLink href="/contact" className="mt-8">
                {upholsterySection.action}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
