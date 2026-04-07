import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function VossaPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f3ef] text-[#38312a]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
