"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { CatalogSplitSection } from "./CatalogSplitSection";
import { collectionStatement } from "./data";

const bodyFont = "'Peridot PE Variable', var(--font-manrope), sans-serif";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

function getRenderedLines(element: HTMLParagraphElement, sourceText: string) {
  const textNode = element.firstChild;

  if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
    return [sourceText];
  }

  const range = document.createRange();
  const nextLines: string[] = [];
  let currentLine = "";
  let currentTop: number | null = null;

  for (let index = 0; index < sourceText.length; index += 1) {
    const character = sourceText[index];

    range.setStart(textNode, index);
    range.setEnd(textNode, index + 1);

    const rect = range.getClientRects()[0];

    if (!rect) {
      currentLine += character;
      continue;
    }

    const lineTop = Math.round(rect.top);

    if (currentTop === null) {
      currentTop = lineTop;
    }

    if (lineTop !== currentTop) {
      nextLines.push(currentLine.trim());
      currentLine = character.trimStart();
      currentTop = lineTop;
      continue;
    }

    currentLine += character;
  }

  if (currentLine.trim()) {
    nextLines.push(currentLine.trim());
  }

  return nextLines.length > 0 ? nextLines : [sourceText];
}

export function CollectionStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<HTMLParagraphElement | null>(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const measure = measureRef.current;
    if (!measure) return;

    let frame = 0;

    const syncLines = () => {
      frame = 0;

      const nextLines = getRenderedLines(measure, collectionStatement);

      startTransition(() => {
        setLines((currentLines) =>
          currentLines.join("\n") === nextLines.join("\n")
            ? currentLines
            : nextLines
        );
      });
    };

    const queueSync = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(syncLines);
    };

    queueSync();

    const resizeObserver = new ResizeObserver(queueSync);
    resizeObserver.observe(measure);

    window.addEventListener("resize", queueSync);
    document.fonts?.ready.then(queueSync);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", queueSync);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerStart = viewportHeight * 0.88;
      const triggerEnd = viewportHeight * 0.34;
      const progress = clamp(
        (triggerStart - (rect.top + rect.height * 0.35)) /
          (triggerStart - triggerEnd)
      );

      const lineCount = Math.max(lines.length, 1);

      lineRefs.current.slice(0, lineCount).forEach((line, index) => {
        line.style.setProperty(
          "--fill-progress",
          clamp(progress * lineCount - index).toString()
        );
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [lines]);

  const visibleLines = lines.length > 0 ? lines : [collectionStatement];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f6f3ef] px-[14.5px] pt-[96px] sm:px-8 sm:pt-[112px] xl:px-0 xl:pt-[140px]"
    >
      <div className="sticky top-[96px] z-0 sm:top-[112px] xl:top-[140px]">
        <div className="mx-auto max-w-[1728px]">
          <div className="relative mx-auto max-w-[980px]">
            <p
              ref={measureRef}
              aria-hidden="true"
              className="pointer-events-none invisible absolute inset-0 m-0 text-center text-[28px] uppercase sm:text-[34px] xl:text-[40px]"
              style={{ fontFamily: bodyFont, lineHeight: "normal" }}
            >
              {collectionStatement}
            </p>

            <div aria-label={collectionStatement} role="text">
              {visibleLines.map((line, index) => (
                <span
                  key={`${line}-${index}`}
                  ref={(element) => {
                    if (element) {
                      lineRefs.current[index] = element;
                    }
                  }}
                  aria-hidden="true"
                  className="scroll-fill-line block text-center text-[28px] uppercase sm:text-[34px] xl:text-[40px]"
                  style={{ fontFamily: bodyFont, lineHeight: "normal" }}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CatalogSplitSection className="relative z-10 mt-[96px] pb-[72px] sm:mt-[112px] sm:pb-[80px] xl:mt-[140px] xl:pb-[140px]" />
    </section>
  );
}
