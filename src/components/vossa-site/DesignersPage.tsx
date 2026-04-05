import Image from "next/image";

import {
  designerBenefits,
  partnerTiers,
  sharedProjects,
  workflowSteps,
} from "./data";
import { Breadcrumbs } from "./shared/Breadcrumbs";
import { ButtonLink, primaryButtonClass } from "./shared/Buttons";
import { ProjectsShowcase } from "./shared/ProjectsShowcase";
import { WorkflowSection } from "./shared/WorkflowSection";

export function DesignersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Співпраця з дизайнерами" },
        ]}
      />

      <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
        <div className="mx-auto max-w-[1728px]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
                Співпраця
              </p>
              <h1 className="mt-4 max-w-[980px] text-[52px] uppercase leading-[0.88] text-[#38312a] sm:text-[74px] xl:text-[108px]">
                Співпраця з дизайнерами
              </h1>
            </div>

            <ButtonLink href="/contact" className="xl:mt-3">
              Перейти в Telegram-бот
            </ButtonLink>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[36px]">
            <div className="relative aspect-[1728/540] min-h-[300px]">
              <Image
                src="/vossa-pages/b3ce17ee4bacc7fde14022a5fb59e0b20efe7432.jpg"
                alt="Співпраця з дизайнерами"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            <p className="text-[18px] leading-[1.55] text-[#38312a]/74">
              Ми створили формат партнерства, в якому дизайнеру легко працювати
              й впевнено рекомендувати продукт клієнту: прозорі умови, технічні
              матеріали та підтримка на кожному етапі.
            </p>
            <p className="text-[18px] leading-[1.55] text-[#38312a]/74">
              Ми працюємо так, щоб ви могли планувати проєкт без сюрпризів:
              зрозумілі терміни, фіксація домовленостей і повний пакет
              матеріалів для узгодження з клієнтом.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-8 xl:px-[60px] xl:py-10">
        <div className="mx-auto max-w-[1728px]">
          <div className="space-y-4">
            {designerBenefits.map((benefit, index) => (
              <article
                key={benefit.number}
                className="sticky rounded-[28px] border border-[#38312a]/10 bg-white px-5 py-5 shadow-[0_12px_34px_rgba(56,49,42,0.05)] sm:px-6"
                style={{
                  top: `${110 + index * 16}px`,
                  zIndex: 10 + index,
                }}
              >
                <div className="grid gap-5 md:grid-cols-[110px_1fr_auto] md:items-center">
                  <span className="text-[34px] uppercase leading-none text-[#b99b6e]">
                    {benefit.number}
                  </span>
                  <h2 className="text-[24px] uppercase leading-none text-[#38312a] xl:text-[28px]">
                    {benefit.title}
                  </h2>
                  <p className="max-w-[320px] text-[15px] leading-[1.45] text-[#38312a]/58 md:text-right">
                    {benefit.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WorkflowSection title="Як ми працюємо" steps={workflowSteps} />

      <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-14">
        <div className="mx-auto max-w-[1728px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
                Партнерська програма
              </p>
              <h2 className="mt-4 text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[64px]">
                Оберіть формат співпраці
              </h2>
            </div>
            <p className="max-w-[520px] text-[18px] leading-[1.55] text-[#38312a]/74">
              Переходьте на наступний рівень разом із VOSSA — більше можливостей,
              швидше узгодження та пріоритетна підтримка для активних партнерів.
            </p>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {partnerTiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-[30px] border px-6 py-7 shadow-[0_12px_34px_rgba(56,49,42,0.04)] ${
                  tier.highlighted
                    ? "border-[#b99b6e] bg-[#f0e9df]"
                    : "border-[#38312a]/10 bg-white"
                }`}
              >
                <h3 className="text-[28px] uppercase leading-none text-[#38312a]">
                  {tier.name}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.5] text-[#38312a]/72">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3 text-[16px] leading-[1.48] text-[#38312a]/78">
                  {tier.features.map((feature) => (
                    <li key={feature} className="rounded-[18px] bg-white/70 px-4 py-3">
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.highlighted ? (
                  <div className="mt-6">
                    <button className={primaryButtonClass} type="button">
                      Зареєструватися
                    </button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-16">
        <div className="mx-auto max-w-[1728px] overflow-hidden rounded-[36px]">
          <div className="relative aspect-[1728/520] min-h-[280px]">
            <Image
              src="/vossa-pages/0ce37b7b1f26bfd2c118b2db18ff23ad6339abb5.jpg"
              alt="Готові почати співпрацю"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/28" />
            <div className="relative flex h-full flex-col justify-center gap-5 px-6 py-10 text-white sm:px-10 xl:px-[76px]">
              <p className="text-[14px] uppercase tracking-[0.16em] text-white/72">
                Готові почати співпрацю?
              </p>
              <h2 className="max-w-[760px] text-[38px] uppercase leading-[0.92] sm:text-[54px] xl:text-[72px]">
                Перейдіть у Telegram-бот і запустіть підбір під ваш проєкт
              </h2>
              <p className="max-w-[620px] text-[18px] leading-[1.55] text-white/82">
                Там швидко отримати прайс, умови, технічні матеріали та почати
                підбір під конкретний інтер’єр або специфікацію.
              </p>
              <ButtonLink href="/contact" className="w-fit">
                Перейти в Telegram-бот
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ProjectsShowcase title="Проєкти дизайнерів" items={sharedProjects.slice(0, 3)} />
    </>
  );
}
