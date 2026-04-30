export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      title: "Бесплатная консультация",
      subtitle: "45 минут, разбираем задачу",
      iconSrc: "/how-we-work/free-consult.svg",
    },
    {
      id: 2,
      title: "Техническое задание",
      subtitle: "Фиксируем объём и сроки",
      iconSrc: "/how-we-work/tech-task.svg",
    },
    {
      id: 3,
      title: "Реализация",
      subtitle: "Делаем, вы принимаете",
      iconSrc: "/how-we-work/gear.svg",
    },
    {
      id: 4,
      title: "Сопровождение",
      subtitle: "Поддержка 12/7, доработки",
      iconSrc: "/how-we-work/phone.svg",
    },
  ];
  const orderedSteps = [steps[0], steps[1], steps[3], steps[2]];
  const stepIconSizes: Record<number, { width: number; height: number; className: string }> = {
    1: { width: 64, height: 64, className: "h-16 w-16 sm:h-16 sm:w-16" },
    2: { width: 57, height: 63, className: "h-[63px] w-[57px]" },
    3: { width: 64, height: 64, className: "h-16 w-16" },
    4: { width: 53, height: 53, className: "h-[53px] w-[53px]" },
  };

  return (
    <section className="relative overflow-hidden bg-[rgb(40,40,40)] bg-none py-20 text-[rgba(35,35,35,1)]">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-[#9AE964] blur-3xl opacity-10" />
      <div
        className="pointer-events-none absolute -bottom-20 -left-40 h-80 w-80 rounded-full bg-[#9AE964] blur-3xl opacity-10"
        style={{ backgroundColor: "rgb(154, 233, 100)" }}
      />

      {/* Decorative star */}
      <div className="pointer-events-none absolute -left-20 top-16 opacity-20">
        <svg
          width="217"
          height="213"
          viewBox="0 0 217 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M209.71 112.616L136.08 135.519L125.168 207.605L79.1276 148.925L2.73199 161.576L47.962 102.432L11.5713 38.1484L85.4772 60.2625L139.472 7.88062L140.007 80.6879L209.71 112.616Z"
            fill="#9EFB54"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-20 text-center font-montserrat text-4xl font-bold uppercase text-white sm:text-5xl lg:text-[48px]">
          Как мы работаем
        </h2>

        <div className="relative space-y-10 md:space-y-14">
          {orderedSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className={`flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className="relative w-full max-w-[595px]">
                  {(() => {
                    const iconSize = stepIconSizes[step.id] ?? { width: 64, height: 64, className: "h-16 w-16" };
                    return (
                  <div className="step-card-bg flex h-[100px] w-[595px] max-w-full items-center gap-6 overflow-hidden rounded-2xl border-none bg-[linear-gradient(90deg,rgba(53,53,53,1)_0%,rgba(70,85,58,1)_100%)] p-6 sm:gap-[30px] sm:rounded-3xl sm:pl-[34px] sm:py-[18px] sm:pr-0">
                    <img
                      src={step.iconSrc}
                      alt=""
                      width={iconSize.width}
                      height={iconSize.height}
                      className={`flex-shrink-0 object-contain ${iconSize.className}`}
                      decoding="async"
                    />
                    <div className="flex flex-col justify-center gap-[7px]">
                      <h3 className="font-montserrat text-lg font-bold uppercase leading-[29px] text-gray-200 sm:text-2xl sm:leading-[29px]">
                        {step.title}
                      </h3>
                      <p className="font-montserrat text-sm text-white sm:text-base">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                    );
                  })()}

                  {index < orderedSteps.length - 1 && (
                    <div
                      className={`pointer-events-none absolute hidden md:block top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "left-full" : "right-full"
                      }`}
                    >
                      <svg
                        width="170"
                        height="150"
                        viewBox="0 0 170 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={index % 2 === 0 ? "" : "scale-x-[-1]"}
                      >
                        <path
                          d="M2 18C88 8 132 66 130 126"
                          stroke="#9EFB54"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path d="M123 116L130 126L139 117" stroke="#9EFB54" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {index === 0 && (
                <div className="pointer-events-none absolute hidden md:block left-[120px] -top-20">
                  <svg width="88" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M72 12C44 2 34 22 38 66"
                      stroke="#9EFB54"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path d="M32 58L38 66L44 58" stroke="#9EFB54" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
