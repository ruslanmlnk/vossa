import Image from "next/image";

import type { WorkflowStep } from "./data";

type WorkflowSectionProps = {
  title: string;
  steps: WorkflowStep[];
};

function StepCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-[351px] flex-col justify-between rounded-[20px] border border-[#D8D2CB] bg-[#F7F5F2] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-normal uppercase leading-[1.05] text-[#38312A] sm:text-[16px]">
          {title}
        </h3>
        <span className="mt-[4px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#38312A]" />
      </div>

      <p className="max-w-[95%] text-[11px] font-light leading-[1.2] text-[#6E6256] sm:text-[12px]">
        {description}
      </p>
    </article>
  );
}

function ImageCard({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <article className="relative h-[351px] overflow-hidden rounded-[20px] border border-[#D8D2CB] bg-[#F7F5F2]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </article>
  );
}

export function WorkflowSection({ title, steps }: WorkflowSectionProps) {
  const textSteps = steps.filter((step) => !step.image);

  return (
    <section className="px-[15px] py-10 lg:py-[60px] xl:pt-0 xl:pb-[140px]">
      <div className="mx-auto max-w-[1608px]">
        <div className="mb-8 gap-5 lg:mb-10 text-center">
          <h2 className="text-[34px] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-[#38312A] sm:text-[44px] lg:text-[56px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[14px]">
          {textSteps[0] && (
            <StepCard
              title={textSteps[0].title}
              description={textSteps[0].description}
            />
          )}

          {steps[1] && (
            <StepCard
              title={steps[1].title}
              description={steps[1].description}
            />
          )}

          {steps[1]?.image && (
            <ImageCard image={steps[1].image} alt={steps[1].title} />
          )}

          {textSteps[1] && (
            <StepCard
              title={textSteps[1].title}
              description={textSteps[1].description}
            />
          )}

          {steps[3]?.image && (
            <ImageCard image={steps[3].image} alt={steps[3].title} />
          )}

          {steps[3] && (
            <StepCard
              title={steps[3].title}
              description={steps[3].description}
            />
          )}

          {steps[4] && (
            <StepCard
              title={steps[4].title}
              description={steps[4].description}
            />
          )}

          {steps[4]?.image && (
            <ImageCard image={steps[4].image} alt={steps[4].title} />
          )}
        </div>
      </div>
    </section>
  );
}