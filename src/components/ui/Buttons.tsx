import Link from "next/link";

type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

export const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#b99b6e] px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition duration-200 hover:brightness-105";

export const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[#38312a]/16 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#38312a] transition duration-200 hover:border-[#38312a]/28 hover:bg-white/70";

export const softTagClass =
  "inline-flex items-center justify-center rounded-full border border-[#38312a]/12 bg-white px-5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#38312a]/80";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  secondary = false,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        secondary ? secondaryButtonClass : primaryButtonClass,
        className
      )}
    >
      {children}
    </Link>
  );
}
