import Image from "next/image";

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

function FeatureCard({ f }: { f: (typeof features)[0] }) {
  return (
    <article className="flex items-center justify-between overflow-hidden rounded-2xl bg-white p-6">
      <h3 className="max-w-[180px] text-2xl font-normal leading-tight text-[#272B51] lg:text-[32px]">
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

export default function TelegramSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 lg:py-[115px]" id="telegram">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
        {/* Heading */}
        <div className="mb-14">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#E0E2F0] bg-white px-3 py-1 text-xs font-medium text-[#272B51]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="3" cy="3" r="2" fill="#ADB4DE" />
              <circle cx="11" cy="3" r="2" fill="#ADB4DE" />
              <circle cx="7" cy="11" r="2" fill="#ADB4DE" />
            </svg>
            Интеграции
          </span>
          <h2 className="max-w-[700px] text-3xl font-medium leading-tight text-[#272B51] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
            Вся аналитика в Telegram — без входа в кабинет
          </h2>
          <p className="mt-4 max-w-[700px] text-lg text-[#545881]">
            Получайте утренние отчёты, уведомления о низких остатках и динамику
            продаж прямо в свой мессенджер.
          </p>
        </div>

        {/* Desktop layout: left cards | phone | right cards */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_305px_1fr] lg:items-start lg:gap-8">
          <div className="flex flex-col gap-4">
            <FeatureCard f={features[0]} />
            <FeatureCard f={features[1]} />
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/assets/phone.png"
              alt="Telegram-бот Маржинатора на экране смартфона"
              width={305}
              height={624}
              className="relative z-10 object-contain"
            />
            <div className="absolute bottom-24 left-[-50px] z-20 w-[220px]">
              <Image
                src="/assets/minus30.png"
                alt="Снижение расходов"
                width={220}
                height={232}
                className="object-contain"
              />
            </div>
            <div className="absolute right-[-50px] top-8 z-20 w-[240px]">
              <Image
                src="/assets/plus15.png"
                alt="Рост прибыли"
                width={240}
                height={261}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FeatureCard f={features[2]} />
            <FeatureCard f={features[3]} />
          </div>
        </div>

        {/* Mobile / tablet layout */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {features.map((f) => (
            <FeatureCard key={f.id} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
