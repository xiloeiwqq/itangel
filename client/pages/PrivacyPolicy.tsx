import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-montserrat flex flex-col">
      <div
        className="relative z-50"
        style={{
          borderBottom: "1px solid #858585",
          borderRadius: "0 0 65px 65px",
          background: "#fff",
        }}
      >
        <Navbar />
      </div>

      <main className="flex-1">
        <section
          className="relative flex flex-col items-center justify-center overflow-hidden px-5 pt-16 pb-16 text-center md:pt-20 md:pb-24 min-h-[60vh] rounded-none"
          style={{ borderRadius: 0 }}
        >
          <div
            className="pointer-events-none absolute left-[-20%] top-[30%] w-[36vw] h-[20vw] rounded-full"
            style={{
              background: "#98FF53",
              filter: "blur(min(150px, 15vw))",
              opacity: 0.35,
            }}
          />
          <div
            className="pointer-events-none absolute right-[-10%] top-[10%] w-[36vw] h-[20vw] rounded-full"
            style={{
              background: "#98FF53",
              filter: "blur(min(150px, 15vw))",
              opacity: 0.3,
            }}
          />

          <h1 className="relative font-montserrat font-bold uppercase text-black text-center leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[54px] max-w-[900px] mb-4 md:mb-6">
            Политика обработки персональных данных
          </h1>

          <article className="relative w-full max-w-[980px] rounded-[28px] bg-[#f4f5f6] px-5 py-6 text-left text-black sm:px-7 md:px-10 md:py-8">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Настоящая Политика определяет порядок обработки персональных данных пользователей сайта и меры по их защите.
              Используя сайт и отправляя данные через формы, пользователь подтверждает согласие с условиями настоящей Политики.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">1. Какие данные мы обрабатываем</h2>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
              <li>имя пользователя;</li>
              <li>номер телефона;</li>
              <li>название компании;</li>
              <li>технические данные: IP-адрес, cookies, данные браузера и устройства;</li>
              <li>иные данные, которые пользователь добровольно указывает в формах на сайте.</li>
            </ul>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">2. Для чего мы используем данные</h2>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
              <li>обработка заявок и обратная связь с пользователем;</li>
              <li>подготовка предложений по услугам;</li>
              <li>улучшение работы сайта и качества сервиса;</li>
              <li>выполнение требований действующего законодательства.</li>
            </ul>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">3. Правовые основания обработки</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Обработка персональных данных осуществляется на основании согласия пользователя, а также в иных случаях,
              предусмотренных законодательством.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">4. Хранение и защита данных</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Мы применяем организационные и технические меры для защиты персональных данных от утраты, неправомерного
              доступа, изменения, раскрытия и уничтожения. Срок хранения данных определяется целями обработки и
              требованиями закона.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">5. Передача третьим лицам</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Персональные данные могут передаваться третьим лицам только в случаях, необходимых для оказания услуг,
              исполнения обязательств или когда такая передача предусмотрена законодательством.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">6. Права пользователя</h2>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
              <li>получать информацию об обработке своих персональных данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать ранее данное согласие на обработку данных;</li>
              <li>обратиться с жалобой в уполномоченный орган при нарушении прав.</li>
            </ul>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">7. Cookies</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Сайт использует cookies для корректной работы и аналитики. Пользователь может ограничить или отключить
              cookies в настройках браузера.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">8. Изменение политики</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Мы вправе обновлять настоящую Политику. Актуальная версия всегда размещается на этой странице.
            </p>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold">9. Контакты</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              По вопросам обработки персональных данных свяжитесь с нами по контактам, указанным на сайте.
            </p>
          </article>

          <div className="relative mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <Link
              to="/"
              className="flex items-center justify-center bg-green border-2 border-green rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-black leading-normal whitespace-nowrap transition-all duration-300 hover:bg-black hover:text-green hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] w-full sm:w-auto"
            >
              На главную
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
