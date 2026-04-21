import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 lg:py-[115px]" id="cta">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-3 py-1 text-xs font-medium text-[#272B51]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" stroke="#ADB4DE" strokeWidth="1.2" />
                <path d="M7 4v3.5l2 1.5" stroke="#ADB4DE" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Маржинатор
            </span>
            <h2 className="max-w-[700px] text-3xl font-medium leading-tight text-[#272B51] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
              Готовы увидеть свою настоящую прибыль?
            </h2>
            <p className="mt-4 text-lg text-[#545881]">
              Подключение занимает 2 минуты. Первые 14 дней — бесплатно.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0052D0] px-10 py-5 text-2xl font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </div>
    </section>
  );
}
