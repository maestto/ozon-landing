import Image from "@/components/Img";

const features = [
  {
    id: "daily",
    title: "Ежедневный отчёт в 9:00",
    image: "/assets/daily-report.png",
    imageAlt: "Пример ежедневного отчёта в Telegram",
    imageWidth: 89,
    imageHeight: 118,
  },
  {
    id: "weekly",
    title: "Динамика за неделю",
    image: "/assets/weekly-chart.png",
    imageAlt: "График динамики продаж за неделю",
    imageWidth: 104,
    imageHeight: 91,
  },
  {
    id: "stock",
    title: "Уведомление по остаткам",
    image: "/assets/stock-alert.png",
    imageAlt: "Уведомление о низких остатках товара",
    imageWidth: 92,
    imageHeight: 92,
  },
  {
    id: "team",
    title: "Доступ для сотрудников",
    image: "/assets/team-access.png",
    imageAlt: "Управление доступом для команды",
    imageWidth: 73,
    imageHeight: 63,
  },
];

function FeatureCard({
  f,
  width,
}: {
  f: (typeof features)[0];
  width?: number;
}) {
  const style = width ? { width, height: 144 } : { height: 144 };
  return (
    <article
      className="flex items-center justify-between rounded-[16px] bg-white p-[32px]"
      style={style}
    >
      <h3 className="max-w-[180px] text-[22px] font-normal leading-[1.1] text-[#272B51] sm:text-[26px] lg:text-[32px]">
        {f.title}
      </h3>
      <Image
        src={f.image}
        alt={f.imageAlt}
        width={f.imageWidth}
        height={f.imageHeight}
        className="ml-4 shrink-0 object-contain"
      />
    </article>
  );
}

function IntegrationsBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-[10px] py-[4px] text-[12px] font-medium leading-4 text-[#272B51]">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="3" cy="3" r="2" fill="#ADB4DE" />
        <circle cx="11" cy="3" r="2" fill="#ADB4DE" />
        <circle cx="3" cy="11" r="2" fill="#ADB4DE" />
        <circle cx="11" cy="11" r="2" fill="#ADB4DE" />
      </svg>
      Интеграции
    </span>
  );
}

export default function TelegramSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F7] py-[80px] lg:py-0" id="telegram">
      {/* Mobile/tablet layout */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="mb-10 flex flex-col items-center text-center">
            <IntegrationsBadge />
            <h2 className="mt-[16px] max-w-[700px] text-[32px] font-medium leading-[1.08] text-[#272B51] md:text-[40px]">
              Вся аналитика в Telegram — без входа в кабинет
            </h2>
            <p className="mt-[16px] text-[16px] text-[#545881]">
              Получайте утренние отчёты, уведомления о низких остатках и
              динамику продаж прямо в свой мессенджер.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.id} f={f} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout: absolute positioning matching Figma exactly */}
      <div className="relative hidden h-[999px] w-full lg:block">
        {/* Soft blue blob background shape */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: "calc(50% - 720px + 236px)",
            top: "97px",
            width: 969,
            height: 948,
          }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #CDE1FF 0%, transparent 60%)",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Heading area centered */}
        <div className="absolute left-1/2 top-[64px] flex w-[820px] -translate-x-1/2 flex-col items-center text-center">
          <IntegrationsBadge />
          <h2 className="mt-[24px] whitespace-nowrap text-[48px] font-medium leading-[1.08] tracking-[-0.01em] text-[#272B51]">
            Вся аналитика в Telegram —<br />
            без входа в кабинет
          </h2>
          <p className="mt-[16px] text-[18px] font-normal leading-[1.33] text-[#545881]">
            Получайте утренние отчёты, уведомления о низких остатках
            <br />
            и динамику продаж прямо в свой мессенджер.
          </p>
        </div>

        {/* Left cards */}
        <div className="absolute" style={{ left: "calc(50% - 720px + 82px)", top: "311px" }}>
          <FeatureCard f={features[0]} width={414} />
        </div>
        <div className="absolute" style={{ left: "calc(50% - 720px + 82px)", top: "471px" }}>
          <FeatureCard f={features[1]} width={414} />
        </div>

        {/* Right cards */}
        <div className="absolute" style={{ left: "calc(50% - 720px + 946px)", top: "631px" }}>
          <FeatureCard f={features[2]} width={414} />
        </div>
        <div className="absolute" style={{ left: "calc(50% - 720px + 946px)", top: "791px" }}>
          <FeatureCard f={features[3]} width={414} />
        </div>

        {/* Phone mockup */}
        <div className="absolute z-10" style={{ left: "calc(50% - 720px + 568px)", top: "311px" }}>
          <Image
            src="/assets/phone.png"
            alt="Telegram-бот Маржинатора на экране смартфона"
            width={305}
            height={624}
            className="object-contain"
          />
        </div>

        {/* -30% floating tile (overlaps left of phone) */}
        <div className="absolute z-20" style={{ left: "calc(50% - 720px + 224px)", top: "639px" }}>
          <Image
            src="/assets/minus30.png"
            alt="Снижение расходов на 30%"
            width={292}
            height={307}
            className="object-contain"
          />
        </div>

        {/* +15% floating tile (overlaps right of phone) */}
        <div className="absolute z-20" style={{ left: "calc(50% - 720px + 923px)", top: "258px" }}>
          <Image
            src="/assets/plus15.png"
            alt="Рост прибыли на 15%"
            width={326}
            height={355}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
