import Image from "next/image";

import { selectionSection } from "../data";

export function SelectionSection() {
  return (
    <section className="px-4 py-16 sm:px-8 xl:px-[60px] xl:py-20">
      <div className="mx-auto max-w-[1728px]">
        <div className="relative overflow-hidden rounded-[32px]">
          <Image
            src="/vossa/selection-form-background.jpg"
            alt="Форма підбору VOSSA"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/28" />

          <div className="relative flex items-center justify-center px-4 py-14 sm:px-8 xl:min-h-[702px]">
            <div className="w-full max-w-[692px] rounded-[24px] border border-[#9b908d] bg-black/10 px-5 py-8 text-white backdrop-blur-[3px] sm:px-8 xl:px-10 xl:py-10">
              <h2 className="text-center text-[32px] uppercase leading-[0.95] sm:text-[36px] xl:text-[40px]">
                {selectionSection.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[560px] text-center text-[18px] leading-[1.45] text-white/88">
                {selectionSection.description}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-full border border-white/12 bg-white/10 px-6 py-4 text-[16px] text-white/42 backdrop-blur-md">
                    {selectionSection.namePlaceholder}
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/10 px-6 py-4 text-[16px] text-white/42 backdrop-blur-md">
                    {selectionSection.phonePlaceholder}
                  </div>
                </div>

                <button
                  className="rounded-full bg-[#b99b6e] px-6 py-4 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-105"
                  type="button"
                >
                  {selectionSection.action}
                </button>

                <div className="mx-auto border-b border-white/20 pb-1 text-[13px] uppercase tracking-[0.14em] text-white">
                  {selectionSection.designerLink}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
