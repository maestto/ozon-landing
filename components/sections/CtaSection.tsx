import Link from "next/link";

// Badge "Маржинатор" — shield+checkmark icon (Figma `91:3828`)
function MarginatorBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[27px] items-center gap-1 rounded-[27px] border border-white bg-[#F7F7F7] px-[10px] py-[5px] text-[12px] font-medium leading-4 tracking-[-1px] text-[#272B51] shadow-[0_-6px_6px_-5px_rgba(255,255,255,1),0_10px_10px_rgba(28,28,28,0.08),0_2px_2px_rgba(28,28,28,0.02)] ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M11.8125 6.125V3.0625C11.8125 2.821 11.6165 2.625 11.375 2.625H2.625C2.3835 2.625 2.1875 2.821 2.1875 3.0625V6.125C2.1875 11.375 7 12.6875 7 12.6875C7 12.6875 11.8125 11.375 11.8125 6.125Z"
          stroke="#ADB4DE"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.8125 7.4375L6.125 8.75L9.1875 5.6875"
          stroke="#ADB4DE"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Маржинатор
    </span>
  );
}

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative bg-[#F7F7F7]"
    >
      {/* Mobile (390 × 343) */}
      <div className="relative mx-auto flex h-[343px] w-[390px] flex-col items-center min-[744px]:hidden">
        <MarginatorBadge className="mt-[40px]" />
        <h2
          className="mt-[16px] w-[358px] text-center text-[28px] font-medium leading-[32px] text-[#272B51]"
          style={{ letterSpacing: "-2px" }}
        >
          Готовы увидеть свою настоящую прибыль?
        </h2>
        <p
          className="mt-[16px] w-[358px] text-center text-[14px] font-normal leading-5 text-[#545881]"
          style={{ letterSpacing: "-1px" }}
        >
          Подключение занимает 2 минуты.
          <br />
          Первые 14 дней — бесплатно.
        </p>
        <Link
          href="#"
          className="mt-[24px] inline-flex h-[60px] items-center justify-center rounded-full bg-[#0052D0] px-[40px] text-[20px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
          style={{ letterSpacing: "-1px" }}
        >
          Попробовать бесплатно
        </Link>
      </div>

      {/* Tablet (744 × 343) */}
      <div className="relative mx-auto hidden h-[343px] w-[744px] flex-col items-center min-[744px]:flex xl:hidden">
        <MarginatorBadge className="mt-[40px]" />
        <h2
          className="mt-[16px] w-[680px] text-center text-[40px] font-medium leading-[44px] text-[#272B51]"
          style={{ letterSpacing: "-2px" }}
        >
          Готовы увидеть свою настоящую прибыль?
        </h2>
        <p
          className="mt-[16px] text-center text-[18px] font-normal leading-6 text-[#545881]"
          style={{ letterSpacing: "-1px" }}
        >
          Подключение занимает 2 минуты. Первые 14 дней — бесплатно.
        </p>
        <Link
          href="#"
          className="mt-[24px] inline-flex h-[71.58px] items-center justify-center rounded-full bg-[#0052D0] px-[48px] text-[24px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
          style={{ letterSpacing: "-1px" }}
        >
          Попробовать бесплатно
        </Link>
      </div>

      {/* Desktop (1440 × 419) */}
      <div className="relative mx-auto hidden h-[419px] w-[1440px] xl:block">
        <MarginatorBadge className="absolute left-[667px] top-[64px]" />
        <h2
          className="absolute left-[370px] top-[115px] w-[700px] text-center text-[48px] font-medium leading-[50px] text-[#272B51]"
          style={{ letterSpacing: "-2px" }}
        >
          Готовы увидеть свою
          <br />
          настоящую прибыль?
        </h2>
        <p
          className="absolute left-[370px] top-[231px] w-[700px] text-center text-[18px] font-normal leading-6 text-[#545881]"
          style={{ letterSpacing: "-1px" }}
        >
          Подключение занимает 2 минуты. Первые 14 дней — бесплатно.
        </p>
        <Link
          href="#"
          className="absolute left-[535px] top-[287px] inline-flex h-[71.58px] w-[389.47px] items-center justify-center rounded-full bg-[#0052D0] text-[24px] font-bold text-white shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#0048B9]"
          style={{ letterSpacing: "-1px" }}
        >
          Попробовать бесплатно
        </Link>
      </div>
    </section>
  );
}
