import { footerGroups } from "./data";
import { VossaLogo } from "./shared/VossaLogo";

export function FooterSection() {
  return (
    <footer className="mx-auto max-w-[1728px]">
      <div className="border-t border-[#38312a]/20 px-4 py-8 sm:px-8 xl:px-[60px] xl:py-[30px]">
        <div className="grid gap-10 xl:grid-cols-[1fr_1fr_1fr_1fr_auto] xl:items-start">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="font-display text-[18px] uppercase">{group.title}</p>
              <div className="mt-[15px] flex flex-col gap-[10px] text-[16px] leading-[1.45]">
                {group.links.map((link) => (
                  <span
                    key={link}
                    className="w-fit border-b border-[#38312a]/20 pb-[5px]"
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="font-display text-[18px] uppercase">Контакти</p>
            <div className="mt-[15px] flex items-center gap-[15px] text-[14px] uppercase tracking-[0.08em]">
              <span>IG</span>
              <span>FB</span>
              <span>YT</span>
              <span>TT</span>
            </div>
          </div>

          <div className="xl:justify-self-end">
            <button
              className="rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase tracking-[0.04em] text-white transition hover:brightness-105"
              type="button"
            >
              Зв’язатись з нами
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#38312a]/20 px-4 py-8 sm:px-8 xl:px-[60px] xl:py-[30px]">
        <div className="flex flex-col items-center gap-5">
          <VossaLogo dark width={360} height={82} />
          <p className="text-center text-[16px] leading-[1.45]">
            © 2026 Vossa. Всі права захищено
          </p>
        </div>
      </div>
    </footer>
  );
}