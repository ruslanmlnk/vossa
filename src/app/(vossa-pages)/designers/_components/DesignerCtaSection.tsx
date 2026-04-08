import Image from "next/image";

export function DesignerCtaSection() {
  return (
    <section className="px-[15px] sm:px-[30px] xl:px-[0px] py-10 xl:pt-0 xl:pb-[140px]">
      <div className="mx-auto max-w-[1728px] overflow-hidden rounded-[30px] relative h-[380px] xl:h-[558px] bg-white">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image
            src="/vossa-pages/0ce37b7b1f26bfd2c118b2db18ff23ad6339abb5.jpg"
            alt="Готові почати співпрацю"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Centered Box matched to Figma */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="flex w-full xl:w-[692px] flex-col items-center gap-[30px] rounded-[20px] border border-[#9B908D] bg-transparent p-[24px] sm:p-[40px] shadow-sm backdrop-blur-[2px]">
            <h2 className="text-center text-[28px] sm:text-[40px] font-normal uppercase leading-none text-white w-full">
              Готові почати співпрацю?
            </h2>
            <p className="text-center text-[16px] sm:text-[18px] font-normal leading-snug text-white w-full">
              Перейдіть у Telegram-бот — там швидко отримати прайс, умови, технічні матеріали та запустити підбір під ваш проєкт.
            </p>
            <a
              href="#"
              className="flex w-full min-h-[45px] items-center justify-center rounded-full bg-[#B99B6E] px-[28px] py-[14px] text-[14px] font-normal uppercase text-white transition hover:bg-[#a68a5f]"
            >
              Перейти в Telegram-бот
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}