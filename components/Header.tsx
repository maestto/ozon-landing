import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full pt-4 pb-4">
      <nav className="mx-auto flex h-[42px] max-w-[1280px] items-center justify-between px-5 lg:px-0">
        <Link
          href="/"
          className="text-[20px] font-semibold leading-[28px] text-white md:text-[24px] md:leading-[32px]"
          aria-label="Маржинатор — главная страница"
        >
          Маржинатор
        </Link>

        <ul className="hidden items-center gap-[30px] md:flex" role="list">
          <li>
            <Link
              href="#solution"
              className="text-[16px] font-normal leading-6 text-white transition-opacity hover:opacity-80"
            >
              Возможности
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-[16px] font-normal leading-6 text-white transition-opacity hover:opacity-80"
            >
              Как это работает
            </Link>
          </li>
          <li>
            <Link
              href="#telegram"
              className="text-[16px] font-normal leading-6 text-white transition-opacity hover:opacity-80"
            >
              Telegram — бот
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[20px]">
          <Link
            href="/login"
            className="hidden text-[16px] font-normal leading-6 text-white transition-opacity hover:opacity-80 md:block"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="inline-flex h-[38px] items-center rounded-full bg-[#0052D0] px-[16px] text-[13px] font-medium text-white transition-colors hover:bg-[#0047B8] md:h-[42px] md:px-[28px] md:text-[16px]"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </nav>
    </header>
  );
}
