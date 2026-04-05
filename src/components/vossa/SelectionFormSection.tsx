import Image from "next/image";
import { selectionFormCopy } from "./data";

export function SelectionFormSection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 pb-16 sm:px-8 xl:px-0 xl:pb-[140px]">
      <div className="relative overflow-hidden rounded-[30px] xl:h-[702px]">
        <Image
          src="/vossa/selection-form-background.jpg"
          alt="Фон форми підбору"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/28" />

        <div className="relative flex h-full items-center justify-center px-4 py-12">
          <div className="w-full max-w-[692px] rounded-[20px] border border-[#9b908d] px-5 py-8 text-white backdrop-blur-[2px] sm:px-8 xl:px-10 xl:py-10">
            <h2 className="font-display text-center text-[32px] uppercase leading-[1.04] sm:text-[36px] xl:text-[40px]">
              {selectionFormCopy.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-center text-[18px] leading-[1.32] text-white/90">
              {selectionFormCopy.description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-full border border-white/10 bg-white/10 px-6 py-4 text-[16px] text-white/40 backdrop-blur-[5px]">
                  {selectionFormCopy.namePlaceholder}
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-6 py-4 text-[16px] text-white/40 backdrop-blur-[5px]">
                  {selectionFormCopy.phonePlaceholder}
                </div>
              </div>

              <button
                className="rounded-full bg-[#b99b6e] px-6 py-4 text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105"
                type="button"
              >
                {selectionFormCopy.action}
              </button>

              <div className="mx-auto border-b border-white/20 pb-1 text-[14px] uppercase tracking-[0.04em] text-white">
                {selectionFormCopy.designerLink}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
