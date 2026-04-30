import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const AngelWingsIcon = () => (
    <svg width="246" height="76" viewBox="0 0 246 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10" width="246" height="57" rx="28.5" fill="black"/>
      <path
          d="M95.5237 29.8515H98.6041V48H95.5237V29.8515ZM110.476 32.6351V48H107.395V32.6351H101.902V29.8515H115.968V32.6351H110.476ZM118.656 41.6165V38.8701H127.304V41.6165H118.656ZM134.26 43.8804L132.442 48H129.176L137.192 29.8515H140.458L148.438 48H145.172L143.353 43.8804H134.26ZM142.128 41.0227L138.825 33.5629L135.522 41.0227H142.128ZM153.452 48H150.557V34.1938H153.452V36.6804C153.922 35.8392 154.565 35.1835 155.382 34.7134C156.223 34.2186 157.114 33.9711 158.054 33.9711C159.662 33.9711 160.936 34.4536 161.876 35.4186C162.817 36.3835 163.287 37.7567 163.287 39.5381V48H160.355V40.4289C160.355 37.8804 159.303 36.6062 157.2 36.6062C156.136 36.6062 155.246 36.9526 154.528 37.6454C153.81 38.3134 153.452 39.266 153.452 40.5031V48ZM180.093 34.1938V46.2186C180.093 48.5938 179.45 50.4124 178.164 51.6742C176.877 52.9361 175.157 53.567 173.005 53.567C170.976 53.567 169.095 52.9113 167.364 51.6L168.737 49.4103C170.122 50.4247 171.495 50.932 172.856 50.932C175.825 50.932 177.31 49.4474 177.31 46.4784V44.6969C176.889 45.5134 176.271 46.1691 175.454 46.6639C174.638 47.134 173.735 47.3691 172.745 47.3691C170.914 47.3691 169.405 46.7381 168.217 45.4763C167.054 44.1897 166.473 42.5938 166.473 40.6887C166.473 38.7588 167.054 37.1629 168.217 35.901C169.405 34.6144 170.914 33.9711 172.745 33.9711C174.576 33.9711 176.06 34.7258 177.199 36.2351V34.1938H180.093ZM173.227 44.734C174.39 44.734 175.343 44.3381 176.085 43.5464C176.827 42.7299 177.199 41.7278 177.199 40.5402C177.199 39.3278 176.815 38.3258 176.048 37.534C175.306 36.7175 174.353 36.3093 173.19 36.3093C172.027 36.3093 171.087 36.7299 170.37 37.5711C169.677 38.3876 169.331 39.3773 169.331 40.5402C169.331 41.7278 169.689 42.7299 170.407 43.5464C171.124 44.3381 172.065 44.734 173.227 44.734ZM197.148 42.3588H186.311C186.385 43.3485 186.843 44.1526 187.684 44.7711C188.525 45.3897 189.503 45.699 190.616 45.699C192.373 45.699 193.684 45.1546 194.55 44.066L196.22 45.8845C194.736 47.4433 192.793 48.2227 190.393 48.2227C188.414 48.2227 186.756 47.567 185.42 46.2557C184.084 44.9443 183.416 43.2124 183.416 41.0598C183.416 38.9567 184.097 37.2495 185.457 35.9381C186.818 34.6268 188.464 33.9711 190.393 33.9711C192.323 33.9711 193.932 34.5526 195.218 35.7155C196.505 36.8783 197.148 38.4247 197.148 40.3546V42.3588ZM194.253 40.0577C194.253 38.9443 193.894 38.066 193.177 37.4227C192.484 36.7794 191.581 36.4577 190.468 36.4577C189.354 36.4577 188.377 36.7918 187.536 37.4598C186.719 38.1278 186.311 38.9938 186.311 40.0577H194.253ZM203.268 48H200.373V28.7381H203.268V48Z"
          fill="#98FF53"/>
      <path
          d="M45.8604 21.1504C44.5857 22.5421 43.5142 24.1726 42.6805 25.9768L51.4314 34.1896L50.4829 35.2008L42.1099 27.343C41.4278 29.1433 40.9686 31.0877 40.7624 33.1205L49.3833 37.4786L48.7571 38.717L40.6557 34.6211C40.5843 36.4357 40.7134 38.3072 41.0593 40.199L48.5205 40.816L48.4069 42.1983L41.3584 41.6161C41.4135 41.8455 41.4708 42.0752 41.5324 42.3049C41.8612 43.5302 42.2701 44.7051 42.7477 45.8257C43.3977 45.7058 44.0694 45.5827 44.812 45.4429C46.7976 45.0694 48.7525 44.6963 48.7525 44.6963L49.0122 46.0576C49.0122 46.0576 47.0552 46.4327 45.0671 46.8068C44.4724 46.9187 43.8946 47.0272 43.3461 47.1292C43.9881 48.4285 44.728 49.6442 45.5472 50.7659L50.0629 48.2217L50.7426 49.43L46.4078 51.8746C47.3134 52.9723 48.299 53.9665 49.3486 54.8433L50.622 53.3334C50.7244 51.8092 50.9903 50.5335 51.6889 49.4948C52.1593 48.7953 52.8348 48.246 53.7043 47.8667C53.0909 46.9151 52.6041 45.8393 52.2849 44.6498C51.2068 40.6309 52.328 36.5978 54.9869 34.4007L45.8602 21.1504H45.8604ZM70.4151 21.1504L61.2887 34.4007C63.9476 36.5978 65.0712 40.6308 63.993 44.6498C63.6768 45.8282 63.1938 46.894 62.5874 47.839C63.5037 48.2386 64.1872 48.8411 64.6285 49.5947C65.2081 50.5842 65.4074 51.7557 65.4751 53.1176L66.9292 54.8432C67.9786 53.9664 68.9645 52.9723 69.8701 51.8744L65.533 49.43L66.2149 48.2217L70.7305 50.7659C71.5499 49.6439 72.2895 48.4287 72.9317 47.1292C72.3825 47.0272 71.803 46.9187 71.2083 46.8068C69.2202 46.4327 67.2631 46.0576 67.2631 46.0576L67.5229 44.6962C67.5229 44.6962 69.4802 45.0693 71.4658 45.4429C72.1537 45.5724 72.8417 45.7008 73.53 45.8281C74.0173 44.6836 74.4235 43.5063 74.7454 42.3049C74.807 42.0752 74.8643 41.8455 74.9193 41.6161L67.8708 42.1981L67.7573 40.8158L75.2185 40.199C75.5644 38.3072 75.6913 36.4357 75.6197 34.621L67.5183 38.7169L66.8921 37.4784L75.5154 33.1204C75.3088 31.0868 74.8507 29.1415 74.1679 27.3406L65.795 35.2007L64.8442 34.1896L73.5949 25.9768C72.761 24.1726 71.6898 22.5422 70.4151 21.1504H70.4151ZM58.0068 40.5259C57.2311 40.5259 56.5097 40.9224 55.945 41.6486C55.3802 42.3747 55.0056 43.422 55.0056 44.5942C55.0056 45.7663 55.3801 46.8135 55.9449 47.5397C56.5097 48.2659 57.2311 48.6647 58.0068 48.6647C58.7825 48.6647 59.5016 48.2659 60.0664 47.5398C60.6312 46.8136 61.0057 45.7664 61.0057 44.5943C61.0057 43.4222 60.6311 42.3749 60.0664 41.6487C59.5016 40.9226 58.7825 40.5262 58.0068 40.5262V40.5259ZM60.9477 48.7783C60.1788 49.6051 59.149 50.1396 58.0067 50.1396C56.8966 50.1396 55.8922 49.6351 55.1308 48.8478C54.9332 48.8968 54.7488 48.9505 54.5787 49.0102C53.7279 49.3085 53.214 49.7123 52.8393 50.2697C52.1572 51.2835 51.9826 53.0195 51.9555 55.4092H64.1135C64.1034 53.0676 64.0278 51.313 63.4315 50.2951C63.1035 49.7347 62.6451 49.3342 61.8312 49.0287C61.5739 48.9321 61.2796 48.8479 60.9476 48.7782L60.9477 48.7783Z"
          fill="#98FF53"/>
    </svg>

);

const navLinks = [
  {label: "Главная", href: "/", active: true},
  {label: "Услуги", href: "/services"},
  {label: "О нас", href: "/about"},
];

const rightLinks = [
  {label: "Контакты", href: "/contacts"},
  {label: "FAQ", href: "/faq"},
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
      <nav className="w-full relative z-50">
        {/* Desktop navbar */}
        <div className="hidden md:flex items-center justify-between mx-auto px-6 lg:px-10 max-w-[1696px] py-[22px] relative">
          {/* Left nav links */}
          <div className="flex items-center gap-10 lg:gap-[70px]">
            {navLinks.map((link) => (
                link.href === "/" ? (
                    <a
                        key={link.href}
                        href="/"
                        className="flex flex-col items-center gap-[3px] group relative"
                    >
                  <span
                      className={`font-montserrat text-[18px] leading-normal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${
                          link.active ? "font-semibold text-black/80 group-hover:text-black" : "font-normal text-black/80 group-hover:text-black"
                      }`}
                  >
                    {link.label}
                  </span>
                      <div
                          className="w-full h-[2px] rounded-full bg-green absolute bottom-[-3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                      />
                    </a>
                ) : (
                    <Link
                        key={link.href}
                        to={link.href}
                        className="flex flex-col items-center gap-[3px] group relative"
                    >
                  <span
                      className={`font-montserrat text-[18px] leading-normal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${
                          link.active ? "font-semibold text-black/80 group-hover:text-black" : "font-normal text-black/80 group-hover:text-black"
                      }`}
                  >
                    {link.label}
                  </span>
                      <div
                          className="w-full h-[2px] rounded-full bg-green absolute bottom-[-3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                      />
                    </Link>
                )
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
                {/*<AngelWingsIcon/>*/}
            <a href="/">
              <img src="/logo.svg" alt=""/>
            </a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6 lg:gap-[70px]">
            {rightLinks.map((link) => (
                <Link
                    key={link.href}
                    to={link.href}
                    className="font-montserrat text-[18px] font-normal text-black/80 leading-normal relative group transition-all duration-300 hover:text-black hover:-translate-y-0.5 hover:scale-105"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"/>
                </Link>
            ))}
            <button
                className="flex items-center justify-center bg-green border-2 border-green rounded-[96px] px-8 py-4 h-[60px] font-montserrat font-bold text-[18px] uppercase text-black leading-normal whitespace-nowrap transition-all duration-300 hover:bg-black hover:text-green hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              Позвонить
            </button>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden flex items-center justify-between px-5 py-4">
          {/* Logo */}
          {/*<div className="flex items-center bg-black rounded-[40px] px-4 py-2 gap-2">*/}
            <AngelWingsIcon/>
          {/*  <span className="font-montserrat font-bold text-[24px] text-green">*/}
          {/*  IT-Angel*/}
          {/*</span>*/}
          {/*</div>*/}

          {/* Hamburger */}
          <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
          >
            <span
                className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`}/>
            <span
                className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
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
              <button
                  className="mt-2 bg-green rounded-[96px] px-8 py-4 font-montserrat font-bold text-[18px] uppercase text-black">
                Позвонить
              </button>
            </div>
        )}
      </nav>
  );
}
