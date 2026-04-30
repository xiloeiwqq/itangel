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
import { useEffect, useRef } from "react";

export default function Index() {
  const revealScopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealScope = revealScopeRef.current;
    if (!revealScope) {
      return;
    }

    const revealElements = Array.from(revealScope.querySelectorAll<HTMLElement>("*")).filter(
      (element) =>
        !element.closest("[data-no-reveal]") &&
        !["SCRIPT", "STYLE", "LINK", "META"].includes(element.tagName),
    );

    revealElements.forEach((element) => {
      element.setAttribute("data-reveal-item", "");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealScopeRef} className="reveal-scope min-h-screen bg-white overflow-x-hidden overflow-y-visible font-montserrat">
      {/* Main white section with rounded bottom corners */}
      <div
        className="relative bg-white overflow-hidden"
        style={{ borderRadius: "0 0 clamp(60px, 10vw, 200px) clamp(60px, 10vw, 200px)" }}
      >
        {/* Navbar border wrapper */}
        <div
          data-no-reveal
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
      <div className="relative bg-white pt-16 md:pt-6">
        <ValuesSection />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Partners + Featured Cases unified section */}
      <section className="relative overflow-x-hidden overflow-y-visible bg-white">
        <PartnersSection />
        <FeaturedCases />
      </section>

      {/* How We Work Section */}
      <HowWeWork />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <div data-no-reveal>
        <Footer />
      </div>
    </div>
  );
}
