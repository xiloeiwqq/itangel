import { useState } from "react";

export default function HeroSection() {
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-5 pt-16 pb-16 text-center md:pt-20 md:pb-24">
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
        <button
          type="button"
          onClick={() => setIsAuditFormOpen(true)}
          className="flex items-center justify-center bg-green rounded-[80px] px-7 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-[#0D1E02] leading-normal whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          Бесплатный аудит CRM
        </button>
        <button className="flex items-center justify-center bg-black border-2 border-black rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-white leading-normal whitespace-nowrap hover:opacity-80 transition-opacity w-full sm:w-auto">
          Все услуги
        </button>
      </div>

      <div className="relative mt-10 w-full max-w-[560px] md:mt-14">
        <img
          src="/laptop.svg"
          alt="Рост продаж на экране ноутбука"
          className="mx-auto w-full h-auto"
        />
      </div>

      {isAuditFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsAuditFormOpen(false)}
        >
          <div
            className="relative h-[85vh] w-full max-w-[560px] overflow-hidden rounded-3xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Закрыть форму"
              onClick={() => setIsAuditFormOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:opacity-80"
            >
              ×
            </button>
            <iframe
              title="Бесплатный аудит CRM"
              src="/form/form.html"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
