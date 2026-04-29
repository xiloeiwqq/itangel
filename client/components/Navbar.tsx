import { useState } from "react";
import { Link } from "react-router-dom";

const AngelWingsIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.86039 2.15039C5.58568 3.54214 4.51419 5.17258 3.68049 6.97684L12.4314 15.1896L11.4829 16.2008L3.10989 8.34298C2.42782 10.1433 1.96863 12.0877 1.76238 14.1205L10.3833 18.4786L9.75715 19.717L1.65573 15.6211C1.58425 17.4357 1.71339 19.3072 2.05925 21.199L9.52046 21.816L9.40691 23.1983L2.35836 22.6161C2.4135 22.8455 2.4708 23.0752 2.5324 23.3049C2.86119 24.5302 3.27013 25.7051 3.74773 26.8257C4.39766 26.7058 5.06942 26.5827 5.81198 26.4429C7.79762 26.0694 9.75247 25.6963 9.75247 25.6963L10.0122 27.0576C10.0122 27.0576 8.05524 27.4327 6.06707 27.8068C5.47243 27.9187 4.89463 28.0272 4.34608 28.1292C4.98807 29.4285 5.72803 30.6442 6.54719 31.7659L11.0629 29.2217L11.7426 30.43L7.40775 32.8746C8.31337 33.9723 9.299 34.9665 10.3486 35.8433L11.622 34.3334C11.7244 32.8092 11.9903 31.5335 12.6889 30.4948C13.1593 29.7953 13.8348 29.246 14.7043 28.8667C14.0909 27.9151 13.6041 26.8393 13.2849 25.6498C12.2068 21.6309 13.328 17.5978 15.9869 15.4007L6.86024 2.15039H6.86039ZM31.4151 2.15039L22.2887 15.4007C24.9476 17.5978 26.0712 21.6308 24.993 25.6498C24.6768 26.8282 24.1938 27.894 23.5874 28.839C24.5037 29.2386 25.1872 29.8411 25.6285 30.5947C26.2081 31.5842 26.4074 32.7557 26.4751 34.1176L27.9292 35.8432C28.9786 34.9664 29.9645 33.9723 30.8701 32.8744L26.533 30.43L27.2149 29.2217L31.7305 31.7659C32.5499 30.6439 33.2895 29.4287 33.9317 28.1292C33.3825 28.0272 32.803 27.9187 32.2083 27.8068C30.2202 27.4327 28.2631 27.0576 28.2631 27.0576L28.5229 25.6962C28.5229 25.6962 30.4802 26.0693 32.4658 26.4429C33.1537 26.5724 33.8417 26.7008 34.53 26.8281C35.0173 25.6836 35.4235 24.5063 35.7454 23.3049C35.807 23.0752 35.8643 22.8455 35.9193 22.6161L28.8708 23.1981L28.7573 21.8158L36.2185 21.199C36.5644 19.3072 36.6913 17.4357 36.6197 15.621L28.5183 19.7169L27.8921 18.4784L36.5154 14.1204C36.3088 12.0868 35.8507 10.1415 35.1679 8.34061L26.795 16.2007L25.8442 15.1896L34.5949 6.97684C33.761 5.17258 32.6898 3.54221 31.4151 2.15039H31.4151ZM19.0068 21.5259C18.2311 21.5259 17.5097 21.9224 16.945 22.6486C16.3802 23.3747 16.0056 24.422 16.0056 25.5942C16.0056 26.7663 16.3801 27.8135 16.9449 28.5397C17.5097 29.2659 18.2311 29.6647 19.0068 29.6647C19.7825 29.6647 20.5016 29.2659 21.0664 28.5398C21.6312 27.8136 22.0057 26.7664 22.0057 25.5943C22.0057 24.4222 21.6311 23.3749 21.0664 22.6487C20.5016 21.9226 19.7825 21.5262 19.0068 21.5262V21.5259ZM21.9477 29.7783C21.1788 30.6051 20.149 31.1396 19.0067 31.1396C17.8966 31.1396 16.8922 30.6351 16.1308 29.8478C15.9332 29.8968 15.7488 29.9505 15.5787 30.0102C14.7279 30.3085 14.214 30.7123 13.8393 31.2697C13.1572 32.2835 12.9826 34.0195 12.9555 36.4092H25.1135C25.1034 34.0676 25.0278 32.313 24.4315 31.2951C24.1035 30.7347 23.6451 30.3342 22.8312 30.0287C22.5739 29.9321 22.2796 29.8479 21.9476 29.7782L21.9477 29.7783Z"
      fill="#98FF53"
    />
  </svg>
);

const navLinks = [
  { label: "Главная", href: "/", active: true },
  { label: "Услуги", href: "/services" },
  { label: "О нас", href: "/about" },
];

const rightLinks = [
  { label: "Контакты", href: "/contacts" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full relative z-50">
      {/* Desktop navbar */}
      <div className="hidden md:flex items-center justify-between mx-auto px-6 lg:px-10 h-[76px] max-w-[1696px]">
        {/* Left nav links */}
        <div className="flex items-center gap-10 lg:gap-[70px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex flex-col items-center gap-[3px] group"
            >
              <span
                className={`font-montserrat text-[18px] leading-normal ${
                  link.active ? "font-semibold text-black" : "font-normal text-black/80"
                }`}
              >
                {link.label}
              </span>
              {link.active && (
                <div className="w-[26px] h-[2px] rounded-full bg-green" />
              )}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center relative">
          <div className="relative flex items-center">
            <div className="absolute inset-x-0 bottom-0 h-[57px] bg-black rounded-[40px]" />
            <div className="relative flex items-center px-5 py-3 gap-2">
              <AngelWingsIcon />
              <span
                className="font-montserrat font-bold text-[32px] leading-normal text-green tracking-wide"
                style={{ letterSpacing: "0.02em" }}
              >
                IT-Angel
              </span>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 lg:gap-[70px]">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-montserrat text-[18px] font-normal text-black/80 leading-normal"
            >
              {link.label}
            </Link>
          ))}
          <button className="flex items-center justify-center bg-green rounded-[96px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-black leading-normal whitespace-nowrap hover:opacity-90 transition-opacity">
            Позвонить
          </button>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div className="flex items-center bg-black rounded-[40px] px-4 py-2 gap-2">
          <AngelWingsIcon />
          <span className="font-montserrat font-bold text-[24px] text-green">
            IT-Angel
          </span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-5 py-6 flex flex-col gap-5">
          {[...navLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-montserrat text-[18px] text-black/80 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 bg-green rounded-[96px] px-8 py-4 font-montserrat font-bold text-[18px] uppercase text-black">
            Позвонить
          </button>
        </div>
      )}
    </nav>
  );
}
