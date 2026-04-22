import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="bg-[#F7F7F7] py-[54px] lg:py-[54px]"
      id="cta"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-[10px] py-[4px] text-[12px] font-medium leading-4 text-[#272B51]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3.5 4.5L7 2l3.5 2.5v4L7 11l-3.5-2.5v-4z"
                stroke="#ADB4DE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 7L6.5 8 8.5 6"
                stroke="#ADB4DE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Маржинатор
          </span>
          <h2 className="mt-[24px] max-w-[700px] text-[32px] font-medium leading-[1.08] text-[#272B51] md:text-[40px] lg:text-[48px]">
            Готовы увидеть свою
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            настоящую прибыль?
          </h2>
          <p className="mt-[16px] text-[16px] font-normal leading-[1.33] text-[#545881] lg:text-[18px]">
            Подключение занимает 2 минуты. Первые 14 дней — бесплатно.
          </p>
          <Link
            href="/register"
            className="mt-[40px] inline-flex items-center justify-center rounded-full bg-[#0052D0] px-[48px] py-[20px] text-[20px] font-bold text-white shadow-[0_20px_40px_-10px_rgba(0,82,208,0.3)] transition-colors hover:bg-[#0047B8] lg:text-[24px]"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </div>
    </section>
  );
}
