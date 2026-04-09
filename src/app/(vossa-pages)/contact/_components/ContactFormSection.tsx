import Image from "next/image";
import Link from "next/link";

import { ScaledArtboard } from "@/components/ui/ScaledArtboard";

const contactDetails = [
  {
    label: "Телефон",
    value: "+38 (099) 122 34 12",
    valueClassName: "text-[30px]",
  },
  {
    label: "Email",
    value: "info@vossa.com",
    valueClassName: "text-[30px]",
  },
  {
    label: "Адреса",
    value: "Київ, вул. Зимиренка 22г, 03182",
    valueClassName: "text-[20px]",
  },
  {
    label: "Графік",
    value: "Пн–Пт: 10:00–19:00\nСб: 11:00–18:00\nНд: вихідний",
    valueClassName: "text-[20px]",
  },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Tiktok", href: "#" },
] as const;

const fieldClassName =
  "h-12 w-full rounded-full bg-white px-[15px] text-[14px] font-light text-[#38312a] outline-none placeholder:text-[#38312a]/40";

function ContactInfoGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-6 sm:grid-cols-2" : "grid grid-cols-2 gap-x-[30px] gap-y-[30px]"}>
      {contactDetails.map((item) => (
        <div key={item.label} className="flex flex-col items-start gap-[15px]">
          <p className="text-[16px] font-light uppercase text-[#38312a]">{item.label}:</p>
          <p
            className={`${item.valueClassName} whitespace-pre-line leading-[1.15] text-[#38312a] ${
              compact ? "max-w-[340px]" : ""
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ className, id }: { className?: string; id?: string }) {
  return (
    <form id={id} className={className}>
      <div className="flex flex-col gap-[10px]">
        <div className="grid gap-[10px] sm:grid-cols-2">
          <input className={fieldClassName} placeholder="Ваше ім’я" type="text" />
          <input className={fieldClassName} placeholder="+38 (___) ___ __ __" type="tel" />
        </div>

        <textarea
          className="h-[123px] w-full resize-none rounded-[15px] bg-white px-[15px] py-[15px] text-[14px] font-light text-[#38312a] outline-none placeholder:text-[#38312a]/40"
          placeholder="Введіть Ваш запит"
        />
      </div>

      <button
        className="mt-5 inline-flex h-[45px] items-center justify-center rounded-full bg-[#b99b6e] px-[28px] text-[14px] uppercase text-white transition duration-200 hover:brightness-105"
        type="button"
      >
        Зв’язатись з нами
      </button>
    </form>
  );
}

function ContactDesktopArtboard() {
  return (
    <div className="relative h-[879px] w-[1608px]">
      <div className="absolute left-0 top-0 w-[789px]">
        <h1 className="text-[40px] uppercase leading-none text-[#38312a]">Зв’язатись з нами</h1>
      </div>

      <p className="absolute left-0 top-[79px] w-[516px] text-[18px] leading-[1.22] text-[#38312a]">
        Напишіть нам — допоможемо підібрати модель, тканину та конфігурацію. Для дизайнерів
        підготуємо комерційну пропозицію й технічні матеріали.
      </p>

      <div className="absolute left-[819px] top-0 w-[789px]">
        <ContactInfoGrid />
      </div>

      <ContactForm className="absolute left-0 top-[252px] flex w-[789px] flex-col" id="contact-form" />

      <div className="absolute left-[819px] top-[252px] h-[627px] w-[789px] overflow-hidden rounded-[20px]">
        <Image
          src="/vossa-pages/contact-showroom.jpg"
          alt="Контакти VOSSA"
          fill
          sizes="789px"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 flex w-[516px] items-center justify-between">
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[18px] uppercase text-[#38312a]/60 transition hover:text-[#38312a]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ContactFormSection() {
  return (
    <section className="px-4 pt-8 pb-12 sm:px-8 xl:px-10 xl:pt-10 xl:pb-[140px] min-[1728px]:px-[60px]">
      <div className="mx-auto max-w-[1608px] xl:hidden">
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-[46px] uppercase leading-[0.88] text-[#38312a] sm:text-[64px]">
              Зв’язатись з нами
            </h1>
            <p className="max-w-[516px] text-[18px] leading-[1.45] text-[#38312a]">
              Напишіть нам — допоможемо підібрати модель, тканину та конфігурацію. Для дизайнерів
              підготуємо комерційну пропозицію й технічні матеріали.
            </p>
          </div>

          <ContactInfoGrid compact />

          <div className="overflow-hidden rounded-[24px]">
            <div className="relative aspect-[789/627] min-h-[320px]">
              <Image
                src="/vossa-pages/contact-showroom.jpg"
                alt="Контакти VOSSA"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ContactForm className="flex flex-col" id="contact-form-mobile" />

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] uppercase text-[#38312a]/60 transition hover:text-[#38312a] sm:text-[18px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1608px] xl:block min-[1728px]:hidden">
        <ScaledArtboard baseWidth={1608} baseHeight={879}>
          <ContactDesktopArtboard />
        </ScaledArtboard>
      </div>

      <div className="mx-auto hidden max-w-[1608px] min-[1728px]:block">
        <ContactDesktopArtboard />
      </div>
    </section>
  );
}
