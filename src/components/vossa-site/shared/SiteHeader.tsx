"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { VossaLogo } from "@/components/vossa/shared/VossaLogo";

import { siteNavLinks } from "../data";
import { ButtonLink, cn } from "./Buttons";

function isActivePath(
  pathname: string,
  href: string,
  matchStartsWith: boolean | undefined
) {
  if (href === "/") {
    return pathname === "/";
  }

  return matchStartsWith ? pathname.startsWith(href) : pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#38312a]/10 bg-[#f6f3ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-4 py-4 sm:px-8 xl:h-[98px] xl:px-[60px] xl:py-0">
        <Link href="/" aria-label="VOSSA" className="shrink-0">
          <VossaLogo dark width={135} height={48} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {siteNavLinks.map((item) => {
            const active = isActivePath(pathname, item.href, item.matchStartsWith);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "border-b pb-1 text-[14px] uppercase tracking-[0.12em] transition",
                  active
                    ? "border-[#38312a] text-[#38312a]"
                    : "border-transparent text-[#38312a]/72 hover:border-[#38312a]/20 hover:text-[#38312a]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <ButtonLink href="/contact" className="px-6">
            Зв’язатись з нами
          </ButtonLink>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#38312a]/12 bg-white/70 xl:hidden"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-[#38312a]" />
            <span className="h-px w-5 bg-[#38312a]" />
            <span className="h-px w-5 bg-[#38312a]" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#38312a]/10 px-4 py-5 sm:px-8 xl:hidden">
          <div className="mx-auto flex max-w-[1728px] flex-col gap-4">
            {siteNavLinks.map((item) => {
              const active = isActivePath(pathname, item.href, item.matchStartsWith);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-[13px] uppercase tracking-[0.12em] transition",
                    active
                      ? "border-[#b99b6e] bg-white text-[#38312a]"
                      : "border-[#38312a]/12 bg-white/70 text-[#38312a]/75"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <ButtonLink href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              Зв’язатись з нами
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
