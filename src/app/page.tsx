import { CollectionStatement } from "@/components/vossa/CollectionStatement";
import { DesignStorySection } from "@/components/vossa/DesignStorySection";
import { DesignersSection } from "@/components/vossa/DesignersSection";
import { FooterSection } from "@/components/vossa/FooterSection";
import { HeroSection } from "@/components/vossa/HeroSection";
import { PartnerSection } from "@/components/vossa/PartnerSection";
import { SelectionFormSection } from "@/components/vossa/SelectionFormSection";

import { SiteHeader } from "@/components/ui/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f6f3ef] text-[#38312a]">
        <HeroSection />
        <CollectionStatement />
        <DesignStorySection />
        <SelectionFormSection />
        <DesignersSection />
        <PartnerSection />
        <FooterSection />
      </main>
    </>
  );
}
