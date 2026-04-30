const caseCardStyle = {
  width: "310px",
  height: "375px",
  background: "linear-gradient(343deg, rgba(0, 0, 0, 1) 34%, rgba(50, 80, 26, 1) 100%)",
} as const;

export default function FeaturedCases() {
  const cases = [
    {
      id: 1,
      title: "ЮМАН",
      description: "CRM с нуля + сайт\n+ фирменный стиль",
      logoSrc: "/company_logo/yuman.svg",
      hasImage: true,
      logoWidth: 214,
      logoHeight: 83,
    },
    {
      id: 2,
      title: "BARO\n(США, Флорида)",
      description: "Автоматизация\nkommoCRM",
      logoSrc: "/company_logo/baro2nd.svg",
      hasImage: true,
      noLogoPanel: true,
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
      logoSrc: "/company_logo/rotado.svg",
      hasImage: true,
      logoImgClassName: "h-8 w-[213px] object-contain",
    },
    {
      id: 5,
      title: "Packplace",
      description: "Комплексное\nIT-обслуживание 3+ года",
      logoSrc: "/company_logo/packplace.svg",
      hasImage: true,
      logoImgClassName: "h-8 w-[213px] object-contain",
    },
  ];

  return (
    <div
      className="relative overflow-x-hidden overflow-y-visible bg-white pb-20 pt-20"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 1) 47%, rgba(255, 255, 255, 1) 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {/* Decorative gradient background */}
      <div
        className="cases-section-bg absolute bottom-0 right-0 z-0 w-full"
        style={{
          height: "1128px",
          background: "linear-gradient(0deg, rgba(40, 40, 40, 1) 7%, rgba(255, 255, 255, 0) 30%)",
          WebkitBackgroundClip: "unset",
          color: "rgba(0, 0, 0, 1)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-montserrat text-4xl font-bold uppercase text-black sm:text-5xl lg:text-[48px]">
          Избранные кейсы
        </h2>

        {/* Cases: centered wrap, 30px gap between cards and between rows */}
        <div className="flex w-full flex-wrap justify-center gap-x-[30px] gap-y-[30px]">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className={
                "noLogoPanel" in caseItem && caseItem.noLogoPanel
                  ? "group relative overflow-hidden rounded-[40px] px-6 pb-6 pt-[20px] transition-transform duration-300 md:px-5 md:pb-5 md:pt-[20px]"
                  : "group relative overflow-hidden rounded-[40px] p-6 transition-transform duration-300 md:p-5"
              }
              style={caseCardStyle}
            >
              <div
                className={
                  "noLogoPanel" in caseItem && caseItem.noLogoPanel
                    ? "flex h-full flex-col justify-start gap-[48px]"
                    : "flex h-full flex-col justify-start gap-[85px]"
                }
              >
                <div
                  className={
                    "noLogoPanel" in caseItem && caseItem.noLogoPanel
                      ? "flex h-[148px] shrink-0 items-center justify-center"
                      : "flex h-24 shrink-0 items-center justify-center rounded-2xl bg-white sm:h-28"
                  }
                >
                  {caseItem.logoSrc && caseItem.hasImage && (
                    <img
                      src={caseItem.logoSrc}
                      alt={caseItem.title}
                      className={
                        "logoWidth" in caseItem && caseItem.logoWidth != null
                          ? "object-contain"
                          : "logoImgClassName" in caseItem && caseItem.logoImgClassName
                            ? caseItem.logoImgClassName
                            : "h-[148px] w-[148px] object-contain"
                      }
                      style={
                        "logoWidth" in caseItem && caseItem.logoWidth != null
                          ? {
                              width: caseItem.logoWidth,
                              height: caseItem.logoHeight ?? caseItem.logoWidth,
                            }
                          : undefined
                      }
                    />
                  )}
                  {"textOnly" in caseItem && caseItem.textOnly && caseItem.text && (
                    <div className="text-center font-montserrat text-lg font-bold text-black sm:text-xl">
                      {caseItem.text}
                    </div>
                  )}
                </div>

                <div className="space-y-[10px]">
                  <h3 className="whitespace-pre-line font-montserrat text-2xl font-bold tracking-[0%] text-white sm:text-[28px] sm:leading-[34px]">
                    {caseItem.title}
                  </h3>
                  <p className="whitespace-pre-line font-montserrat text-sm leading-5 text-white/90 sm:text-base sm:leading-5">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
