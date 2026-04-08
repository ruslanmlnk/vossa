import Image from "next/image";
import { works } from "./data";
import { CircleArrow } from "./shared/CircleArrow";
import { SliderArrow } from "./shared/SliderArrow";

export function DesignersSection() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 sm:px-8 xl:px-0">
      <h2 className="font-display text-center text-[34px] uppercase xl:text-[40px]">
        Роботи дизайнерів
      </h2>

      <div className="mt-10 grid gap-8 xl:mt-[89px] xl:grid-cols-3 xl:px-[60px]">
        {works.map((item) => (
          <article key={item.image} className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-[30px] xl:h-[558px]">
              <Image
                src={item.image}
                alt="Проєкт дизайнера"
                fill
                sizes="(min-width: 1280px) 516px, 100vw"
                className="object-cover"
              />

              {item.tag ? (
                <div className="absolute left-[17px] top-[423px]">
                  <div className="rounded-full border border-[#dbd7d1] px-3 py-1 text-[14px] uppercase text-white">
                    {item.tag}
                  </div>
                  <div className="mx-auto mt-px h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#dbd7d1]" />
                </div>
              ) : null}

              <div className="absolute left-[30px] top-[466px] overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt="Аватар дизайнера"
                  width={62}
                  height={62}
                  className="h-[62px] w-[62px] object-cover"
                />
              </div>

              <div className="absolute right-[30px] top-[30px]">
                <CircleArrow size={54} dark />
              </div>
            </div>

            <div className="w-[165px]">
              <p className="text-[14px] text-[#38312a]/60">Дизайн виконали:</p>
              <p className="font-display mt-[10px] text-[25px] uppercase leading-none">
                {item.author}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-6 xl:mt-[40px] xl:px-[60px]">
        <SliderArrow direction="left" />
        <div className="flex items-center gap-[30px] rounded-full bg-white px-[30px] py-[20px]">
          {[1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-[5px] w-[5px] rounded-full ${
                dot === 1 ? "bg-[#38312a]" : "bg-[#38312a]/20"
              }`}
            />
          ))}
        </div>
        <SliderArrow direction="right" />
      </div>
    </section>
  );
}