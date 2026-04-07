"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { VossaLogo } from "@/components/vossa/shared/VossaLogo";

import { siteNavLinks } from "./data";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !isOpen;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-all duration-300",
        isHome ? "fixed" : "sticky",
        transparent
          ? "bg-transparent border-b border-white/20"
          : "border-b border-[#38312a]/10 bg-[#f6f3ef]/92 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-4 py-4 sm:px-8 xl:h-[98px] xl:px-[60px] xl:py-0">
        <Link href="/" aria-label="VOSSA" className="shrink-0 transition-opacity">
          <VossaLogo dark={!transparent} width={135} height={48} />
        </Link>

        <nav className="hidden items-center gap-[30px] xl:flex">
          {siteNavLinks.map((item) => {
            const active = isActivePath(pathname, item.href, item.matchStartsWith);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-[7px] py-[39px] text-[16px] uppercase transition",
                  active ? "font-medium" : "font-light",
                  transparent
                    ? "!text-white"
                    : active
                    ? "text-[#38312a]"
                    : "text-[#38312a]/72 hover:text-[#38312a]"
                )}
              >
                <span>{item.label}</span>
                {item.hasChevron && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 3"
                    width="6"
                    height="3"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M0 0L3 3L6 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-[28px] py-[14px] text-[14px] uppercase transition",
              "bg-[#B99B6E] !text-white hover:bg-[#a68a5f]"
            )}
          >
            Зв’язатись з нами
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border transition xl:hidden",
            transparent 
               ? "border-white/20 bg-black/20 text-white" 
               : "border-[#38312a]/12 bg-white/70 text-[#38312a]"
          )}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn("h-px w-5 transition-colors", transparent ? "bg-white" : "bg-[#38312a]")} />
            <span className={cn("h-px w-5 transition-colors", transparent ? "bg-white" : "bg-[#38312a]")} />
            <span className={cn("h-px w-5 transition-colors", transparent ? "bg-white" : "bg-[#38312a]")} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#38312a]/10 px-4 py-5 sm:px-8 xl:hidden bg-[#f6f3ef]/95 backdrop-blur-xl absolute w-full left-0">
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
      )}
    </header>
  );
}
