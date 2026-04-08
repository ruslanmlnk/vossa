import Image from "next/image";

export function AboutStorySection() {
  return (
    <section className="px-4 py-10 sm:px-8 xl:px-[60px] xl:py-14">
      <div className="mx-auto grid max-w-[1728px] gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
        <div>
          <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
            voice of your space
          </p>
          <h2 className="mt-4 text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[64px]">
            Наша історія
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.55] text-[#38312a]/74">
            <p>
              Ми створили VOSSA, коли зрозуміли: у виборі меблів бракує
              простоти та чесного відчуття «це точно моє». Хотілося бренду,
              який говорить мовою спокійної впевненості — без зайвого декору,
              але з безкомпромісною якістю.
            </p>
            <p>
              Ми почали з бази інтер&apos;єру — ліжок і диванів — і зробили акцент
              на тому, що визначає рівень: пропорції, посадка, матеріали,
              стики й шви. Так сформувався стиль VOSSA: стриманий, але
              виразний.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px]">
          <div className="relative aspect-[1578/840]">
            <Image
              src="/vossa-pages/188ba625fe3c657cff7d52d33b6fe7e09a7c0f9e.jpg"
              alt="Команда VOSSA"
              fill
              sizes="(min-width: 1280px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}