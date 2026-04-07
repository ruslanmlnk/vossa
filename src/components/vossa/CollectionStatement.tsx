"use client";

import { CatalogSplitSection } from "./CatalogSplitSection";
import { collectionStatement } from "./data";
import { AnimatedScrollText } from "@/components/ui/AnimatedScrollText";

export function CollectionStatement() {
  return (
    <section className="relative bg-[#f6f3ef] px-[14.5px] pt-[96px] sm:px-8 sm:pt-[112px] xl:px-0 xl:pt-[140px]">
      <div className="sticky top-[96px] z-0 sm:top-[112px] xl:top-[140px]">
        <div className="mx-auto max-w-[1728px]">
          <AnimatedScrollText text={collectionStatement} />
        </div>
      </div>

      <CatalogSplitSection className="relative z-10 mt-[96px] pb-[72px] sm:mt-[112px] sm:pb-[80px] xl:mt-[140px] xl:pb-[140px]" />
    </section>
  );
}
