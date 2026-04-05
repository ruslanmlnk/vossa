import Image from "next/image";

import type { WorkflowStep } from "../data";

type WorkflowSectionProps = {
  title: string;
  steps: WorkflowStep[];
};

export function WorkflowSection({ title, steps }: WorkflowSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-8 xl:px-[60px] xl:py-20">
      <div className="mx-auto max-w-[1728px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[34px] uppercase leading-[0.92] text-[#38312a] sm:text-[44px] xl:text-[56px]">
            {title}
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[1.45] text-[#38312a]/72">
            Прозорий процес без зайвих узгоджень: від першого запиту до технічного пакета, виробництва й фінального супроводу.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col justify-between rounded-[28px] border border-[#38312a]/10 bg-white p-6 shadow-[0_12px_40px_rgba(56,49,42,0.04)]"
            >
              <div>
                <h3 className="text-[22px] uppercase leading-none text-[#38312a]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.52] text-[#38312a]/72">
                  {step.description}
                </p>
              </div>

              {step.image ? (
                <div className="relative mt-6 aspect-[1/1.1] overflow-hidden rounded-[20px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mt-6 h-3 w-14 rounded-full bg-[#b99b6e]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
