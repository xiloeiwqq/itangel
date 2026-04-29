export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-5 pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Glow effects */}
      <div
        className="pointer-events-none absolute left-[-20%] top-[30%] w-[36vw] h-[20vw] rounded-full"
        style={{
          background: "#98FF53",
          filter: "blur(min(150px, 15vw))",
          opacity: 0.35,
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] w-[36vw] h-[20vw] rounded-full"
        style={{
          background: "#98FF53",
          filter: "blur(min(150px, 15vw))",
          opacity: 0.3,
        }}
      />

      {/* Heading */}
      <h1 className="relative font-montserrat font-bold uppercase text-black text-center leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[54px] max-w-[700px] mb-4 md:mb-6">
        Контроль, порядок
        <br />и рост прибыли
      </h1>

      {/* Subtitle */}
      <p className="relative font-montserrat font-normal text-black text-base sm:text-lg md:text-[24px] leading-normal mb-8 md:mb-10">
        CRM, сайты, маркетинг... И вы спите спокойно
      </p>

      {/* CTA Buttons */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        <button className="flex items-center justify-center bg-green rounded-[80px] px-7 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-[#0D1E02] leading-normal whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto">
          Бесплатный аудит CRM
        </button>
        <button className="flex items-center justify-center bg-black border-2 border-black rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-white leading-normal whitespace-nowrap hover:opacity-80 transition-opacity w-full sm:w-auto">
          Все услуги
        </button>
      </div>
    </section>
  );
}
