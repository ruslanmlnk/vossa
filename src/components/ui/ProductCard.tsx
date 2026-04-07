import Image from "next/image";
import Link from "next/link";

import type { CatalogProduct } from "./data";
import { getProductHref } from "./data";
import { cn } from "./Buttons";

type ProductCardProps = {
  product: CatalogProduct;
  className?: string;
};

const paletteDots = ["#A79D91", "#CBC7C2", "#337664", "#42403F", "#385F8A", "#745229"];

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={getProductHref(product)}
      className={cn(
        "group flex h-full flex-col gap-5 rounded-[24px] bg-white p-5 shadow-[0_12px_40px_rgba(56,49,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(56,49,42,0.10)]",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#f0ece7]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 478px, (min-width: 768px) 40vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {product.accent ? (
          <span className="absolute left-5 top-5 rounded-full border border-[#dbd7d1] bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#38312a] backdrop-blur-sm">
            {product.accent}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-5 px-3 pb-2">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <p className="text-[12px] uppercase tracking-[0.12em] text-[#38312a]/45">
              {product.categoryLabel}
            </p>
            <h3 className="mt-2 text-[22px] uppercase leading-none text-[#38312a]">
              {product.name}
            </h3>
          </div>

          <div className="text-right">
            {product.oldPrice ? (
              <p className="text-[14px] text-[#38312a]/40 line-through">
                {product.oldPrice}
              </p>
            ) : null}
            <p className="text-[13px] uppercase tracking-[0.12em] text-[#38312a]/45">
              від
            </p>
            <p className="text-[18px] uppercase text-[#38312a]">{product.price}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {paletteDots.map((color) => (
            <span
              key={`${product.slug}-${color}`}
              className="h-3.5 w-3.5 rounded-full border border-[#38312a]/12"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-[#38312a]/16 text-[10px] text-[#38312a]/55">
            +
          </span>
        </div>
      </div>
    </Link>
  );
}
