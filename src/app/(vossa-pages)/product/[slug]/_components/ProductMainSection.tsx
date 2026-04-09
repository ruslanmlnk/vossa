"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { cn } from "@/components/ui/Buttons";
import { ScaledArtboard } from "@/components/ui/ScaledArtboard";
import { type ProductDetail } from "@/components/ui/data";

function GlassCircleButton({
  children,
  className,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/[0.06] backdrop-blur-[18px] backdrop-saturate-150 transition hover:bg-white/[0.09]",
        className
      )}
    >
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))]" />
      <span className="absolute inset-[1px] rounded-full border border-white/18" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function GlassPillButton({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "relative inline-flex items-center gap-[10px] overflow-hidden rounded-full border border-white/60 bg-white/[0.05] px-[15px] py-[10px] text-[18px] font-light text-[#38312a] backdrop-blur-[18px] backdrop-saturate-150",
        className
      )}
    >
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.06))]" />
      <span className="absolute inset-[1px] rounded-full border border-white/16" />
      <span className="relative z-10 inline-flex items-center gap-[10px]">{children}</span>
    </button>
  );
}

function PlusIcon({
  stroke,
  small = false,
}: {
  stroke: string;
  small?: boolean;
}) {
  return small ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 9H9M14.5 9H9M9 9V3.5M9 9V14.5"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 12H12M17 12H12M12 12V7M12 12V17" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function CarouselArrowButton({
  direction,
  muted = false,
  onClick,
}: {
  direction: "prev" | "next";
  muted?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "grid h-[45px] w-[45px] place-items-center rounded-full bg-white transition",
        muted ? "opacity-40" : "opacity-100 hover:brightness-95"
      )}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "prev" ? (
          <path d="M15 7.5H0M0 7.5L7.5 0M0 7.5L7.5 15" stroke="#38312A" />
        ) : (
          <path d="M0 7.5H15M15 7.5L7.5 0M15 7.5L7.5 15" stroke="#38312A" />
        )}
      </svg>
    </button>
  );
}

function DesktopGalleryImageStack({
  images,
  visibleIndex,
  altBase,
  sizes,
}: {
  images: string[];
  visibleIndex: number;
  altBase: string;
  sizes: string;
}) {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-out",
            index === visibleIndex ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <Image
            src={image}
            alt={index === visibleIndex ? altBase : `${altBase} ${index + 1}`}
            fill
            priority={index === 0}
            sizes={sizes}
            className="object-cover"
          />
        </div>
      ))}
    </>
  );
}

function ProductMainDesktop({
  product,
  activeGalleryIndex,
  setActiveGalleryIndex,
  activeSize,
  setActiveSize,
}: {
  product: ProductDetail;
  activeGalleryIndex: number;
  setActiveGalleryIndex: Dispatch<SetStateAction<number>>;
  activeSize: string;
  setActiveSize: Dispatch<SetStateAction<string>>;
}) {
  const galleryIndicators = Array.from({ length: 5 }, (_, index) => index);
  const galleryLength = Math.max(product.gallery.length, 1);
  const nextIndex = activeGalleryIndex === galleryLength - 1 ? 0 : activeGalleryIndex + 1;
  const canSlide = galleryLength > 1;

  const goPrev = () => {
    if (!canSlide) {
      return;
    }

    setActiveGalleryIndex((value) => (value === 0 ? galleryLength - 1 : value - 1));
  };

  const goNext = () => {
    if (!canSlide) {
      return;
    }

    setActiveGalleryIndex((value) => (value === galleryLength - 1 ? 0 : value + 1));
  };

  return (
    <div className="relative h-[1140px] w-[1608px] text-[#38312a]">
      <div className="absolute left-0 top-0 h-[879px] w-[1062px]">
        <div className="absolute left-0 top-[40px] h-[764px] w-[1062px] overflow-hidden rounded-[30px]">
          <div className="absolute left-0 top-0 h-[764px] w-[764px] overflow-hidden rounded-[30px] bg-[#efebe5]">
            <DesktopGalleryImageStack
              images={product.gallery}
              visibleIndex={activeGalleryIndex}
              altBase={product.name}
              sizes="764px"
            />

            <GlassPillButton
              className="absolute left-[30px] top-[30px] z-20 h-[44px] w-[210px]"
              ariaLabel="Переглянути в AR"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60"
              >
                <path
                  d="M12 3.30469L11.6953 3.44531L4.19531 6.82031L3.75 7.00781V16.5234L4.125 16.7344L11.625 20.9062L12 21.1172L12.375 20.9062L19.875 16.7344L20.25 16.5234V7.00781L19.8047 6.82031L12.3047 3.44531L12 3.30469ZM12 4.94531L17.7656 7.52344L12 10.4062L6.23438 7.52344L12 4.94531ZM5.25 8.71875L11.25 11.7188V18.9609L5.25 15.6328V8.71875ZM18.75 8.71875V15.6328L12.75 18.9609V11.7188L18.75 8.71875Z"
                  fill="#38312A"
                />
              </svg>
              Переглянути в AR
            </GlassPillButton>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute left-[776px] top-0 h-[764px] w-[611px] overflow-hidden rounded-[30px]"
            aria-label="Наступне зображення"
          >
            <DesktopGalleryImageStack
              images={product.gallery}
              visibleIndex={nextIndex}
              altBase={`${product.name} preview`}
              sizes="611px"
            />
          </button>
        </div>

        <GlassCircleButton
          className="absolute left-[30px] top-[714px] z-20 h-[60px] w-[60px]"
          onClick={goPrev}
          ariaLabel="Попереднє зображення"
        >
          <PlusIcon stroke="#38312A" />
        </GlassCircleButton>

        <GlassCircleButton
          className="absolute left-[806px] top-[714px] z-20 h-[60px] w-[60px]"
          onClick={goNext}
          ariaLabel="Наступне зображення"
        >
          <PlusIcon stroke="#FFFFFF" />
        </GlassCircleButton>

        <div className="absolute left-0 top-[834px] flex h-[45px] w-[1062px] items-center justify-between">
          <CarouselArrowButton direction="prev" muted={!canSlide} onClick={goPrev} />

          <div className="flex h-[45px] w-[205px] items-center justify-center gap-[30px] rounded-full bg-white px-[30px]">
            {galleryIndicators.map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (index < galleryLength) {
                    setActiveGalleryIndex(index);
                  }
                }}
                className={cn(
                  "h-[5px] w-[5px] rounded-full transition",
                  index === activeGalleryIndex ? "bg-[#38312a]" : "bg-[#38312a]/20"
                )}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>

          <CarouselArrowButton direction="next" muted={!canSlide} onClick={goNext} />
        </div>
      </div>

      <div className="absolute left-[1092px] top-0 flex h-[1140px] w-[516px] flex-col gap-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[18px] uppercase text-[#38312a]/50">{product.collectionLabel}</p>
            <h1 className="text-[40px] uppercase leading-none text-[#38312a]">
              {product.name}
            </h1>
          </div>

          <div className="flex items-end gap-[7px]">
            <span className="text-[16px] text-[#38312a]/40">від</span>
            <span className="text-[20px] uppercase text-[#38312a]">{product.price}</span>
          </div>
        </div>

        <p className="w-[516px] text-[18px] font-light leading-normal text-[#38312a]">
          {product.summary}
        </p>

        <h2 className="w-[516px] text-[20px] font-medium uppercase text-[#38312a]">
          Обрати опції дивану
        </h2>

        <div className="flex flex-col gap-[15px]">
          <p className="text-[18px] font-medium uppercase text-[#38312a]">Оберіть розмір</p>

          <div className="flex items-center gap-[10px]">
            <span className="text-[18px] font-light text-[#38312a]/60">
              Конфігурація дивану:
            </span>
            <span className="text-[18px] font-medium text-[#38312a]">{activeSize}</span>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-wrap gap-[10px]">
              {product.sizes.slice(0, 3).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setActiveSize(size)}
                  className={cn(
                    "rounded-full border px-5 py-[10px] text-[18px] transition",
                    activeSize === size
                      ? "border-[#b99b6e] font-semibold text-[#b99b6e]"
                      : "border-[#38312a]/20 font-light text-[#38312a]/60"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>

            {product.sizes[3] ? (
              <button
                type="button"
                onClick={() => setActiveSize(product.sizes[3])}
                className={cn(
                  "w-fit rounded-full border px-5 py-[10px] text-[18px] transition",
                  activeSize === product.sizes[3]
                    ? "border-[#b99b6e] font-semibold text-[#b99b6e]"
                    : "border-[#38312a]/20 font-light text-[#38312a]/60"
                )}
              >
                {product.sizes[3]}
              </button>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-[18px] font-medium uppercase text-[#38312a]">Оберіть тканину</p>

          <div className="flex items-center gap-[10px]">
            <span className="text-[18px] font-light text-[#38312a]/60">Тканина:</span>
            <span className="text-[18px] font-medium text-[#38312a]">{product.fabricName}</span>
          </div>

          <div className="flex flex-col gap-5 rounded-[20px] border border-[#38312a]/20 p-5">
            <div className="flex items-center gap-5">
              <div className="relative h-[150px] w-[150px]">
                <Image
                  src={product.fabricSwatch}
                  alt={product.fabricName}
                  fill
                  sizes="150px"
                  className="rounded-[15px] object-cover"
                />

                <GlassCircleButton
                  className="absolute left-[100px] top-[10px] z-20 h-10 w-10"
                  ariaLabel="Деталі тканини"
                >
                  <PlusIcon stroke="#FFFFFF" small />
                </GlassCircleButton>
              </div>

              <div className="flex flex-1 items-center justify-between gap-4">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[18px] font-light text-[#38312a]/60">Тканина (263):</p>
                  <p className="text-[20px] font-medium text-[#38312a]">{product.fabricName}</p>
                </div>

                <button
                  type="button"
                  className="grid h-[45px] w-[45px] place-items-center rounded-full bg-[#b99b6e] text-white transition hover:brightness-105"
                  aria-label="Відкрити підбір тканини"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 7.5H15M15 7.5L7.5 0M15 7.5L7.5 15" stroke="white" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-[10px]">
              <span className="relative h-[25px] w-[50px] rounded-full bg-[#e4e4e4]">
                <span className="absolute left-[3px] top-[3px] h-[19px] w-[19px] rounded-full bg-white" />
              </span>
              <span className="text-[14px] font-light text-[#38312a]/60">
                Потрібна консультація по тканині
              </span>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-full border border-[#38312a]/30 px-7 py-[14px] text-[14px] uppercase text-[#38312a]"
            >
              <span>Отримати взірці тканини</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5H5M10 5H5M5 5V0M5 5V10" stroke="#38312A" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex w-[516px] flex-col items-center gap-[15px]">
          <div className="flex w-full items-center justify-between">
            <p className="text-[30px] uppercase text-[#38312a]">
              {product.oldPrice ?? product.price}
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase text-white transition hover:brightness-105"
            >
              Замовити в 1 клік
            </button>
          </div>

          <div className="border-b border-[#38312a]/10 pb-[3px] text-[16px] font-light text-[#38312a]/60">
            Оформити безвідсоткове розтермінування до 4 платежів
          </div>
        </div>

        <div className="flex w-[516px] flex-col items-center gap-[15px] rounded-[20px] bg-white p-5">
          <p className="w-full text-center text-[18px] font-medium text-[#38312a]">
            Не знаєте що вибрати, або потрібна допомога?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#b99b6e] px-7 py-[14px] text-[14px] uppercase text-white transition hover:brightness-105"
          >
            Отримати консультацію
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductMainSection({ product }: { product: ProductDetail }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(product.activeSize);

  const galleryLength = product.gallery.length || 1;
  const activeImage = product.gallery[activeGalleryIndex] ?? product.gallery[0];
  const secondaryImage =
    product.gallery[(activeGalleryIndex + 1) % galleryLength] ?? product.gallery[0];

  return (
    <section className="px-4 pt-10 pb-14 sm:px-8 xl:px-10 xl:pt-[38px] xl:pb-[86px] min-[1728px]:px-[60px]">
      <div className="mx-auto max-w-[1608px] xl:hidden">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[14px] uppercase tracking-[0.14em] text-[#38312a]/50">
              {product.collectionLabel}
            </p>
            <h1 className="text-[40px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px]">
              {product.name}
            </h1>
            <div className="flex items-end gap-2">
              <span className="text-[14px] text-[#38312a]/40">від</span>
              <span className="text-[20px] uppercase text-[#38312a]">{product.price}</span>
            </div>
            <p className="max-w-[640px] text-[18px] font-light leading-[1.45] text-[#38312a]">
              {product.summary}
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-[30px] bg-[#ece6df]">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[1.2/1] overflow-hidden rounded-[30px] bg-[#ece6df]">
              <Image
                src={secondaryImage}
                alt={`${product.name} secondary`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <CarouselArrowButton
                direction="prev"
                muted={galleryLength <= 1}
                onClick={() => {
                  if (galleryLength <= 1) {
                    return;
                  }

                  setActiveGalleryIndex((value) =>
                    value === 0 ? galleryLength - 1 : value - 1
                  );
                }}
              />

              <div className="flex h-[45px] items-center gap-[30px] rounded-full bg-white px-[30px]">
                {Array.from({ length: galleryLength }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveGalleryIndex(index)}
                    className={cn(
                      "h-[5px] w-[5px] rounded-full transition",
                      index === activeGalleryIndex ? "bg-[#38312a]" : "bg-[#38312a]/20"
                    )}
                    aria-label={`Слайд ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselArrowButton
                direction="next"
                muted={galleryLength <= 1}
                onClick={() => {
                  if (galleryLength <= 1) {
                    return;
                  }

                  setActiveGalleryIndex((value) =>
                    value === galleryLength - 1 ? 0 : value + 1
                  );
                }}
              />
            </div>
          </div>

          <div className="space-y-6 rounded-[24px] bg-white p-5">
            <div className="space-y-4">
              <h2 className="text-[20px] uppercase text-[#38312a]">Обрати опції дивану</h2>

              <div className="space-y-3">
                <p className="text-[18px] font-medium uppercase text-[#38312a]">
                  Оберіть розмір
                </p>
                <div className="flex items-center gap-[10px] text-[16px]">
                  <span className="text-[#38312a]/60">Конфігурація дивану:</span>
                  <span className="font-medium text-[#38312a]">{activeSize}</span>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setActiveSize(size)}
                      className={cn(
                        "rounded-full border px-5 py-[10px] text-[16px] transition",
                        activeSize === size
                          ? "border-[#b99b6e] font-semibold text-[#b99b6e]"
                          : "border-[#38312a]/20 font-light text-[#38312a]/60"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[18px] font-medium uppercase text-[#38312a]">
                  Оберіть тканину
                </p>
                <div className="rounded-[20px] border border-[#38312a]/20 p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-[15px]">
                      <Image
                        src={product.fabricSwatch}
                        alt={product.fabricName}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] text-[#38312a]/60">Тканина</p>
                      <p className="mt-1 text-[18px] text-[#38312a]">{product.fabricName}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-between rounded-full border border-[#38312a]/30 px-6 py-[14px] text-[13px] uppercase text-[#38312a]"
                  >
                    <span>Отримати взірці тканини</span>
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[24px] uppercase text-[#38312a]">
                  {product.oldPrice ?? product.price}
                </p>
                <button
                  type="button"
                  className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#b99b6e] px-6 text-[13px] uppercase text-white"
                >
                  Замовити в 1 клік
                </button>
              </div>

              <p className="border-b border-[#38312a]/10 pb-1 text-[14px] text-[#38312a]/60">
                Оформити безвідсоткове розтермінування до 4 платежів
              </p>

              <div className="rounded-[20px] bg-[#f6f3ef] p-5 text-center">
                <p className="text-[16px] font-medium text-[#38312a]">
                  Не знаєте що вибрати, або потрібна допомога?
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-[45px] items-center justify-center rounded-full bg-[#b99b6e] px-6 text-[13px] uppercase text-white"
                >
                  Отримати консультацію
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1608px] xl:block min-[1728px]:hidden">
        <ScaledArtboard baseWidth={1608} baseHeight={1140}>
          <ProductMainDesktop
            product={product}
            activeGalleryIndex={activeGalleryIndex}
            setActiveGalleryIndex={setActiveGalleryIndex}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </ScaledArtboard>
      </div>

      <div className="mx-auto hidden max-w-[1608px] min-[1728px]:block">
        <ProductMainDesktop
          product={product}
          activeGalleryIndex={activeGalleryIndex}
          setActiveGalleryIndex={setActiveGalleryIndex}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
      </div>
    </section>
  );
}
