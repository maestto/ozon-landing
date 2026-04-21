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
];

export default function Footer() {
  return (
    <footer className="bg-[#001E58] py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold text-white"
              aria-label="Маржинатор — главная"
            >
              Маржинатор
            </Link>
            <p className="mt-4 text-base font-semibold leading-relaxed text-[#ADB4DE]">
              Аналитика прибыли для продавцов Ozon. Автоматически, точно, без
              лишнего.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация по сайту">
            <h3 className="mb-5 text-base font-semibold text-white">
              Навигация
            </h3>
            <ul className="space-y-4" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-[#ADB4DE] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Информация о компании">
            <h3 className="mb-5 text-base font-semibold text-white">
              Компания
            </h3>
            <ul className="space-y-4" role="list">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-[#ADB4DE] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Правовая информация">
            <h3 className="mb-5 text-base font-semibold text-white">
              Правовое
            </h3>
            <ul className="space-y-4" role="list">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-[#ADB4DE] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
