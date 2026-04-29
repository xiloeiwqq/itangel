export default function FeaturedCases() {
  const cases = [
    {
      id: 1,
      title: "ЮМАН",
      description: "CRM с нуля + сайт\n+ фирменный стиль",
      logoSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/bb0e2604406c4eafa63f2a9a68cd3d40923d0085?width=359",
      hasImage: true,
    },
    {
      id: 2,
      title: "BARO\n(США, Флорида)",
      description: "Автоматизация\nkommoCRM",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/6737d1ac913ce3b165d70f85e45bf6b2b014c013?width=282",
      isCircleImage: true,
    },
    {
      id: 3,
      title: "Юниты\nДашкиева",
      description: "CRM с нуля + сайт\n+ фирменный стиль",
      textOnly: true,
      text: "ЮНИТЫ",
    },
    {
      id: 4,
      title: "Rotado",
      description: "Управленческая отчётность\nBI + автоматизация",
      logoSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/138353834500d0cd5a32c6c6bd9097b0208e1b6e?width=361",
      hasImage: true,
    },
    {
      id: 5,
      title: "Packplace",
      description: "Комплексное\nIT-обслуживание 3+ года",
      logoSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/b33fb784d04f2affcee385bf9c644da34e11c3ff?width=426",
      hasImage: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-20">
      {/* Decorative gradient background */}
      <div className="cases-section-bg absolute inset-0 z-0" />

      {/* Decorative blurred stars */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-green blur-3xl opacity-20" />
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand-green blur-3xl opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-montserrat text-4xl font-bold uppercase text-black sm:text-5xl lg:text-6xl">
          Избранные кейсы
        </h2>

        {/* Cases Grid - Responsive Layout */}
        <div className="grid gap-8 md:gap-6">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cases.slice(0, 3).map((caseItem) => (
              <div
                key={caseItem.id}
                className="group relative overflow-hidden rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green to-black p-6 transition-transform duration-300 hover:shadow-2xl sm:rounded-3xl md:p-5"
              >
                {/* Card content wrapper */}
                <div className="flex h-full flex-col justify-between">
                  {/* Top section - Logo or Image */}
                  <div className="mb-8 flex h-24 items-center justify-center rounded-2xl bg-white sm:h-28">
                    {caseItem.logoSrc && caseItem.hasImage && (
                      <img
                        src={caseItem.logoSrc}
                        alt={caseItem.title}
                        className="h-14 object-contain sm:h-16"
                      />
                    )}
                    {caseItem.isCircleImage && caseItem.imageSrc && (
                      <div className="relative h-32 w-32 rounded-full p-2">
                        <img
                          src={caseItem.imageSrc}
                          alt={caseItem.title}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    )}
                    {caseItem.textOnly && (
                      <div className="text-center font-montserrat text-lg font-bold text-black sm:text-xl">
                        {caseItem.text}
                      </div>
                    )}
                  </div>

                  {/* Bottom section - Title and Description */}
                  <div className="space-y-3">
                    <h3 className="whitespace-pre-line font-montserrat text-2xl font-bold text-white sm:text-3xl">
                      {caseItem.title}
                    </h3>
                    <p className="whitespace-pre-line font-montserrat text-sm text-white/90 sm:text-base">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="mx-auto grid w-full grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
            {cases.slice(3, 5).map((caseItem) => (
              <div
                key={caseItem.id}
                className="group relative overflow-hidden rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green to-black p-6 transition-transform duration-300 hover:shadow-2xl sm:rounded-3xl md:p-5"
              >
                {/* Card content wrapper */}
                <div className="flex h-full flex-col justify-between">
                  {/* Top section - Logo */}
                  <div className="mb-8 flex h-24 items-center justify-center rounded-2xl bg-white sm:h-28">
                    {caseItem.logoSrc && (
                      <img
                        src={caseItem.logoSrc}
                        alt={caseItem.title}
                        className="h-12 object-contain sm:h-14"
                      />
                    )}
                  </div>

                  {/* Bottom section - Title and Description */}
                  <div className="space-y-3">
                    <h3 className="whitespace-pre-line font-montserrat text-2xl font-bold text-white sm:text-3xl">
                      {caseItem.title}
                    </h3>
                    <p className="whitespace-pre-line font-montserrat text-sm text-white/90 sm:text-base">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
