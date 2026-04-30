const partners = [
  {
    src: "/company_logo/baro.svg",
    alt: "Baro",
    width: 98,
    height: 98,
  },
  {
    src: "/company_logo/yuman.svg",
    alt: "Юман",
    width: 165,
    height: 65,
  },
  {
    src: "/company_logo/tekstilmash.svg",
    alt: "Текстильмаш",
    width: 178,
    height: 42,
  },
  {
    src: "/company_logo/impulsehome.svg",
    alt: "Impulse Home",
    width: 139,
    height: 53,
  },
  {
    src: "/company_logo/novadom.svg",
    alt: "НоваДом",
    width: 109,
    height: 77,
  },
  {
    src: "/company_logo/packplace.svg",
    alt: "packplace",
    width: 271,
    height: 42,
  },
  {
    src: "/company_logo/rotado.svg",
    alt: "Rotado",
    width: 235,
    height: 42,
  },
  {
    src: "/company_logo/sespel.svg",
    alt: "СЕСПЕН",
    width: 190,
    height: 42,
  },
];

export default function PartnersSection() {
  const marqueePartners = [...partners, ...partners];

  const animationStyle = `
    @keyframes scroll-partners {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .partners-scroll {
      display: inline-flex;
      align-items: center;
      animation: scroll-partners 40s linear infinite;
      width: max-content;
      will-change: transform;
    }

    .partners-scroll > div {
      flex: 0 0 auto;
    }
    
  `;

  return (
    <div className="relative z-10 overflow-visible">
      <style>{animationStyle}</style>
      
      {/* Right green glow decoration */}
      <div
        className="absolute right-0 top-0 w-[458px] h-[330px] rounded-full pointer-events-none"
        style={{ background: "#9FFF5D", filter: "blur(205px)", opacity: 0.5 }}
      />
      {/* Decorative circle right */}
      <svg className="absolute right-0 top-0 pointer-events-none" width="212" height="218" viewBox="0 0 212 218" fill="none">
        <path d="M106 16C155.288 16 196 57.2136 196 109C196 160.786 155.288 202 106 202C56.7124 202 16 160.786 16 109C16 57.2136 56.7124 16 106 16Z" stroke="#9CEB65" strokeOpacity="0.3" strokeWidth="32"/>
      </svg>
      {/* Decorative rotated rect left */}
      <div className="absolute -left-8 bottom-[15%] w-[111px] h-[103px] border-[7px] border-[rgba(154,233,100,0.30)] rounded-[23px] pointer-events-none" style={{ transform: "rotate(43.375deg)" }} />

      {/* Title on black background */}
      <div className="bg-black py-12 lg:py-16 relative z-10">
        <h2 className="text-white text-center font-montserrat font-bold text-[32px] sm:text-[48px] lg:text-[48px] uppercase tracking-wide px-4">
          С нами работают
        </h2>
      </div>

      {/* Gradient from black to white — pt + inner py суммарно = py заголовка для ровного вертикального шага */}
      <div
        className="relative z-10 pt-6 pb-0 lg:pt-8"
        style={{
          background: "linear-gradient(to bottom, #000 0%, #fff 60%)",
        }}
      >
        {/* Partners strip */}
        <div
          className="relative z-20 bg-white overflow-hidden py-6 lg:py-8 partners-marquee"
          style={{ boxShadow: "0 46px 90px -30px rgba(0, 0, 0, 0.55)" }}
        >
          <div className="partners-scroll whitespace-nowrap gap-[21px]">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="flex shrink-0 items-center justify-center"
                aria-hidden={index >= partners.length}
              >
                <img
                  src={partner.src}
                  alt={index < partners.length ? partner.alt : ""}
                  style={{ width: partner.width, height: partner.height }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
