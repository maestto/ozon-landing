import Image from "next/image";

const problems = [
  {
    id: "revenue",
    icon: "💰",
    title: "Выручка есть — прибыли нет",
    description:
      "Многие селлеры радуются миллионным оборотам, не замечая, что чистая прибыль после всех вычетов стремится к нулю или уходит в минус.",
    wide: true,
    dark: false,
    cta: "Узнать свою прибыль",
  },
  {
    id: "products",
    icon: "📊",
    title: "Непонятно, какие товары реально прибыльные",
    description:
      "Хиты продаж могут быть убыточными из-за стоимости хранения и рекламы.",
    wide: false,
    dark: true,
  },
  {
    id: "tables",
    icon: "📋",
    title: "Таблицы, отчёты, хаос",
    description:
      "Бесконечные Excel-файлы, в которых легко допустить ошибку и потерять деньги.",
    wide: false,
    dark: false,
  },
  {
    id: "commissions",
    icon: "💸",
    title: "Комиссии и расходы съедают маржу",
    description:
      "Ozon меняет тарифы, стоимость логистики растёт, а ваши отчёты за этим не успевают. Мы считаем всё до копейки автоматически.",
    wide: true,
    dark: true,
    withImage: true,
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 lg:py-[115px]" id="problems">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        <div className="mb-10 lg:mb-12">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-3 py-1 text-xs font-medium text-[#272B51]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="5" stroke="#ADB4DE" strokeWidth="1.2" />
              <path d="M7 4v3.5l2 1.5" stroke="#ADB4DE" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Проблема
          </span>
          <h2 className="text-3xl font-medium leading-tight text-[#272B51] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
            Вы не знаете, сколько реально зарабатываете
          </h2>
          <p className="mt-3 max-w-[700px] text-lg text-[#545881]">
            Основные проблемы селлеров, которые мы решаем
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Row 1: wide card left, small card right */}
          <article className="relative overflow-hidden rounded-2xl bg-white p-8 lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F7]">
              <span className="text-xl" aria-hidden="true">💰</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#272B51] lg:text-2xl">
              Выручка есть — прибыли нет
            </h3>
            <p className="text-base text-[#545881]">
              Многие селлеры радуются миллионным оборотам, не замечая, что
              чистая прибыль после всех вычетов стремится к нулю или уходит в
              минус.
            </p>
            <a
              href="/register"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0052D0] hover:underline"
            >
              Узнать свою прибыль
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>

          <article className="rounded-2xl bg-[#001E58] p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <span className="text-xl" aria-hidden="true">📊</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white lg:text-2xl">
              Непонятно, какие товары реально прибыльные
            </h3>
            <p className="text-base text-[#ADB4DE]">
              Хиты продаж могут быть убыточными из-за стоимости хранения и
              рекламы.
            </p>
          </article>

          {/* Row 2: small card left, wide card right */}
          <article className="rounded-2xl bg-white p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F7]">
              <span className="text-xl" aria-hidden="true">📋</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#272B51] lg:text-2xl">
              Таблицы, отчёты, хаос
            </h3>
            <p className="text-base text-[#545881]">
              Бесконечные Excel-файлы, в которых легко допустить ошибку и
              потерять деньги.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-[#0052D0] p-8 lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <span className="text-xl" aria-hidden="true">💸</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white lg:text-2xl">
              Комиссии и расходы съедают маржу
            </h3>
            <p className="max-w-[500px] text-base text-[#ADB4DE]">
              Ozon меняет тарифы, стоимость логистики растёт, а ваши отчёты за
              этим не успевают. Мы считаем всё до копейки автоматически.
            </p>
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <Image
                src="/assets/commission-card.png"
                alt="Пример аналитики комиссий"
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
