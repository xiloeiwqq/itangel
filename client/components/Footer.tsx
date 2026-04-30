export default function Footer() {
  return (
    <footer className="bg-[rgba(55,55,55,1)] py-10">
      <div className="relative flex flex-row justify-between items-start w-[1518px] mx-auto">
          {/* Left - Nav links */}
          <div className="flex flex-col justify-center items-start gap-[25px]">
            <a
              href="#"
              className="font-montserrat text-[18px] text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
            <a
              href="#"
              className="font-montserrat text-[18px] text-white/80 hover:text-white transition-colors"
            >
              О нас
            </a>
            {/* Social icons */}
            <div className="flex gap-[13px] mt-0 text-left">
              {/* Max */}
              <a
                href="#"
                aria-label="Max"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-white/80 transition-colors duration-200 hover:text-[#9EFB54]"
              >
                <span
                  aria-hidden="true"
                  className="h-[23px] w-[23px] bg-current"
                  style={{
                    maskImage: "url('/max.svg')",
                    WebkitMaskImage: "url('/max.svg')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </a>
              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-white/80 transition-colors duration-200 hover:text-[#9EFB54]"
              >
                <span
                  aria-hidden="true"
                  className="h-[23px] w-[23px] bg-current"
                  style={{
                    maskImage: "url('/Whatsapp.svg')",
                    WebkitMaskImage: "url('/Whatsapp.svg')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </a>
              {/* Telegram */}
              <a
                href="#"
                aria-label="Telegram"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-white/80 transition-colors duration-200 hover:text-[#9EFB54]"
              >
                <span
                  aria-hidden="true"
                  className="h-[19px] w-[22px] bg-current"
                  style={{
                    maskImage: "url('/telegram.svg')",
                    WebkitMaskImage: "url('/telegram.svg')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </a>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <a href="/" aria-label="На главную">
              <img
                src="/footer-logo.svg"
                alt="IT-Angel"
                className="h-auto w-[244px] max-w-full"
              />
            </a>
          </div>

          {/* Right - Legal links */}
          <div className="flex flex-col justify-start items-end gap-[25px] text-left">
            <a
              href="#"
              className="font-montserrat text-[18px] text-white/80 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="font-montserrat text-[18px] text-white/80 hover:text-white transition-colors"
            >
              Договор оферты
            </a>
            <p className="font-montserrat text-[18px] text-white/40 mt-0">
              © CRM-Angel, 2020–2025
            </p>
          </div>
      </div>
    </footer>
  );
}
