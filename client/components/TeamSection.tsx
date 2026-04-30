const teamMembers = [
  {
    name: "Илья Дубровский",
    role: "Основатель, управляющий",
    skills: ["amoCRM", "управленческая отчётность"],
  },
  {
    name: "Артемий",
    role: "Ведущий специалист",
    skills: ["Сайты", "Дизайн"],
  },
  {
    name: "Саймон",
    role: "Разработчик",
    skills: ["Боты", "Приложения", "API-интеграции"],
  },
  {
    name: "Валерий",
    role: "Специалист",
    skills: ["SMS-парсинг"],
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="flex h-[470px] w-[345px] flex-col overflow-hidden rounded-[30px] border-0 bg-white backdrop-blur-sm">
      {/* Photo placeholder */}
      <div className="aspect-[4/3] w-full bg-[#4a4a4a] rounded-t-2xl" />

      {/* Content */}
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-montserrat text-[30px] font-bold text-black">
          {member.name}
        </h3>
        <p className="font-montserrat text-[20px] font-normal text-black">
          {member.role}
        </p>
        <ul className="mt-2 space-y-0.5">
          {member.skills.map((skill) => (
            <li
              key={skill}
              className="font-montserrat text-[15px] text-black before:mr-1 before:content-['•']"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden border-t border-t-white bg-[#282828] py-20">
      {/* Background image */}
      <img
        src="/Frame 197.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Decorative blurred green glow top-right */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#9AE964] opacity-20 blur-3xl"
        style={{ backgroundColor: "rgb(154, 233, 100)", color: "rgb(154, 233, 100)" }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-green opacity-20 blur-3xl"
          style={{ backgroundColor: "rgb(154, 233, 100)", color: "rgb(154, 233, 100)" }}
        />
      </div>

      {/* Decorative dashed left arrow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <svg
          width="140"
          height="200"
          viewBox="0 0 140 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M130 10 Q70 80 130 150 Q100 130 10 150"
            stroke="#9EFB54"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M10 150 L18 140 M10 150 L20 155"
            stroke="#9EFB54"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative dashed right arrows */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <svg
          width="140"
          height="220"
          viewBox="0 0 140 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 40 Q80 80 20 150 Q60 140 130 170"
            stroke="#9EFB54"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M130 170 L120 163 M130 170 L122 178"
            stroke="#9EFB54"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex flex-col items-center justify-center max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-montserrat text-4xl font-bold uppercase text-white sm:text-5xl lg:text-[48px]">
          Наша команда
        </h2>

        {/* Team Grid */}
        <div className="grid w-[1470px] grid-cols-2 gap-y-4 gap-x-[88px] text-left sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Additional specialists */}
        <div className="mt-14 text-center">
          <p className="mb-[30px] font-montserrat text-[32px] font-bold uppercase text-white sm:text-[32px]">
            И ещё 16 узконаправленных специалистов
          </p>
          <p className="mt-0 font-montserrat text-[24px] text-white/60 sm:text-[24px]">
            AmoCRM, Bitrix24, телефония,
            <br />
            МойСклад и другие
          </p>
        </div>
      </div>
    </section>
  );
}
