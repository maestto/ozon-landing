import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-5">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 lg:px-0">
        <Link
          href="/"
          className="text-2xl font-semibold text-white leading-8"
          aria-label="Маржинатор — главная страница"
        >
          Маржинатор
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          <li>
            <Link
              href="#solution"
              className="text-base text-white/80 hover:text-white transition-colors"
            >
              Возможности
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-base text-white/80 hover:text-white transition-colors"
            >
              Как это работает
            </Link>
          </li>
          <li>
            <Link
              href="#telegram"
              className="text-base text-white/80 hover:text-white transition-colors"
            >
              Telegram-бот
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-base text-white/80 hover:text-white transition-colors md:block"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-full bg-[#0052D0] px-5 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </nav>
    </header>
  );
}
