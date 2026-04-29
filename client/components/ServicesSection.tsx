import { useEffect, useRef, useState } from "react";

const ArrowIcon = ({ dark = false }: { dark?: boolean }) => (
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.13387 21.9311L31.4029 22.0424L22.4442 30.9256C21.7832 31.581 21.7787 32.6478 22.4341 33.3088C23.0894 33.9697 24.1567 33.9743 24.8177 33.3189L36.6657 21.5709C37.3266 20.9155 37.3311 19.8482 36.6758 19.1877L24.9278 7.33972C24.6001 7.00925 24.1693 6.84267 23.7379 6.84084C23.3068 6.83901 22.8746 7.00193 22.5442 7.32962C21.8832 7.98499 21.8787 9.05228 22.5341 9.71281L31.4172 18.6716L5.14816 18.5602C4.2178 18.5563 3.45953 19.3077 3.45559 20.2385C3.45164 21.1693 4.2031 21.9271 5.13387 21.9311Z"
      fill={dark ? "black" : "white"}
    />
  </svg>
);

const MinimalArrowIcon = ({ left = false, disabled = false }: { left?: boolean; disabled?: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={left ? "rotate-180" : ""}
  >
    <path
      d="M8 5L15 12L8 19"
      stroke={disabled ? "rgba(255,255,255,0.35)" : "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DashedArrowButton = () => (
  <div className="relative w-14 h-14 flex-shrink-0">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
      <ellipse
        cx="28" cy="28"
        rx="19.9368" ry="19.9368"
        transform="rotate(-51.7405 28 28)"
        stroke="white" strokeWidth="1.04016" strokeDasharray="3.12 3.12"
      />
    </svg>
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[9px] left-[9px]">
      <path
        d="M13.8264 28.1625L24.9674 14.1575L25.94 22.6971C26.0118 23.3271 26.5806 23.7796 27.2106 23.7078C27.8406 23.6361 28.2933 23.0671 28.2215 22.4371L26.9352 11.1435C26.8635 10.5134 26.2945 10.0608 25.6647 10.1327L14.3711 11.419C14.0561 11.4549 13.7852 11.615 13.6023 11.8451C13.4194 12.0749 13.3243 12.3748 13.3602 12.6898C13.4319 13.3198 14.0009 13.7725 14.6307 13.7005L23.1703 12.7279L12.0293 26.7329C11.6347 27.2289 11.7168 27.9515 12.213 28.3463C12.7093 28.741 13.4317 28.6588 13.8264 28.1625Z"
        fill="white"
      />
    </svg>
  </div>
);

const services = [
  {
    id: "bots",
    label: "БОТЫ И ПРИЛОЖЕНИЯ",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/46291b99655fca152305f58455693ce6fb78c224?width=512",
    featured: false,
  },
  {
    id: "marketing",
    label: "ПРИВЛЕЧЕНИЕ КЛИЕНТОВ",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f67069b0340d638fd4e90ccb4fe6a96fcfa76e7c?width=492",
    featured: false,
  },
  {
    id: "crm",
    label: "CRM",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecdd0f519461696d204d54c8412b169ab4fa2be0?width=778",
    featured: true,
    description:
      "Настроим CRM, чтобы вы видели воронку продаж, отчёты и загрузку менеджеров. Интегрируем телефонию, мессенджеры, сайт.\n\nОбучим сотрудников.",
  },
  {
    id: "design",
    label: "ДИЗАЙН",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f8d1773e3050bdaaa9e42de5cab90acc680713bf?width=492",
    featured: false,
  },
  {
    id: "sites",
    label: "САЙТЫ",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0d0f8b0663ac4c3a08575531231e2d0ef5ffcf19?width=492",
    featured: false,
  },
];

const ACTIVE_INDEX = 2; // CRM is the featured one

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(ACTIVE_INDEX);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastIndex = services.length - 1;

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const container = mobileScrollRef.current;
    const activeCard = mobileCardRefs.current[activeIndex];
    if (!container || !activeCard) return;

    const targetLeft =
      activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const boundedLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    container.scrollTo({ left: boundedLeft, behavior: "smooth" });
  }, [activeIndex]);

  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden">
      {/* Glow effects */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[-5%] w-[25vw] h-[20vw] rounded-full"
        style={{ background: "#9FFF5D", filter: "blur(200px)", opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute left-[-5%] top-[35%] w-[20vw] h-[20vw] rounded-full"
        style={{ background: "#9FFF5D", filter: "blur(200px)", opacity: 0.3 }}
      />
      <div
        className="pointer-events-none absolute right-[-3%] bottom-[-5%] w-[28vw] h-[20vw] rounded-full"
        style={{ background: "#9FFF5D", filter: "blur(200px)", opacity: 0.3 }}
      />

      {/* Title */}
      <h2 className="font-montserrat font-bold uppercase text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal mb-10 md:mb-14">
        Услуги
      </h2>

      {/* Cards row - desktop */}
      <div className="hidden lg:flex items-center gap-3 px-6 xl:px-[60px] max-w-[1700px] mx-auto">
        <button
          type="button"
          aria-label="Предыдущая карточка"
          className="h-[528px] flex items-center justify-center px-1"
          onClick={goPrev}
        >
          <MinimalArrowIcon left />
        </button>

        <div className="flex-1 flex items-end justify-center gap-4 xl:gap-5">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return isActive ? (
              /* Featured card */
              <div
                key={service.id}
                className="relative flex-shrink-0 rounded-[15px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                  width: "clamp(280px, 22vw, 389px)",
                  height: "clamp(380px, 30vw, 528px)",
                  border: "1px solid #A9FF6E",
                }}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, #000 -1.54%, rgba(0,0,0,0.29) 124.19%)" }}
                />
                {/* Green circle arrow */}
                <div className="absolute top-8 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-green">
                  <ArrowIcon dark />
                </div>
                {/* Text content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-montserrat font-semibold text-white text-[32px] md:text-[40px] leading-normal mb-3">
                    {service.label}
                  </h3>
                  <p className="font-montserrat font-medium text-white text-[15px] md:text-[18px] leading-normal whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </div>
            ) : (
              /* Side card */
              <div
                key={service.id}
                className="relative flex-shrink-0 rounded-[15px] overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-500 ease-in-out"
                style={{
                  width: "clamp(160px, 14vw, 246px)",
                  height: "clamp(280px, 26vw, 468px)",
                  background: "linear-gradient(180deg, #424242 11.89%, #102403 89.77%)",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="absolute inset-0 w-full h-full object-cover rounded-[15px]"
                />
                {/* Dark overlay */}
                <div
                  className="absolute bottom-0 right-0"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 70%)" }}
                />
                {/* Dashed arrow button */}
                <div className="absolute top-4 right-4">
                  <DashedArrowButton />
                </div>
                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-montserrat font-medium text-white uppercase text-[18px] xl:text-[24px] leading-normal">
                    {service.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Следующая карточка"
          className="h-[528px] flex items-center justify-center px-1"
          onClick={goNext}
        >
          <MinimalArrowIcon />
        </button>
      </div>

      {/* Cards - mobile/tablet horizontal scroll */}
      <div className="lg:hidden px-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Предыдущая карточка"
            className="h-[380px] flex items-center justify-center px-1"
            onClick={goPrev}
          >
            <MinimalArrowIcon left />
          </button>

        <div ref={mobileScrollRef} className="overflow-x-auto scrollbar-hide pb-2 flex-1">
          <div className="flex gap-4 w-max">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={service.id}
                ref={(node) => {
                  mobileCardRefs.current[index] = node;
                }}
                className="relative flex-shrink-0 rounded-[15px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                  width: isActive ? "280px" : "180px",
                  height: isActive ? "380px" : "300px",
                  border: isActive ? "1px solid #A9FF6E" : "none",
                  background: isActive ? "transparent" : "linear-gradient(180deg, #424242 11.89%, #102403 89.77%)",
                  alignSelf: "flex-end",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 70%)" }}
                />
                {isActive ? (
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-green">
                    <ArrowIcon dark />
                  </div>
                ) : (
                  <div className="absolute top-3 right-3">
                    <DashedArrowButton />
                  </div>
                )}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className={`font-montserrat text-white uppercase leading-tight ${isActive ? "font-semibold text-[28px] mb-2" : "font-medium text-[18px]"}`}>
                    {service.label}
                  </h3>
                  {isActive && service.description && (
                    <p className="font-montserrat font-medium text-white text-[13px] leading-normal mt-2 whitespace-pre-line">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        </div>

          <button
            type="button"
            aria-label="Следующая карточка"
            className="h-[380px] flex items-center justify-center px-1"
            onClick={goNext}
          >
            <MinimalArrowIcon />
          </button>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all ${
              index === activeIndex
                ? "w-6 h-2 bg-green"
                : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
