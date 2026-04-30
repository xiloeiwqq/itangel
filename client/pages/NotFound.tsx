import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
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

          <h1 className="relative font-montserrat font-bold uppercase text-black text-center leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[54px] max-w-[700px] mb-4 md:mb-6">
            В разработке
          </h1>

          <p className="relative font-montserrat font-normal text-black text-base sm:text-lg md:text-[24px] leading-normal">
            Скоро здесь появится новый раздел
          </p>

          <div className="relative mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <Link
              to="/"
              className="flex items-center justify-center bg-green border-2 border-green rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-black leading-normal whitespace-nowrap transition-all duration-300 hover:bg-black hover:text-green hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] w-full sm:w-auto"
            >
              На главную
            </Link>
            <Link
              to="/contacts"
              className="flex items-center justify-center bg-black border-2 border-black rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-white leading-normal whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-black hover:border-black w-full sm:w-auto"
            >
              Контакты
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
