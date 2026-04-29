const partners = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/3a5b61e82bbffef13d69677a0e5c20148d9e5a1d?width=520",
    alt: "ADO",
    width: 130,
    height: 23,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/d82fb9201a0cdcb0e668e1ed5592ce66966d28b2?width=334",
    alt: "ЮМАН",
    width: 120,
    height: 42,
    pill: true,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f2199d9f242fa9e17d4349d788199c6bbc16cfd4?width=458",
    alt: "ОАО ТЕКСТИЛЬМАШ",
    width: 150,
    height: 36,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/36fad0b439c42734d035c83d9ff9195756536f10?width=278",
    alt: "Impulse Home",
    width: 90,
    height: 90,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/50296903816d56887240bcca?width=282",
    alt: "НоваДом",
    width: 95,
    height: 95,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/32495808e8b1fbbf572fd569fb1f5723688f4417?width=632",
    alt: "packplace",
    width: 200,
    height: 31,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fa4ff3c22c043edd9d3257352f0d6dd1d67145e0?width=196",
    alt: "Logo",
    width: 65,
    height: 65,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/ff257cec53c2e04f6e0f489a2d34d0cd63ab6e06?width=516",
    alt: "СЕСПЕН",
    width: 168,
    height: 37,
  },
];

export default function PartnersSection() {
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
      animation: scroll-partners 40s linear infinite;
      width: max-content;
    }
    
  `;

  return (
    <section className="relative overflow-hidden">
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

      {/* Gradient from black to white */}
      <div
        className="relative z-10"
        style={{
          background: "linear-gradient(to bottom, #000 0%, #fff 60%)",
          paddingTop: "32px",
          paddingBottom: "0px",
        }}
      >
        {/* Partners strip */}
        <div className="bg-white overflow-hidden py-6 lg:py-8 partners-marquee">
          <div className="partners-scroll flex items-center whitespace-nowrap">
            <div className="flex items-center gap-4 lg:gap-12 px-4 lg:px-8">
              {partners.map((partner) =>
                partner.pill ? (
                  <div key={`1-${partner.alt}`} className="flex items-center justify-center bg-white rounded-[35px] px-6 py-3 shadow-sm flex-shrink-0">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      style={{ width: partner.width, height: partner.height }}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <img
                    key={`1-${partner.alt}`}
                    src={partner.src}
                    alt={partner.alt}
                    style={{ width: partner.width, height: partner.height }}
                    className="object-contain flex-shrink-0"
                  />
                )
              )}
            </div>

            <div className="flex items-center gap-4 lg:gap-12 px-4 lg:px-8">
              {partners.map((partner) =>
                partner.pill ? (
                  <div key={`2-${partner.alt}`} className="flex items-center justify-center bg-white rounded-[35px] px-6 py-3 shadow-sm flex-shrink-0">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      style={{ width: partner.width, height: partner.height }}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <img
                    key={`2-${partner.alt}`}
                    src={partner.src}
                    alt={partner.alt}
                    style={{ width: partner.width, height: partner.height }}
                    className="object-contain flex-shrink-0"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
