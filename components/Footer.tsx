import Link from "next/link";

const nav = [
  { label: "Возможности", href: "#solution" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Telegram-бот", href: "#telegram" },
];

const company = [
  { label: "О сервисе", href: "#" },
  { label: "Помощь", href: "#" },
  { label: "Связаться с нами", href: "#" },
];

const legal = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Условия использования", href: "#" },
  { label: "Оферта", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex min-h-[387px] flex-col justify-between bg-[#001E58] pb-[48px] pt-[72px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-0">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[300px_170px_180px_1fr] lg:gap-x-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-[24px] font-semibold leading-8 text-white"
              aria-label="Маржинатор — главная"
            >
              Маржинатор
            </Link>
            <p className="mt-[12px] max-w-[300px] text-[16px] font-semibold leading-[1.5] text-[#ADB4DE]">
              Аналитика прибыли для продавцов Ozon. Автоматически, точно, без
              лишнего.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация по сайту">
            <h3 className="mb-[20px] text-[16px] font-semibold leading-6 text-white">
              Навигация
            </h3>
            <ul className="space-y-[16px]" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-semibold leading-6 text-[#ADB4DE] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Информация о компании">
            <h3 className="mb-[20px] text-[16px] font-semibold leading-6 text-white">
              Компания
            </h3>
            <ul className="space-y-[16px]" role="list">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-semibold leading-6 text-[#ADB4DE] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Правовая информация">
            <h3 className="mb-[20px] text-[16px] font-semibold leading-6 text-white">
              Правовое
            </h3>
            <ul className="space-y-[16px]" role="list">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-semibold leading-6 text-[#ADB4DE] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-[48px] w-full max-w-[1280px] px-5 lg:px-0">
        <p className="text-[14px] font-semibold leading-5 text-[#ADB4DE]/60">
          © 2025 Маржинатор
        </p>
      </div>
    </footer>
  );
}
