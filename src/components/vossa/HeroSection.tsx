"use client";

import Image from "next/image";
import { useState } from "react";

const bodyFont = "'Peridot PE Variable', var(--font-manrope), sans-serif";
const titleFont = "var(--font-gravhez), var(--font-forum), serif";
const cqw = (value: number) => `${(value / 1728) * 100}cqw`;

const navItems = [
  { label: "Каталог", active: true, hasChevron: true, width: 83 },
  { label: "Дизайнерам" },
  { label: "Покупцям", hasChevron: true },
  { label: "Про Vossa" },
  { label: "Проекти дизайнерів" },
  { label: "Контакти" },
];

const heroCopy = {
  eyebrow: "Коли інтер’єр говорить - він говорить",
  title: "VOSSA",
  descriptionLineOne: "Меблі, що не просто пасують інтер’єру, вони",
  descriptionLineTwo:
    "задають тон. Стриманий дизайн, бездоганна якість і впевнений характер.",
  primaryAction: "Перейти в каталог",
  secondaryAction: "Перейти на портал дизайнера",
  contactAction: "Зв’язатись з нами",
  cardCaption: "Міцність · Легкий догляд",
  cardTitle: "Тактильна преміальна текстура",
  cardDescription:
    "Стійка до щоденного використання, приємна на дотик і виглядає “дорого” при будь-якому світлі.",
};

const markers = [
  { left: 1204, top: 705 },
  { left: 535, top: 770 },
  { left: 874, top: 685 },
];

function MenuChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 6 3"
      width="6"
      height="3"
      style={{ width: cqw(6), height: cqw(3) }}
    >
      <path d="M0 0L3 3L6 0" fill="none" stroke="white" strokeWidth="1" />
    </svg>
  );
}

function Dot() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      style={{ width: cqw(12), height: cqw(12) }}
    >
      <circle cx="6" cy="6" r="5.5" fill="none" stroke="white" />
      <circle cx="6" cy="6" r="4" fill="white" />
    </svg>
  );
}

export function HeroSection() {
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const activeMarker = markers[activeMarkerIndex] ?? markers[0];
  const cardWidth = 339;
  const cardOffsetX = 164;
  const cardOffsetY = 90;
  const sceneWidth = 1728;
  const cardLeft = Math.min(
    Math.max(activeMarker.left - cardOffsetX, 20),
    sceneWidth - cardWidth - 20
  );
  const cardTop = activeMarker.top + cardOffsetY;
  const connectorLeft = activeMarker.left + 6;
  const connectorTop = activeMarker.top + 12;
  const cursorLeft = activeMarker.left + 8;
  const cursorTop = activeMarker.top + 11;

  return (
    <section className="w-full overflow-hidden bg-[#120f0d] text-white">
      <div className="relative hidden aspect-[1728/1117] w-full overflow-hidden [container-type:inline-size] lg:block">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/vossa/hero-scene-base.png"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

        <div
          className="absolute inset-0"
          onMouseLeave={() => setActiveMarkerIndex(0)}
        >
          <div
            className="absolute"
            style={{
              left: cqw(61),
              top: cqw(258),
              width: cqw(819),
              height: cqw(405),
            }}
          >
            <div
              style={{
                color: "#fff",
                fontFamily: bodyFont,
                fontSize: cqw(35),
                fontWeight: 500,
                lineHeight: "normal",
                whiteSpace: "nowrap",
              }}
            >
              {heroCopy.eyebrow}
            </div>
            <div
              id="vossa-hero-title"
              style={{
                color: "#F6F3EF",
                fontFamily: titleFont,
                fontSize: cqw(250),
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {heroCopy.title}
            </div>
          </div>

          <Image
            alt=""
            aria-hidden="true"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1728px) 100vw, 1728px"
            src="/vossa/hero-sofa-foreground.png"
          />



          <div
            className="absolute flex flex-col items-start"
            style={{
              left: cqw(1173),
              top: cqw(357),
              width: cqw(495),
              gap: cqw(30),
              height: cqw(150),
              fontFamily: bodyFont,
            }}
          >
            <div className="w-full">
              <div
                style={{
                  width: cqw(495),
                  color: "#fff",
                  textAlign: "right",
                  fontSize: cqw(20),
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {heroCopy.descriptionLineOne}
              </div>
              <div
                style={{
                  width: cqw(495),
                  color: "#fff",
                  fontSize: cqw(20),
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {heroCopy.descriptionLineTwo}
              </div>
            </div>

            <div
              className="flex w-full items-center justify-between"
              style={{ fontFamily: bodyFont }}
            >
              <button
                className="rounded-full bg-[#B99B6E] text-white uppercase"
                style={{
                  padding: `${cqw(14)} ${cqw(28)}`,
                  borderRadius: cqw(100),
                  fontSize: cqw(14),
                  fontWeight: 400,
                  lineHeight: "normal",
                  whiteSpace: "nowrap",
                }}
                type="button"
              >
                {heroCopy.primaryAction}
              </button>
              <button
                className="border border-white/30 text-white uppercase"
                style={{
                  padding: `${cqw(14)} ${cqw(28)}`,
                  borderRadius: cqw(100),
                  fontSize: cqw(14),
                  fontWeight: 400,
                  lineHeight: "normal",
                  whiteSpace: "nowrap",
                }}
                type="button"
              >
                {heroCopy.secondaryAction}
              </button>
            </div>
          </div>

          <div
            className="absolute flex flex-col justify-center"
            style={{
              left: cqw(cardLeft),
              top: cqw(cardTop),
              width: cqw(339),
              height: cqw(141),
              gap: cqw(10),
              transition:
                "left 180ms ease, top 180ms ease, opacity 180ms ease",
              padding: cqw(20),
              borderRadius: cqw(8),
              border: `${cqw(1)} solid #71655C`,
              background: "rgba(0, 0, 0, 0)",
              fontFamily: bodyFont,
            }}
          >
            <div className="flex flex-col" style={{ gap: cqw(5) }}>
              <div
                style={{
                  color: "#DED2C0",
                  fontSize: cqw(12),
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
              >
                {heroCopy.cardCaption}
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: cqw(16),
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                {heroCopy.cardTitle}
              </div>
            </div>
            <div
              style={{
                color: "#fff",
                fontSize: cqw(14),
                fontWeight: 300,
                lineHeight: "normal",
              }}
            >
              {heroCopy.cardDescription}
            </div>
          </div>

          {markers.map((marker, index) => {
            const isActive = index === activeMarkerIndex;

            return (
              <button
                key={`${marker.left}-${marker.top}`}
                aria-label={`Показати інформацію ${index + 1}`}
                className="absolute cursor-pointer appearance-none border-0 bg-transparent p-0"
                onFocus={() => setActiveMarkerIndex(index)}
                onMouseEnter={() => setActiveMarkerIndex(index)}
                style={{
                  left: cqw(marker.left),
                  top: cqw(marker.top),
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                  transition: "transform 180ms ease, opacity 180ms ease",
                }}
                type="button"
              >
                <Dot />
              </button>
            );
          })}

          <div
            className="absolute bg-white/20"
            style={{
              left: cqw(connectorLeft),
              top: cqw(connectorTop),
              width: cqw(1),
              height: cqw(78),
              transition:
                "left 180ms ease, top 180ms ease, opacity 180ms ease",
            }}
          />

          <Image
            alt=""
            aria-hidden="true"
            height={16}
            src="/vossa/hero-cursor-marker.png"
            style={{
              position: "absolute",
              left: cqw(cursorLeft),
              top: cqw(cursorTop),
              width: cqw(16),
              height: cqw(16),
              transition:
                "left 180ms ease, top 180ms ease, opacity 180ms ease",
            }}
            width={16}
          />
        </div>
      </div>

      <div className="relative min-h-[760px] overflow-hidden lg:hidden">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[68%_center]"
          fill
          priority
          sizes="100vw"
          src="/vossa/hero-scene-base.png"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[68%_center]"
          fill
          sizes="100vw"
          src="/vossa/hero-sofa-foreground.png"
        />

        <div className="relative z-10 flex min-h-[760px] flex-col px-[14.5px] pb-8 pt-[14.5px]">


          <div className="mt-12 max-w-[355px]">
            <p
              className="max-w-[18rem] text-[clamp(17px,5vw,24px)] text-white"
              style={{ fontFamily: bodyFont, lineHeight: "1.06" }}
            >
              {heroCopy.eyebrow}
            </p>
            <h1
              className="mt-2 text-[clamp(72px,23vw,116px)] leading-[0.8] tracking-[-0.09em] text-[#F6F3EF]"
              style={{ fontFamily: titleFont }}
            >
              {heroCopy.title}
            </h1>
          </div>

          <div className="mt-auto max-w-[360px]" style={{ fontFamily: bodyFont }}>
            <p className="text-[17px] text-white" style={{ lineHeight: "1.14" }}>
              {heroCopy.descriptionLineOne} {heroCopy.descriptionLineTwo}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                className="rounded-full bg-[#B99B6E] px-5 py-3 text-[12px] uppercase text-white"
                style={{ lineHeight: "normal" }}
                type="button"
              >
                {heroCopy.primaryAction}
              </button>
              <button
                className="rounded-full border border-white/28 px-5 py-3 text-[12px] uppercase text-white"
                style={{ lineHeight: "normal" }}
                type="button"
              >
                {heroCopy.secondaryAction}
              </button>
            </div>

            <div className="mt-6 rounded-[8px] border border-[#71655C] bg-black/10 p-5 backdrop-blur-[2px]">
              <p className="text-[12px] text-[#DED2C0]" style={{ lineHeight: "normal" }}>
                {heroCopy.cardCaption}
              </p>
              <h2 className="mt-2.5 text-[24px] text-white" style={{ lineHeight: "1.04" }}>
                {heroCopy.cardTitle}
              </h2>
              <p className="mt-3 text-[14px] text-white" style={{ lineHeight: "1.24" }}>
                {heroCopy.cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
