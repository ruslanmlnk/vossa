import { SiteFooter } from "@/components/vossa-site/shared/SiteFooter";
import { SiteHeader } from "@/components/vossa-site/shared/SiteHeader";

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
