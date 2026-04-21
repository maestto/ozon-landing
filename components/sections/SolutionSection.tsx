import Image from "@/components/Img";

const features = [
  {
    id: "calculator",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v14M3 10h14" stroke="#0052D0" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" stroke="#0052D0" strokeWidth="1.5" />
      </svg>
    ),
    title: "Калькулятор",
    subtitle: "Актуальная маржинальность",
  },
  {
    id: "auto-update",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10a6 6 0 1 1 1.5 4" stroke="#0052D0" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 14v-4h4" stroke="#0052D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Авто-обновления",
    subtitle: "Данные каждые 15 минут",
  },
  {
    id: "telegram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 4l16 6.5L10 13l-2 5-3-4-3-10z" stroke="#0052D0" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Telegram-бот",
    subtitle: "Отчёты прямо в мессенджер",
  },
  {
    id: "sku",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="12" width="4" height="6" rx="1" fill="#0052D0" />
        <rect x="8" y="7" width="4" height="11" rx="1" fill="#0052D0" />
        <rect x="14" y="3" width="4" height="15" rx="1" fill="#0052D0" />
      </svg>
    ),
    title: "SKU прибыль",
    subtitle: "Прибыль каждого товара в деталях",
  },
  {
    id: "abc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 18l5-8 4 4 4-7 3 3" stroke="#0052D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ABC анализ",
    subtitle: "Выявление ключевых товаров",
  },
];

const benefits = [
  "Никаких ручных обновлений",
  "Учёт самовыкупов и возвратов",
  "Точность до 99.9%",
];

export default function SolutionSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 lg:py-[115px]" id="solution">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        {/* Heading */}
        <div className="mb-14 text-center lg:mb-16">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-3 py-1 text-xs font-medium text-[#272B51]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7.5L5.5 10 11 4" stroke="#ADB4DE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Решение
          </span>
          <h2 className="mx-auto max-w-[700px] text-3xl font-medium leading-tight text-[#272B51] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
            Мы автоматически собираем данные из Ozon и считаем чистую прибыль
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#545881]">
            Забудьте об Excel. Наш сервис подключается к вашему кабинету через
            API и формирует прозрачную аналитику в реальном времени.
          </p>
        </div>

        {/* Desktop bento grid */}
        <div className="relative hidden lg:block">
          {/* Decorative background circles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[863, 783, 705, 623, 541, 461, 379, 297, 215, 135].map((size) => (
                <div
                  key={size}
                  style={{ width: size, height: size }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E0E2F0]/50"
                />
              ))}
            </div>
          </div>

          {/* Main grid of cards */}
          <div className="relative grid grid-cols-4 gap-4">
            {/* Row 1: SKU + Benefits + ABC */}
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {features[3].icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">
                {features[3].title}
              </h3>
              <p className="mt-1 text-sm text-[#545881]">
                {features[3].subtitle}
              </p>
            </article>

            <article className="col-span-2 rounded-2xl bg-[#0052D0] p-6 shadow-sm">
              <ul className="space-y-3" role="list">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l2.5 2.5L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-base font-medium text-white">{b}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {features[4].icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">
                {features[4].title}
              </h3>
              <p className="mt-1 text-sm text-[#545881]">
                {features[4].subtitle}
              </p>
            </article>

            {/* Row 2: Calculator + Star image + Auto-update + Lightning image + Telegram */}
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {features[0].icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">
                {features[0].title}
              </h3>
              <p className="mt-1 text-sm text-[#545881]">
                {features[0].subtitle}
              </p>
            </article>

            <div className="relative min-h-[130px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/star.png"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {features[1].icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">
                {features[1].title}
              </h3>
              <p className="mt-1 text-sm text-[#545881]">
                {features[1].subtitle}
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {features[2].icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">
                {features[2].title}
              </h3>
              <p className="mt-1 text-sm text-[#545881]">
                {features[2].subtitle}
              </p>
            </article>
          </div>

          {/* Decorative images */}
          <div className="pointer-events-none absolute -right-4 top-8 w-32 opacity-80" aria-hidden="true">
            <Image
              src="/assets/lightning.png"
              alt=""
              width={128}
              height={143}
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute bottom-4 right-56 w-24 opacity-70" aria-hidden="true">
            <Image
              src="/assets/tiles.png"
              alt=""
              width={96}
              height={95}
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile/Tablet grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          <article className="col-span-full rounded-2xl bg-[#0052D0] p-6">
            <ul className="space-y-3" role="list">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-white">{b}</span>
                </li>
              ))}
            </ul>
          </article>

          {features.map((f) => (
            <article key={f.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF]">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-[#272B51]">{f.title}</h3>
              <p className="mt-1 text-sm text-[#545881]">{f.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
