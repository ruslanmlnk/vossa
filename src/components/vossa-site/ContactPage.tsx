import Image from "next/image";
import Link from "next/link";

import { contactInfo, socialLinks } from "./data";
import { Breadcrumbs } from "./shared/Breadcrumbs";
import { CommercialProposalSection } from "./shared/CommercialProposalSection";

export function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Контакти" },
        ]}
      />

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
        <div className="mx-auto max-w-[1728px]">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <div>
              <h1 className="text-[46px] uppercase leading-[0.9] text-[#38312a] sm:text-[64px] xl:text-[80px]">
                Зв’язатись з нами
              </h1>
              <p className="mt-6 max-w-[470px] text-[18px] leading-[1.55] text-[#38312a]/74">
                Напишіть нам — допоможемо підібрати модель, тканину та
                конфігурацію. Для дизайнерів підготуємо комерційну пропозицію й
                технічні матеріали.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <p className="text-[13px] uppercase tracking-[0.16em] text-[#38312a]/45">
                      {item.label}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-[20px] leading-[1.4] text-[#38312a]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
              <form className="rounded-[28px] border border-[#38312a]/10 bg-white p-5 shadow-[0_12px_40px_rgba(56,49,42,0.05)] sm:p-6">
                <div className="space-y-3">
                  <input
                    className="w-full rounded-full border border-[#38312a]/10 bg-[#f6f3ef] px-5 py-3 text-[15px] text-[#38312a] outline-none"
                    placeholder="Ваше ім’я"
                    type="text"
                  />
                  <input
                    className="w-full rounded-full border border-[#38312a]/10 bg-[#f6f3ef] px-5 py-3 text-[15px] text-[#38312a] outline-none"
                    placeholder="+38 (___) ___ __ __"
                    type="tel"
                  />
                  <textarea
                    className="min-h-[140px] w-full rounded-[24px] border border-[#38312a]/10 bg-[#f6f3ef] px-5 py-4 text-[15px] text-[#38312a] outline-none"
                    placeholder="Введіть Ваш запит"
                  />
                </div>

                <button
                  className="mt-4 inline-flex rounded-full bg-[#b99b6e] px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-105"
                  type="button"
                >
                  Зв’язатись з нами
                </button>
              </form>

              <div className="relative overflow-hidden rounded-[28px]">
                <div className="relative aspect-[1/1.04] min-h-[320px]">
                  <Image
                    src="/vossa-pages/44ad4631ef4b9c912542e0a88ab51557b91e319c.jpg"
                    alt="Контакти VOSSA"
                    fill
                    sizes="(min-width: 1280px) 54vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-[13px] uppercase tracking-[0.14em] text-[#38312a]/62">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#38312a]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CommercialProposalSection
        primaryPillImage="/vossa-pages/a6cdcb0da3f1496f7f9ee7155caff690d2bfda37.jpg"
        secondaryPillImage="/vossa-pages/b40c53d33a3a35109cacadc5026304b594f03981.jpg"
      />
    </>
  );
}
