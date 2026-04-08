import { designerBenefits } from "@/components/ui/data";
import { AnimatedScrollText } from "@/components/ui/AnimatedScrollText";

export function DesignerBenefitsSection() {
  return (
    <section className="px-[15px] sm:px-[30px] xl:px-[60px] pb-10 xl:pb-[140px] relative">
      <div className="mx-auto max-w-[1608px]">
        {/* Intro Text with Animation and exactly 140px top/bottom spacing */}
        <div className="pt-[140px] pb-[140px] w-full">
          <AnimatedScrollText text="Ми працюємо так, щоб ви могли планувати проєкт без сюрпризів: зрозумілі терміни, фіксація домовленостей і повний пакет матеріалів для узгодження з клієнтом." />
        </div>

        {/* Desktop List */}
        <div className="hidden xl:flex flex-col gap-[10px]">
          {designerBenefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className="sticky z-10 flex h-[147px] w-full items-center gap-[30px] rounded-[20px] border border-[#38312a]/10 bg-[#FBF9F7] px-[30px] shadow-sm"
              style={{
                top: `${140 + index * 20}px`, // Slight offset so they stack nicely if sticky
              }}
            >
              <div className="w-[243px] flex-shrink-0 font-['GRAVHEZ'] text-[60px] uppercase leading-none text-[#b99b6e]">
                {benefit.number}
              </div>
              <div className="flex-1 text-[40px] font-normal uppercase leading-none text-[#38312a]">
                {benefit.title}
              </div>
              <div className="w-[516px] flex-shrink-0 text-right text-[20px] font-light leading-normal text-[#38312a]">
                {benefit.note}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile/Tablet List */}
        <div className="xl:hidden flex flex-col gap-4">
          {designerBenefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className="sticky rounded-[24px] border border-[#38312a]/10 bg-[#FBF9F7] px-5 py-6 shadow-sm"
              style={{
                top: `${100 + index * 10}px`,
                zIndex: 10 + index,
              }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-['GRAVHEZ'] text-[40px] uppercase leading-none text-[#b99b6e]">
                  {benefit.number}
                </span>
                <h2 className="text-[24px] font-normal uppercase leading-none text-[#38312a] sm:text-[28px]">
                  {benefit.title}
                </h2>
                <p className="text-[16px] font-light leading-snug text-[#38312a]/60 sm:max-w-[40%] sm:text-right">
                  {benefit.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}