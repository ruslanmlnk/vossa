import Image from "next/image";

import { ButtonLink } from "@/components/ui/Buttons";

export function AboutHeroSection() {
  return (
    <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
      <div className="mx-auto max-w-[1728px]">
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
          <div>
            <h1 className="text-[52px] uppercase leading-[0.88] text-[#38312a] sm:text-[78px] xl:text-[108px]">
              Голос вашого простору
            </h1>
          </div>
          <div className="space-y-4 text-[18px] leading-[1.55] text-[#38312a]/74">
            <p>
              Ми віримо, що меблі — це не фон. Це елемент, який тримає
              композицію простору і визначає відчуття якості в інтер&apos;єрі.
            </p>
            <p>
              Тому ми робимо ставку на чисту форму, продумані пропорції та
              матеріали, які виглядають преміально в реальному житті — при
              денному світлі та ввечері.
            </p>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[36px]">
          <div className="relative aspect-[1728/620] min-h-[320px]">
            <Image
              src="/vossa-pages/02067ffba790c81590430ce05b9cdf85d58919b1.jpg"
              alt="Про VOSSA"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
          <div>
            <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
              your space
            </p>
            <h2 className="mt-4 max-w-[420px] text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[64px]">
              Стримано. Впевнено. Точно.
            </h2>
            <p className="mt-6 max-w-[430px] text-[18px] leading-[1.55] text-[#38312a]/74">
              У VOSSA немає випадкових рішень. Ми прибираємо зайве, залишаючи
              те, що працює: силует, комфорт, тактильність, деталі.
            </p>
            <p className="mt-4 max-w-[430px] text-[18px] leading-[1.55] text-[#38312a]/74">
              Саме це робить модель актуальною роками й дозволяє їй органічно
              жити в різних стилях — від мінімалізму до теплих нейтральних
              просторів.
            </p>
            <ButtonLink href="/catalog" className="mt-8">
              Перейти до каталогу
            </ButtonLink>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-white">
            <div className="relative aspect-[1032/760]">
              <Image
                src="/vossa-pages/bcc0c726f763cdbc9140605c61064b6c39d47b2b.jpg"
                alt="Інтер'єр VOSSA"
                fill
                sizes="(min-width: 1280px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}