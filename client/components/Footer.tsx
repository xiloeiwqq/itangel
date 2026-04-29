export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Left - Nav links */}
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="font-montserrat text-sm text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
            <a
              href="#"
              className="font-montserrat text-sm text-white/80 hover:text-white transition-colors"
            >
              О нас
            </a>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {/* Odnoklassniki */}
              <a
                href="#"
                aria-label="Одноклассники"
                className="text-white/60 hover:text-brand-green transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 5a3 3 0 110 6 3 3 0 010-6zm4 10.5c-.4.4-1 .5-1.5.2l-1.7-.9-1.7.9c-.2.1-.4.1-.6.1-.4 0-.7-.1-1-.4L8 15.5c-.5-.5-.5-1.2 0-1.6.4-.4 1-.5 1.5-.2l1.2.6v-.1c-1.8-.4-3.2-2-3.2-3.8 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 1.8-1.3 3.4-3.2 3.8v.1l1.2-.6c.5-.3 1.1-.2 1.5.2l1.5 1.5c.5.4.5 1.1 0 1.5z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-white/60 hover:text-brand-green transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="#"
                aria-label="Telegram"
                className="text-white/60 hover:text-brand-green transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              {/* Wolf/Angel icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4C14 4 10 8 10 12C10 16 12 18 14 19C12 20 8 22 8 28C8 33 13 36 20 36C27 36 32 33 32 28C32 22 28 20 26 19C28 18 30 16 30 12C30 8 26 4 20 4Z"
                  fill="#9EFB54"
                />
                <path
                  d="M15 14C15 14 13 11 10 10C10 10 12 16 15 17M25 14C25 14 27 11 30 10C30 10 28 16 25 17"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-montserrat text-xl font-bold text-white">
                IT-Angel
              </span>
            </div>
          </div>

          {/* Right - Legal links */}
          <div className="flex flex-col gap-3 text-right">
            <a
              href="#"
              className="font-montserrat text-sm text-white/80 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="font-montserrat text-sm text-white/80 hover:text-white transition-colors"
            >
              Договор оферты
            </a>
            <p className="font-montserrat text-sm text-white/40 mt-2">
              © CRM-Angel, 2020–2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
