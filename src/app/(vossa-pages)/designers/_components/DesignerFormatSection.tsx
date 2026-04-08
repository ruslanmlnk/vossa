import { partnerTiers } from "@/components/ui/data";

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7 7.1999C18.3 6.7999 17.7 6.7999 17.3 7.1999L9.8 14.6999L6.7 11.5999C6.3 11.1999 5.7 11.1999 5.3 11.5999C4.9 11.9999 4.9 12.5999 5.3 12.9999L9.1 16.7999C9.3 16.9999 9.5 17.0999 9.8 17.0999C10.1 17.0999 10.3 16.9999 10.5 16.7999L18.7 8.5999C19.1 8.1999 19.1 7.5999 18.7 7.1999Z"
        fill="#38312A"
      />
    </svg>
  );
}

export function DesignerFormatSection() {
  return (
    <section className="px-[15px] sm:px-[30px] xl:px-[60px] relative pb-16 xl:pb-[140px]">
      <div className="mx-auto max-w-[1608px]">
        {/* Header Block exactly matching Figma layout at xl */}
        <div className="flex flex-col items-center xl:mx-auto xl:w-[980px]">
          <h2 className="text-center text-[32px] sm:text-[40px] font-normal uppercase leading-normal text-[#38312A]">
            Партнерська програма
          </h2>
          <p className="mt-[20px] xl:mt-[30px] max-w-[759px] text-center text-[16px] xl:text-[18px] font-normal leading-normal text-[#38312A]">
            Оберіть формат співпраці, який відповідає вашому обсягу проєктів.
            Переходьте на наступний рівень разом із VOSSA — більше можливостей,
            швидше узгодження, пріоритетна підтримка.
          </p>
        </div>

        {/* Desktop Layout grid */}
        <div className="mt-10 xl:mt-[56px] flex flex-col gap-[30px] xl:flex-row xl:justify-between relative">
          {partnerTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex w-full xl:w-[516px] flex-col rounded-[20px] bg-white p-[30px] shadow-sm xl:pb-[49px]`}
            >
              {/* Highlighted Top Banner */}
              <div className="mb-[30px] flex flex-col items-center gap-[10px] rounded-[20px] bg-[#F6F3EF] p-[20px] text-center xl:h-[131px]">
                <h3 className="text-[25px] font-normal uppercase leading-none text-[#38312A]">
                  {tier.name}
                </h3>
                <p className="text-[18px] sm:text-[20px] font-light leading-snug text-[#38312A]">
                  {tier.description}
                </p>
              </div>

              {/* Feature List */}
              <ul className="flex flex-col gap-[15px]">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[10px]">
                    <CheckIcon />
                    <span className="text-[16px] sm:text-[18px] font-light leading-normal text-[#38312A]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button placed below the cards with 40px spacing */}
        <div className="mt-10 xl:mt-[40px] flex justify-center w-full">
          <button className="flex min-h-[45px] w-full items-center justify-center rounded-full bg-[#B99B6E] px-[28px] py-[14px] text-center text-[10px] sm:text-[14px] font-normal uppercase text-white shadow-sm transition-all hover:bg-[#a68a5f] sm:w-auto xl:min-w-[377px]">
            Зареєструватися в партнерській програмі
          </button>
        </div>
      </div>
    </section>
  );
}