import { AboutPart } from "@/components/portfolio/parts/AboutPart";
import { ConnectPart } from "@/components/portfolio/parts/ConnectPart";
import { HomePart } from "@/components/portfolio/parts/HomePart";
import { WorkPart } from "@/components/portfolio/parts/WorkPart";

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen scroll-smooth bg-black font-sans">
      <HomePart />
      <WorkPart />
      <AboutPart />
      <ConnectPart />
    </main>
  );
}
