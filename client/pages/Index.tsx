import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturedCases from "@/components/FeaturedCases";
import HowWeWork from "@/components/HowWeWork";
import TeamSection from "@/components/TeamSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-montserrat">
      {/* Main white section with rounded bottom corners */}
      <div
        className="relative bg-white overflow-hidden"
        style={{ borderRadius: "0 0 clamp(60px, 10vw, 200px) clamp(60px, 10vw, 200px)" }}
      >
        {/* Navbar border wrapper */}
        <div
          className="relative z-50"
          style={{
            borderBottom: "1px solid #858585",
            borderRadius: "0 0 65px 65px",
            background: "#fff",
          }}
        >
          <Navbar />
        </div>

        {/* Hero */}
        <HeroSection />
      </div>

      {/* Values Section (outside the rounded white block) */}
      <div className="relative bg-white pt-16 md:pt-24">
        <ValuesSection />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Featured Cases Section */}
      <FeaturedCases />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
