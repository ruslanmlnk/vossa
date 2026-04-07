type DesignerPartnershipHeroProps = {
  titleTop?: string;
  titleBottom?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function DesignerPartnershipHero({
  titleTop = "Співпраця",
  titleBottom = "з дизайнерами",
  description = "Ми створили формат партнерства, в якому дизайнеру легко працювати й впевнено рекомендувати продукт клієнту: прозорі умови, технічні матеріали та підтримка на кожному етапі.",
  buttonText = "Перейти в Telegram-бот",
  buttonHref = "#",
}: DesignerPartnershipHeroProps) {
  return (
    <section className="relative px-[15px] sm:px-[30px] xl:px-[60px] pt-[40px] xl:pt-[100px] pb-[40px] xl:pb-0">
      <div className="mx-auto max-w-[1608px]">
        {/* Desktop Layout */}
        <div className="hidden xl:block relative h-[919px] w-full">
          <h2 className="absolute left-0 top-0 w-[834px] text-[150px] font-normal uppercase leading-none text-[#38312A] tracking-[-0.02em]">
            {titleTop}
          </h2>
          <h2 className="absolute left-[361px] top-[185px] w-[1247px] text-[150px] font-normal uppercase leading-none text-[#38312A] tracking-[-0.02em]">
            {titleBottom}
          </h2>

          <div className="absolute right-0 top-[49px] flex w-[557px] flex-col items-end">
            <p className="text-right text-[18px] font-normal uppercase leading-snug text-[#38312A]">
              Ми створили формат партнерства, в якому
            </p>
            <p className="text-right text-[18px] font-normal uppercase leading-snug text-[#38312A]">
              дизайнеру легко працювати й впевнено рекомендувати продукт клієнту: прозорі умови, технічні матеріали та підтримка на кожному етапі.
            </p>
          </div>

          <a
            href={buttonHref}
            className="absolute left-0 top-[255px] inline-flex h-[45px] items-center justify-center rounded-full bg-[#B99B6E] px-[28px] py-[14px] text-[14px] font-normal uppercase text-white transition hover:bg-[#a68a5f]"
          >
            {buttonText}
          </a>

          {/* Large Image container matching 1728px design (4/5 ratio visible area) */}
          <div className="absolute right-0 top-[410px] w-full h-[509px] overflow-hidden rounded-[30px] bg-[#f6f3ef]">
            <img
              src="/vossa-pages/77dfd0d981614ab3e3f5632d259ad40b160e8fda.png"
              alt="Partnership"
              className="w-full object-cover object-center"
              style={{ height: "2159px", marginTop: "-1057px" }}
            />
          </div>
        </div>

        {/* Mobile/Tablet Layout fallback */}
        <div className="xl:hidden flex flex-col gap-6">
          <div>
            <h2 className="text-[54px] font-normal uppercase leading-[0.88] text-[#38312A] sm:text-[78px] md:text-[96px]">
              {titleTop}
            </h2>
            <h2 className="text-[54px] font-normal uppercase leading-[0.88] text-[#38312A] sm:text-[78px] md:text-[96px]">
              {titleBottom}
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] font-normal uppercase leading-[1.4] text-[#38312A] sm:text-[16px]">
            {description}
          </p>

          <a
            href={buttonHref}
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#B99B6E] px-[24px] py-[14px] text-[12px] font-normal uppercase text-white sm:text-[14px]"
          >
            {buttonText}
          </a>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#f6f3ef]">
            <img
              src="/vossa-pages/b3ce17ee4bacc7fde14022a5fb59e0b20efe7432.jpg"
              alt="Partnership"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignerPartnershipHero;
