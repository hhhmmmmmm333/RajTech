import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WalletAnalyzer from "@/components/WalletAnalyzer";
import AboutBinance from "@/components/AboutBinance";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurTeam from "@/components/OurTeam";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <AboutBinance />
      <WhyChooseUs />
      <OurTeam />
      <WalletAnalyzer />
      <Features />
      <HowItWorks />
      <Security />
      <ContactUs />
      <Footer />
    </main>
  );
}
