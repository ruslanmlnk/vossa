import Link from "next/link";

import { VossaLogo } from "@/components/vossa/shared/VossaLogo";

import { footerGroups, socialLinks } from "./data";
import { ButtonLink } from "./Buttons";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#38312a]/12">
      <div className="mx-auto max-w-[1728px] px-4 py-8 sm:px-8 xl:px-[60px] xl:py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-start">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[16px] font-medium uppercase tracking-[0.12em] text-[#181818]">
                {group.title}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-[15px] text-[#181818]/78">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit border-b border-[#38312a]/12 pb-1 transition hover:border-[#38312a]/35 hover:text-[#181818]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-6 lg:items-end">
            <div>
              <p className="text-[16px] font-medium uppercase tracking-[0.12em] text-[#181818]">
                Контакти
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-[13px] uppercase tracking-[0.14em] text-[#181818]/72">
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="transition hover:text-[#181818]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <ButtonLink href="/contact">Зв’язатись з нами</ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-[#38312a]/12">
        <div className="mx-auto flex max-w-[1728px] flex-col items-center gap-4 px-4 py-8 text-center sm:px-8 xl:px-[60px] xl:py-10">
          <VossaLogo dark width={360} height={82} />
          <p className="text-[15px] text-[#181818]/75">
            © 2026 Vossa. Всі права захищено
          </p>
        </div>
      </div>
    </footer>
  );
}
