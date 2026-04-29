import { useState } from "react";

const faqItems = [
  {
    question: "Почему вы дороже фрилансера?",
    answer:
      "Мы несём ответственность за результат, работаем командой и обеспечиваем поддержку. Фрилансер — это риск: болезни, пропажа, нет замены. Мы — надёжный партнёр на долгий срок.",
  },
  {
    question: "Как вы считаете часы? Не накручиваете ли?",
    answer:
      "Мы работаем по фиксированным ТЗ и согласованным бюджетам. Все задачи логируются в трекере, к которому у вас есть доступ. Прозрачность — наш принцип.",
  },
  {
    question: "Что будет, если через месяц всё сломается?",
    answer:
      "Мы несём гарантийную ответственность за нашу работу. Если что-то сломается по нашей вине — починим бесплатно. Для длительных клиентов действует приоритетная поддержка.",
  },
  {
    question: "Как вы гарантируете безопасность данных?",
    answer:
      "Мы подписываем NDA, работаем через защищённые каналы, не передаём данные третьим лицам. Доступы хранятся в зашифрованных хранилищах.",
  },
  {
    question: "Почему нет точных цен на сайте?",
    answer:
      "Каждый проект уникален. Стоимость зависит от объёма, сложности и сроков. На бесплатной консультации мы разберём вашу задачу и дадим точную смету.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#3a3a3a]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#454545]"
        aria-expanded={isOpen}
      >
        <span className="font-montserrat text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          {item.question}
        </span>
        <span className="ml-4 flex-shrink-0">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-brand-green font-montserrat text-xl font-bold text-black transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-6 py-4">
          <p className="font-montserrat text-sm leading-relaxed text-white/70 sm:text-base">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1e1e1e] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-montserrat text-4xl font-bold uppercase text-white sm:text-5xl">
          Ответы на вопросы
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
