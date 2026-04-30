const stats = [
  {
    value: "50+",
    label: "Клиентов всего",
    iconSrc: "/numbers-n-facts/all-clients.svg",
    iconAlt: "Иконка всех клиентов",
    iconClassName: "h-[100px] w-[100px] translate-x-[1px] translate-y-[1px]",
    cardClassName: "md:pl-[30px] md:pr-[15px] md:pb-[15px]",
  },
  {
    value: "32",
    label: "Клиента на сопровождении сейчас",
    iconSrc: "/numbers-n-facts/clients-now.svg",
    iconAlt: "Иконка клиентов на сопровождении",
    iconClassName: "h-[100px] w-[100px] translate-x-[2px] -translate-y-[2px]",
    cardClassName: "md:pl-[30px] md:pr-[15px] md:pb-[15px]",
  },
  {
    value: "92%",
    label: "Довольных клиентов",
    iconSrc: "/numbers-n-facts/happy-clients.svg",
    iconAlt: "Иконка довольных клиентов",
    iconClassName: "h-[100px] w-[100px] -translate-x-[1px] translate-y-[1px]",
    cardClassName: "md:pl-[30px] md:pr-[15px] md:pb-[15px]",
  },
  {
    value: "3000+",
    label: "Выполненных задач",
    iconSrc: "/numbers-n-facts/tasks.svg",
    iconAlt: "Иконка выполненных задач",
    iconClassName: "h-[100px] w-[100px] translate-x-[1px]",
  },
  {
    value: "7500+",
    label: "Часов работ",
    iconSrc: "/numbers-n-facts/work-hours.svg",
    iconAlt: "Иконка часов работы",
    iconClassName: "h-[100px] w-[100px]",
  },
];

const StatCard = ({
  value,
  label,
  iconSrc,
  iconAlt,
  iconClassName,
  cardClassName,
  hideIcon,
}: {
  value: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName: string;
  cardClassName?: string;
  hideIcon?: boolean;
}) => (
  <div
    className={`relative flex h-[380px] w-[320px] flex-col justify-between overflow-hidden rounded-[40px] p-8 md:p-10 ${cardClassName ?? ""}`}
    style={{
      border: "1px solid #A9FF6E",
      background: "linear-gradient(322deg, #353535 78.14%, #A9FF6E 213.71%)",
      boxShadow: "-1px 3px 250px -106px #A9FF6E",
    }}
  >
    {/* Number and label */}
    <div>
      <p className="font-montserrat font-bold text-white text-[40px] md:text-[50px] uppercase leading-tight mb-[10px]">
        {value}
      </p>
      <p className="font-montserrat font-medium text-white text-[20px] md:text-[28px] text-left leading-[34px]">
        {label}
      </p>
    </div>

    {/* Icon */}
    {!hideIcon && (
      <div className="flex justify-end mt-0">
        <img
          src={iconSrc}
          alt={iconAlt}
          className={`object-contain ${iconClassName}`}
        />
      </div>
    )}
  </div>
);

export default function StatsSection() {
  return (
    <section className="relative z-30 bg-black py-16 md:py-24 overflow-x-hidden overflow-y-visible">
      {/* Glow effects */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[5%] w-[30vw] h-[20vw] rounded-full"
        style={{ background: "#9FFF5D", filter: "blur(200px)", opacity: 0.3 }}
      />
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[5%] w-[30vw] h-[20vw] rounded-full"
        style={{ background: "#9FFF5D", filter: "blur(200px)", opacity: 0.3 }}
      />

      {/* Decorative circle outline */}
      <div
        className="pointer-events-none absolute left-[-8%] top-[35%] w-[12vw] h-[10vw] rounded-full"
        style={{ border: "12px solid rgba(156,235,101,0.3)" }}
      />
      {/* Decorative rounded square */}
      <div
        className="pointer-events-none absolute left-[-6%] bottom-[15%] w-[8vw] h-[7vw] rounded-[23px]"
        style={{ border: "7px solid rgba(154,233,100,0.3)", transform: "rotate(43deg)" }}
      />
      {/* Decorative large circle outline */}
      <div
        className="pointer-events-none absolute right-[-8%] bottom-[10%] w-[14vw] h-[14vw] rounded-full"
        style={{ border: "32px solid rgba(156,235,101,0.3)" }}
      />

      {/* Title */}
      <h2 className="font-montserrat font-bold uppercase text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal mb-10 md:mb-14">
        Цифры и факты
      </h2>

      {/* Stats grid */}
      <div className="px-5 md:px-10 lg:px-[60px] max-w-[1300px] mx-auto">
        {/* Top row: 3 cards */}
        <div className="mb-[30px] flex flex-col items-center gap-[30px] sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap">
          {stats.slice(0, 3).map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
        {/* Bottom row: 2 cards centered */}
        <div className="flex flex-col items-center gap-[30px] sm:flex-row sm:justify-center lg:mx-auto lg:w-[calc(66.67%-10px)]">
          {stats.slice(3).map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
