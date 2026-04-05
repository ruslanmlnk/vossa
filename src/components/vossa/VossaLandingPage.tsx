import { CollectionStatement } from "./CollectionStatement";
import { DesignStorySection } from "./DesignStorySection";
import { DesignersSection } from "./DesignersSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { PartnerSection } from "./PartnerSection";
import { SelectionFormSection } from "./SelectionFormSection";

export function VossaLandingPage() {
  return (
    <main className="bg-[#f6f3ef] text-[#38312a]">
      <HeroSection />
      <CollectionStatement />
      <DesignStorySection />
      <SelectionFormSection />
      <DesignersSection />
      <PartnerSection />
      <FooterSection />
    </main>
  );
}
