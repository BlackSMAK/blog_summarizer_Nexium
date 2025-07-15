import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import SummarizeSection from "@/components/SummarizeSection";
import BrowserExtensionsSection from "@/components/BrowserExtension";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <SummarizeSection />
        <BrowserExtensionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
