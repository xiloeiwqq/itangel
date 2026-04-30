const baseUrl = import.meta.env.BASE_URL;

const values = [
  {
    iconPath: `${baseUrl}our-specialties/availability_icon.svg`,
    title: "Доступность",
    description: "Подбираем выгодные решения с лучшим соотношением цена-качество",
    gradient: "linear-gradient(22deg, #141414 68.08%, #98FF53 308.36%)",
  },
  {
    iconPath: `${baseUrl}our-specialties/service_icon.svg`,
    title: "Высокий сервис",
    description: "Отвечаем оперативно, CRM-ангелы в чате 12/7, общаемся вежливо и по делу",
    gradient: "linear-gradient(162deg, #141414 81.99%, #98FF53 219.36%)",
  },
  {
    iconPath: `${baseUrl}our-specialties/customer-development_icon.svg`,
    title: "Развитие клиентов",
    description: "Работаем в долгую, каждое действие — чтобы ваш бизнес рос",
    gradient: "linear-gradient(68deg, #141414 64.77%, #98FF53 256.96%)",
  },
  {
    iconPath: `${baseUrl}our-specialties/honesty_icon.svg`,
    title: "Честность и прозрачность",
    description: "Не накручиваем часы, поминутный учёт, вы можете наблюдать за работой онлайн",
    gradient: "linear-gradient(174deg, #141414 62.42%, #98FF53 349%)",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative rounded-none px-5 md:px-10 lg:px-[60px] pb-20 md:pb-32">
      {/* Bottom glow effects */}
      <div
        className="pointer-events-none absolute left-[-10%] bottom-[5%] w-[40vw] h-[25vw] rounded-full"
        style={{ background: "#98FF53", filter: "blur(min(200px, 18vw))", opacity: 0.3 }}
      />
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[5%] w-[50vw] h-[28vw] rounded-full"
        style={{ background: "#98FF53", filter: "blur(min(200px, 18vw))", opacity: 0.3 }}
      />

      {/* Section title */}
      <h2 className="relative font-montserrat font-bold uppercase text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal mb-10 md:mb-14">
        Наши ценности
      </h2>

      {/* Cards grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-[30px] max-w-[1470px] mx-auto">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-start rounded-[20px] p-6 md:p-8 md:pl-[29px] md:pr-[23px] md:pt-[61px] min-h-[360px] md:min-h-[420px] xl:min-h-[492px]"
            style={{ background: value.gradient }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img src={value.iconPath} alt={value.title} className="h-[125px] w-[125px]" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5 md:gap-7 mt-8 md:mt-8">
              <h3 className="font-montserrat font-bold text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[103%]">
                {value.title}
              </h3>
              <p className="font-montserrat font-medium text-white text-[15px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-[0%]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
