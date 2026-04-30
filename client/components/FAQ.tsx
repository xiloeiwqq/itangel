import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <motion.div
      className="w-[970px] overflow-hidden rounded-2xl bg-[#3a3a3a]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <button
        onClick={onToggle}
        className="flex h-[100px] w-full w-[970px] items-center justify-between bg-[linear-gradient(90deg,rgba(69,69,69,1)_0%,rgba(84,93,76,1)_100%)] pl-[39px] pr-[30px] py-5 text-left transition-colors hover:bg-[linear-gradient(90deg,rgba(69,69,69,1)_0%,rgba(84,93,76,1)_100%)]"
        aria-expanded={isOpen}
      >
        <span className="font-montserrat text-2xl font-bold uppercase tracking-wide text-white">
          {item.question}
        </span>
        <span className="ml-4 flex-shrink-0 bg-transparent">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#9AE964] font-montserrat text-xl font-bold text-black transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 py-4">
              <p className="font-montserrat text-sm leading-relaxed text-white/70 sm:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#282828] pb-[120px]">
      <div className="mx-auto flex max-w-[970px] flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-[60px] pt-10 text-center font-montserrat text-4xl font-bold uppercase text-white sm:text-5xl lg:text-[48px]">
          Ответы на вопросы
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-10">
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
