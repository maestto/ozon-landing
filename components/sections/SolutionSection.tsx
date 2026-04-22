import Image from "@/components/Img";

type FeatureIcon = "calculator" | "refresh" | "telegram" | "sku" | "abc";

function Icon({ variant }: { variant: FeatureIcon }) {
  const color = "#0052D0";
  switch (variant) {
    case "calculator":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke={color} strokeWidth="1.6" />
          <rect x="7" y="6" width="10" height="3" rx="0.5" stroke={color} strokeWidth="1.4" />
          <circle cx="8" cy="13" r="0.8" fill={color} />
          <circle cx="12" cy="13" r="0.8" fill={color} />
          <circle cx="16" cy="13" r="0.8" fill={color} />
          <circle cx="8" cy="17" r="0.8" fill={color} />
          <circle cx="12" cy="17" r="0.8" fill={color} />
          <circle cx="16" cy="17" r="0.8" fill={color} />
        </svg>
      );
    case "refresh":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 5h4V9M10 19H6v-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "telegram":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 11.5L20.5 4l-2.5 17L12 15l-2.5 5-1-6L3 11.5z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "sku":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="13" width="5" height="8" rx="1" fill={color} />
          <rect x="9.5" y="8" width="5" height="13" rx="1" fill={color} />
          <rect x="16" y="3" width="5" height="18" rx="1" fill={color} />
        </svg>
      );
    case "abc":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 20L8 11l4 4 4-7 5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function FeatureCard({
  variant,
  title,
  subtitle,
  className,
}: {
  variant: FeatureIcon;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-[130px] w-[308px] flex-col justify-between rounded-[16px] bg-white p-[24px] shadow-[0_4px_20px_rgba(0,30,88,0.04)] ${className ?? ""}`}
    >
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#EEF4FF]">
        <Icon variant={variant} />
      </div>
      <div>
        <h3 className="text-[16px] font-semibold leading-[1.3] text-[#272B51]">{title}</h3>
        <p className="mt-[4px] text-[12px] font-normal leading-[1.3] text-[#545881]">{subtitle}</p>
      </div>
    </article>
  );
}

function BenefitsCard() {
  const items = [
    "Никаких ручных обновлений",
    "Учёт самовыкупов и возвратов",
    "Точность до 99.9%",
  ];
  return (
    <article className="flex h-[137px] w-[308px] flex-col justify-center gap-[12px] rounded-[16px] bg-[#0052D0] p-[24px]">
      <ul className="space-y-[10px]" role="list">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-[10px]">
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white/20">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path
                  d="M2 5l2 2 4-4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[15px] font-medium leading-[1.3] text-white">{t}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F7] py-[80px] lg:py-0" id="solution">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        {/* Mobile/tablet: simple stack */}
        <div className="lg:hidden">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-[10px] py-[4px] text-[12px] font-medium text-[#272B51]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7.5L5.5 10 11 4" stroke="#ADB4DE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Решение
            </span>
            <h2 className="mt-[16px] max-w-[700px] text-[32px] font-medium leading-[1.08] text-[#272B51] md:text-[40px]">
              Мы автоматически собираем данные из Ozon и считаем чистую прибыль
            </h2>
            <p className="mt-[16px] text-[16px] text-[#545881]">
              Забудьте об Excel. Наш сервис подключается к вашему кабинету через
              API и формирует прозрачную аналитику в реальном времени.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <BenefitsCard />
            <FeatureCard variant="sku" title="SKU прибыль" subtitle="Прибыль каждого товара в деталях" />
            <FeatureCard variant="abc" title="ABC анализ" subtitle="Выявление ключевых товаров" />
            <FeatureCard variant="calculator" title="Калькулятор" subtitle="Актуальная маржинальность" />
            <FeatureCard variant="telegram" title="Telegram-бот" subtitle="Отчёты прямо в мессенджер" />
            <FeatureCard variant="refresh" title="Авто-обновления" subtitle="Данные каждые 15 минут" />
          </div>
        </div>
      </div>

      {/* Desktop: exact scattered layout from Figma */}
      <div className="relative hidden h-[1111px] w-full lg:block">
        {/* Concentric circles background */}
        <div
          className="pointer-events-none absolute left-1/2 top-[684px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          {[863, 783, 705, 623, 541, 461, 379, 297, 215, 135].map((s, i) => (
            <div
              key={s}
              style={{ width: s, height: s }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C5CFE6]"
            />
          ))}
        </div>

        {/* Decorative images */}
        <div
          className="pointer-events-none absolute"
          style={{ left: "calc(50% - 720px + 287px)", top: "415px" }}
          aria-hidden="true"
        >
          <Image src="/assets/star.png" alt="" width={332} height={330} />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{ left: "calc(50% - 720px + 857px)", top: "388px" }}
          aria-hidden="true"
        >
          <Image src="/assets/lightning.png" alt="" width={254} height={283} />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{ left: "calc(50% - 720px + 740px)", top: "740px" }}
          aria-hidden="true"
        >
          <Image src="/assets/tiles.png" alt="" width={136} height={135} />
        </div>

        {/* Heading + badge */}
        <div className="absolute left-1/2 top-[64px] flex w-[820px] -translate-x-1/2 flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-[10px] py-[4px] text-[12px] font-medium leading-4 text-[#272B51]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7.5L5.5 10 11 4"
                stroke="#ADB4DE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Решение
          </span>
          <h2 className="mt-[24px] whitespace-nowrap text-[48px] font-medium leading-[1.08] tracking-[-0.01em] text-[#272B51]">
            Мы автоматически собираем
            <br />
            данные из Ozon и считаем
            <br />
            чистую прибыль
          </h2>
          <p className="mt-[16px] text-[18px] font-normal leading-[1.33] text-[#545881]">
            Забудьте об Excel. Наш сервис подключается к вашему кабинету через
            API
            <br />
            и формирует прозрачную аналитику в реальном времени.
          </p>
        </div>

        {/* Cards positioned absolutely per Figma */}
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 296px)", top: "385px" }}
        >
          <FeatureCard variant="sku" title="SKU прибыль" subtitle="Прибыль каждого товара в деталях" />
        </div>
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 836px)", top: "385px" }}
        >
          <FeatureCard variant="abc" title="ABC анализ" subtitle="Выявление ключевых товаров" />
        </div>
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 566px)", top: "571px" }}
        >
          <BenefitsCard />
        </div>
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 80px)", top: "627px" }}
        >
          <FeatureCard variant="calculator" title="Калькулятор" subtitle="Актуальная маржинальность" />
        </div>
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 1052px)", top: "627px" }}
        >
          <FeatureCard variant="telegram" title="Telegram-бот" subtitle="Отчёты прямо в мессенджер" />
        </div>
        <div
          className="absolute"
          style={{ left: "calc(50% - 720px + 566px)", top: "853px" }}
        >
          <FeatureCard variant="refresh" title="Авто-обновления" subtitle="Данные каждые 15 минут" />
        </div>
      </div>
    </section>
  );
}
