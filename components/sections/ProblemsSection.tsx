import Image from "@/components/Img";

function ProblemBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-[10px] py-[4px] text-[12px] font-medium leading-4 text-[#272B51]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5" stroke="#ADB4DE" strokeWidth="1.2" />
        <path
          d="M7 4v3.5l2 1.5"
          stroke="#ADB4DE"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      Проблема
    </span>
  );
}

function CardIcon({
  variant,
  tone = "light",
}: {
  variant: "revenue" | "products" | "tables" | "money";
  tone?: "light" | "dark";
}) {
  const bg = tone === "light" ? "bg-[#F7F7F7]" : "bg-white/15";
  const stroke = tone === "light" ? "#545881" : "#FFFFFF";

  const icons = {
    revenue: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke={stroke} strokeWidth="1.2" />
        <circle cx="7" cy="7" r="1.5" stroke={stroke} strokeWidth="1.2" />
        <circle cx="3.5" cy="7" r="0.5" fill={stroke} />
        <circle cx="10.5" cy="7" r="0.5" fill={stroke} />
      </svg>
    ),
    products: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1.5 11L5 7.5L7.5 10L12.5 4.5" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 4.5h3.5V8" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tables: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1.5" y="2" width="11" height="10" rx="1" stroke={stroke} strokeWidth="1.2" />
        <path d="M1.5 5.5h11M5 2v10M9 2v10" stroke={stroke} strokeWidth="1.2" />
      </svg>
    ),
    money: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1.5" y="3.5" width="11" height="7" rx="1" stroke={stroke} strokeWidth="1.2" />
        <circle cx="7" cy="7" r="1.5" stroke={stroke} strokeWidth="1.2" />
      </svg>
    ),
  };

  return (
    <div className={`flex h-[40px] w-[40px] items-center justify-center rounded-[10px] ${bg}`}>
      {icons[variant]}
    </div>
  );
}

export default function ProblemsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7F7F7] pb-[64px] pt-[64px] lg:pb-0 lg:pt-[64px]"
      id="problems"
    >
      {/* Decorative dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #D4D8EB 1px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-0">
        {/* Heading block centered */}
        <div className="mb-[48px] flex flex-col items-center text-center lg:mb-[96px]">
          <ProblemBadge />
          <h2 className="mt-[24px] max-w-[700px] text-[32px] font-medium leading-[1.04] text-[#272B51] md:text-[40px] lg:text-[48px]">
            Вы не знаете, сколько реально зарабатываете
          </h2>
          <p className="mt-[16px] text-[16px] font-normal leading-[1.33] text-[#545881] lg:text-[18px]">
            Основные проблемы селлеров, которые мы решаем
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:auto-rows-[260px]">
          <article className="relative overflow-hidden rounded-[16px] bg-white p-[32px] lg:col-span-2">
            <CardIcon variant="revenue" tone="light" />
            <h3 className="mt-[24px] text-[20px] font-bold leading-[1.2] text-[#272B51] lg:text-[24px]">
              Выручка есть — прибыли нет
            </h3>
            <p className="mt-[12px] max-w-[540px] text-[16px] leading-[1.4] text-[#545881]">
              Многие селлеры радуются миллионным оборотам, не замечая, что
              чистая прибыль после всех вычетов стремится к нулю или уходит в
              минус.
            </p>
            <a
              href="/register"
              className="mt-[20px] inline-flex items-center gap-[6px] text-[14px] font-medium text-[#272B51] hover:underline"
            >
              Узнать свою прибыль
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>

          <article className="rounded-[16px] bg-[#001E58] p-[32px]">
            <CardIcon variant="products" tone="dark" />
            <h3 className="mt-[24px] text-[20px] font-bold leading-[1.2] text-white lg:text-[24px]">
              Непонятно, какие товары
              <br />
              реально прибыльные
            </h3>
            <p className="mt-[12px] text-[16px] leading-[1.4] text-[#ADB4DE]">
              Хиты продаж могут быть убыточными
              <br />
              из-за стоимости хранения и рекламы.
            </p>
          </article>

          <article className="rounded-[16px] bg-white p-[32px]">
            <CardIcon variant="tables" tone="light" />
            <h3 className="mt-[24px] text-[20px] font-bold leading-[1.2] text-[#272B51] lg:text-[24px]">
              Таблицы, отчёты, хаос
            </h3>
            <p className="mt-[12px] text-[16px] leading-[1.4] text-[#545881]">
              Бесконечные Excel-файлы, в которых
              <br />
              легко допустить ошибку и потерять
              <br />
              деньги.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[16px] bg-[#0052D0] p-[32px] lg:col-span-2">
            <CardIcon variant="money" tone="dark" />
            <h3 className="mt-[24px] text-[20px] font-bold leading-[1.2] text-white lg:text-[24px]">
              Комиссии и расходы съедают маржу
            </h3>
            <p className="mt-[12px] max-w-[480px] text-[16px] leading-[1.4] text-[#ADB4DE]">
              Ozon меняет тарифы, стоимость логистики растёт, а ваши отчёты за
              этим не успевают. Мы считаем всё до копейки автоматически.
            </p>
            <div className="absolute bottom-[16px] right-[32px] hidden lg:block">
              <Image
                src="/assets/commission-card.png"
                alt="Иллюстрация комиссий и расходов"
                width={228}
                height={189}
                className="object-contain"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
