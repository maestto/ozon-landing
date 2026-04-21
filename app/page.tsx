import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TelegramSection from "@/components/sections/TelegramSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorksSection />
      <TelegramSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
