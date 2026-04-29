import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <div className="border-b border-[#858585] rounded-b-[65px]">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center">
        <h1 className="font-montserrat font-bold text-[80px] md:text-[120px] text-black leading-none mb-4">
          404
        </h1>
        <p className="font-montserrat font-medium text-[20px] md:text-[24px] text-black/70 mb-8">
          Страница не найдена
        </p>
        <Link
          to="/"
          className="flex items-center justify-center bg-green rounded-[80px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-[#0D1E02] leading-normal hover:opacity-90 transition-opacity"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
