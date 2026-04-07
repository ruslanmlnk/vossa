import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Хлібні крихти"
      className="border-b border-[#38312a]/10 px-4 py-4 sm:px-8 xl:px-[60px]"
    >
      <ol className="mx-auto flex max-w-[1728px] flex-wrap items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-[#38312a]/55 sm:text-[14px]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            {item.href ? (
              <Link className="transition hover:text-[#38312a]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-[#38312a]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
