import Link from "next/link";
import Footer from "@/components/Footer";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Concentric blue rings — identical pattern to SolutionSection but standalone here.
function Rings({ sizes }: { sizes: number[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{ opacity: 0.25 }}
    >
      {sizes.map((s, i) => (
        <span
          key={s}
          style={{
            width: s,
            height: s,
            opacity: 1 - i * 0.1,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#4C93FF]"
        />
      ))}
    </div>
  );
}

const ringsDesktop = [863, 783, 705, 623, 541, 461, 379, 297, 215, 135];
const ringsTablet = [517, 470, 422, 374, 326, 278, 230, 182, 134, 86];
const ringsMobile = [517, 470, 422, 374, 326, 278, 230, 182, 134, 86];

// Light-bg header (blue text) — used only on 404 page.
function HeaderLight() {
  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto hidden h-[74px] w-full max-w-[1280px] items-center justify-between px-5 xl:flex xl:px-0">
        <Link
          href="/"
          className="text-[24px] font-semibold leading-[32px] tracking-[-2px] text-[#001E58]"
        >
          Маржинатор
        </Link>
        <ul className="flex items-center gap-8" role="list">
          {[
            { href: "/#solution", label: "Возможности" },
            { href: "/#how-it-works", label: "Как это работает" },
            { href: "/#telegram", label: "Telegram — бот" },
          ].map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="text-[16px] font-normal leading-6 text-[#001E58] transition-colors duration-300 hover:text-[#0052D0]"
                style={{ letterSpacing: "-0.01em" }}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[20px]">
          <Link
            href="#"
            className="text-[16px] font-normal leading-6 text-[#001E58]"
            style={{ letterSpacing: "-0.01em" }}
          >
            Войти
          </Link>
          <Link
            href="#"
            className="inline-flex h-[44px] items-center rounded-full bg-[#0052D0] px-6 text-[16px] font-normal leading-6 text-[#F7F7F7] transition-colors duration-300 hover:bg-[#0048B9]"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </nav>

      <nav className="mx-auto flex h-[56px] w-full items-center justify-between px-4 min-[744px]:px-8 xl:hidden">
        <Link
          href="/"
          className="text-[24px] font-semibold leading-[32px] tracking-[-2px] text-[#001E58]"
        >
          Маржинатор
        </Link>
        <Link
          href="#"
          className="inline-flex h-[42px] w-[105px] items-center justify-center rounded-full bg-[#0052D0] text-[16px] font-normal leading-6 text-white"
        >
          Войти
        </Link>
      </nav>
    </header>
  );
}

export default function NotFound() {
  return (
    <main>
      {/* Mobile (390 × ~640 hero + footer 777) */}
      <section className="relative overflow-hidden bg-[#F7F7F7] min-[744px]:hidden">
        <div className="relative mx-auto h-[640px] w-[390px]">
          <HeaderLight />
          {/* Concentric circles centered around 404 */}
          <div
            className="pointer-events-none absolute"
            style={{ left: -64, top: 175, width: 517, height: 517 }}
            aria-hidden="true"
          >
            <Rings sizes={ringsMobile} />
          </div>
          <img
            src={`${base}/assets/404-vector-mobile.svg`}
            alt="404"
            className="pointer-events-none absolute z-[2]"
            style={{ left: 37, top: 176, width: 316, height: 131 }}
          />
          <h1
            className="absolute left-[34px] top-[344px] z-[2] w-[322px] text-center text-[36px] font-medium leading-[44px] text-[#001E58]"
            style={{ letterSpacing: "-2px" }}
          >
            Что-то пошло не так :(
          </h1>
          <Link
            href="/"
            className="absolute left-1/2 top-[508px] z-[2] inline-flex h-[60px] w-[358px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0052D0] text-[20px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
            style={{ letterSpacing: "-1px" }}
          >
            На главную
          </Link>
        </div>
      </section>

      {/* Tablet (744 × 705 hero + footer 398) */}
      <section className="relative hidden overflow-hidden bg-[#F7F7F7] min-[744px]:block xl:hidden">
        <div className="relative mx-auto h-[705px] w-[744px]">
          <HeaderLight />
          <div
            className="pointer-events-none absolute"
            style={{ left: 113, top: 200, width: 517, height: 517 }}
            aria-hidden="true"
          >
            <Rings sizes={ringsTablet} />
          </div>
          <img
            src={`${base}/assets/404-vector-tablet.svg`}
            alt="404"
            className="pointer-events-none absolute z-[2]"
            style={{ left: 117, top: 168, width: 510, height: 211 }}
          />
          <h1
            className="absolute left-1/2 top-[443px] z-[2] -translate-x-1/2 whitespace-nowrap text-[48px] font-medium leading-[50px] text-[#001E58]"
            style={{ letterSpacing: "-2px" }}
          >
            Что-то пошло не так :(
          </h1>
          <Link
            href="/"
            className="absolute left-1/2 top-[525px] z-[2] inline-flex h-[71.58px] w-[376.84px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0052D0] text-[24px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
            style={{ letterSpacing: "-1px" }}
          >
            На главную
          </Link>
        </div>
      </section>

      {/* Desktop (1440 × 797 hero + footer 387) */}
      <section className="relative hidden overflow-hidden bg-[#F7F7F7] xl:block">
        <div className="relative mx-auto h-[797px] w-[1440px]">
          <HeaderLight />
          <div
            className="pointer-events-none absolute"
            style={{ left: 289, top: 145, width: 863, height: 863 }}
            aria-hidden="true"
          >
            <Rings sizes={ringsDesktop} />
          </div>
          <img
            src={`${base}/assets/404-vector-desktop.svg`}
            alt="404"
            className="pointer-events-none absolute z-[2]"
            style={{ left: 465, top: 186, width: 510, height: 211 }}
          />
          <h1
            className="absolute left-1/2 top-[461px] z-[2] -translate-x-1/2 whitespace-nowrap text-[48px] font-medium leading-[50px] text-[#001E58]"
            style={{ letterSpacing: "-2px" }}
          >
            Что-то пошло не так :(
          </h1>
          <Link
            href="/"
            className="absolute left-[535px] top-[543px] z-[2] inline-flex h-[71.58px] w-[389.47px] items-center justify-center rounded-full bg-[#0052D0] text-[24px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
            style={{ letterSpacing: "-1px" }}
          >
            На главную
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
