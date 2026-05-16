"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto hidden h-[74px] w-full max-w-[1280px] items-center justify-between px-5 xl:flex xl:px-0">
        <Link
          href="/"
          className="text-[24px] font-semibold leading-[32px] tracking-[-2px] text-white"
          aria-label="Маржинатор — главная страница"
        >
          Маржинатор
        </Link>

        <ul className="flex items-center gap-8" role="list">
          <li>
            <Link
              href="#solution"
              className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
              style={{ letterSpacing: "-0.01em" }}
            >
              Возможности
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
              style={{ letterSpacing: "-0.01em" }}
            >
              Как это работает
            </Link>
          </li>
          <li>
            <Link
              href="#telegram"
              className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
              style={{ letterSpacing: "-0.01em" }}
            >
              Telegram — бот
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[20px]">
            <Link
              href="/login"
              className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
              style={{ letterSpacing: "-0.01em" }}
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="inline-flex h-[44px] items-center rounded-full bg-[#0052D0] px-6 text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-[#0052D0]"
            >
              Попробовать бесплатно
            </Link>
        </div>
      </nav>

      {!isMenuOpen && (
        <nav className="mx-auto flex h-[56px] w-full items-center justify-between px-4 min-[744px]:px-8 xl:hidden">
          <Link
            href="/"
            className="text-[24px] font-semibold leading-[32px] tracking-[-2px] text-white"
            aria-label="Маржинатор — главная страница"
          >
            Маржинатор
          </Link>

          <div className="flex items-center gap-2 min-[744px]:gap-4">
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center text-white"
              aria-label="Открыть меню"
              aria-expanded="false"
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <Link
              href="/login"
              className="inline-flex h-[42px] w-[105px] items-center justify-center rounded-full bg-[#0052D0] text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-[#0052D0]"
            >
              Войти
            </Link>
          </div>
        </nav>
      )}

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="relative z-30 mx-auto h-[208px] w-full bg-[#000115] px-4 pb-2 pt-2 min-[744px]:px-8 xl:hidden"
        >
          <div className="flex h-10 items-center justify-between">
            <Link
              href="/"
              className="text-[24px] font-semibold leading-[32px] tracking-[-2px] text-[#404150]"
              aria-label="Маржинатор — главная страница"
              onClick={() => setIsMenuOpen(false)}
            >
              Маржинатор
            </Link>

            <div className="flex items-center gap-2 min-[744px]:gap-4">
              <button
                type="button"
                className="inline-flex h-6 w-6 items-center justify-center text-white"
                aria-label="Закрыть меню"
                aria-expanded="true"
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.34375 17.6567L17.6562 6.34326M6.34375 6.34326L17.6562 17.6567"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <Link
                href="/login"
                className="inline-flex h-[42px] w-[105px] items-center justify-center text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
                onClick={() => setIsMenuOpen(false)}
              >
                Войти
              </Link>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-4">
            <li>
              <Link
                href="#solution"
                className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
                style={{ letterSpacing: "-0.01em" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Возможности
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
                style={{ letterSpacing: "-0.01em" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Как это работает
              </Link>
            </li>
            <li>
              <Link
                href="#telegram"
                className="text-[16px] font-normal leading-6 text-white transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#ADB4DE]"
                style={{ letterSpacing: "-0.01em" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Telegram - бот
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
