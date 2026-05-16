import Image from "@/components/Img";

// ============================================================================
// Atoms
// ============================================================================

// Bage "Интеграции" — 4-dot icon + text 12px Medium.
function IntegrationsBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[27px] items-center gap-1 rounded-[27px] border border-white bg-[#F7F7F7] px-[10px] py-[5px] text-[12px] font-medium leading-4 tracking-[-1px] text-[#272B51] shadow-[0_-6px_6px_-5px_rgba(255,255,255,1),0_10px_10px_rgba(28,28,28,0.08),0_2px_2px_rgba(28,28,28,0.02)] ${className}`}
    >
      {/* 4-dot Bluetooth-like icon, simplified vector */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="3.5" r="1.5" fill="#ADB4DE" />
        <circle cx="3.5" cy="7" r="1.5" fill="#ADB4DE" />
        <circle cx="10.5" cy="7" r="1.5" fill="#ADB4DE" />
        <circle cx="7" cy="10.5" r="1.5" fill="#ADB4DE" />
      </svg>
      Интеграции
    </span>
  );
}

// Feature card variants. Each viewport uses different card geometry, font, icon position.
type FeatureKey = "daily" | "weekly" | "stock" | "team";

// Figma TEXT bounds показывают что все 4 заголовка переносятся на 2 строки
// (height 64 desktop / 48 tablet+mobile = 2 × line-height).
const featureContent: Record<FeatureKey, { title: React.ReactNode }> = {
  daily: {
    title: (
      <>
        Ежедневный
        <br />
        отчёт в 9:00
      </>
    ),
  },
  weekly: {
    title: (
      <>
        Динамика
        <br />
        за неделю
      </>
    ),
  },
  stock: {
    title: (
      <>
        Уведомление
        <br />
        по остаткам
      </>
    ),
  },
  team: {
    title: (
      <>
        Доступ
        <br />
        для сотрудников
      </>
    ),
  },
};

// Asset sizes are rendered at their exported @2x aspect ratios.
const featureIcons: Record<
  "desktop" | "tablet" | "mobile",
  Record<FeatureKey, { src: string; w: number; h: number; offsetX: number; offsetY: number }>
> = {
  desktop: {
    daily: { src: "/assets/daily-report.png", w: 89, h: 118, offsetX: 326, offsetY: 13 },
    weekly: { src: "/assets/weekly-chart.png", w: 190, h: 136, offsetX: 224, offsetY: 8 },
    stock: { src: "/assets/stock-alert.png", w: 119, h: 144, offsetX: 295, offsetY: -12 },
    team: { src: "/assets/team-access.png", w: 123, h: 126, offsetX: 287, offsetY: 14 },
  },
  tablet: {
    daily: { src: "/assets/daily-report-tablet.png", w: 125, h: 80, offsetX: 207, offsetY: 0 },
    weekly: { src: "/assets/weekly-chart-tablet.png", w: 150, h: 80, offsetX: 192, offsetY: 0 },
    stock: { src: "/assets/stock-alert-tablet.png", w: 145, h: 80, offsetX: 187, offsetY: 0 },
    team: { src: "/assets/team-access-tablet.png", w: 107, h: 80, offsetX: 225, offsetY: 0 },
  },
  mobile: {
    daily: { src: "/assets/daily-report-mobile.png", w: 125, h: 80, offsetX: 233, offsetY: 0 },
    weekly: { src: "/assets/weekly-chart-mobile.png", w: 153, h: 80, offsetX: 218, offsetY: 0 },
    stock: { src: "/assets/stock-alert-mobile.png", w: 159, h: 80, offsetX: 208, offsetY: 0 },
    team: { src: "/assets/team-access-mobile.png", w: 113, h: 80, offsetX: 245, offsetY: 0 },
  },
};

const cardChrome = "bg-white rounded-[20px] overflow-hidden";

function FeatureCard({
  variant,
  size,
}: {
  variant: FeatureKey;
  size: "desktop" | "tablet" | "mobile";
}) {
  const icon = featureIcons[size][variant];
  const content = featureContent[variant];

  if (size === "desktop") {
    // Desktop card 414×144, title 32px Regular at internal (32, 40)
    return (
      <article className={`relative ${cardChrome} h-[144px] w-[414px]`}>
        <h3
          className="absolute left-[32px] top-[40px] text-[32px] font-normal leading-8 text-[#272B51]"
          style={{ letterSpacing: "-2px" }}
        >
          {content.title}
        </h3>
        <Image
          src={icon.src}
          alt=""
          width={icon.w}
          height={icon.h}
          className="pointer-events-none absolute"
          style={{ left: icon.offsetX, top: icon.offsetY }}
          aria-hidden="true"
        />
      </article>
    );
  }

  // Tablet/mobile: card 332/358×80, title 24px Regular at internal (32, 16)
  const widthCls = size === "tablet" ? "w-[332px]" : "w-[358px]";
  return (
    <article className={`relative ${cardChrome} h-[80px] ${widthCls}`}>
      <h3
        className="absolute left-[32px] top-[16px] text-[24px] font-normal leading-6 text-[#272B51]"
        style={{ letterSpacing: "-2px" }}
      >
        {content.title}
      </h3>
      <Image
        src={icon.src}
        alt=""
        width={icon.w}
        height={icon.h}
        className="pointer-events-none absolute"
        style={{ left: icon.offsetX, top: icon.offsetY }}
        aria-hidden="true"
      />
    </article>
  );
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ============================================================================
// Section
// ============================================================================

export default function TelegramSection() {
  return (
    <section
      id="telegram"
      className="relative overflow-hidden bg-[#F7F7F7]"
    >
      {/* ===== Mobile (390 × 1102) ===== */}
      <div className="relative mx-auto h-[1102px] w-[390px] min-[744px]:hidden">
        {/* Blue blob (vector) */}
        <img
          src={`${base}/assets/telegram-blob-mobile.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute z-0"
          style={{ left: -112, top: 222, width: 614, height: 600 }}
        />

        <IntegrationsBadge className="absolute left-[145px] top-[24px] z-[2]" />

        <div className="absolute left-[17px] top-[67px] z-[2] flex w-[357px] flex-col items-center gap-2 text-center">
          <h2
            className="text-[32px] font-medium leading-8 text-[#272B51]"
            style={{ letterSpacing: "-2px" }}
          >
            Вся аналитика
            <br />в Telegram —
            <br />
            без входа в кабинет
          </h2>
          <p
            className="text-[16px] font-normal leading-6 text-[#545881]"
            style={{ letterSpacing: "-1px" }}
          >
            Получайте утренние отчёты, уведомления о низких остатках и динамику продаж прямо в свой мессенджер.
          </p>
        </div>

        {/* Phone */}
        <Image
          src="/assets/phone-mobile.png"
          alt="Telegram-бот Маржинатора"
          width={180}
          height={368}
          className="pointer-events-none absolute left-[105px] top-[310px] z-[2]"
          aria-hidden="true"
        />

        {/* −30% plate (left) */}
        <Image
          src="/assets/minus30-mobile.png"
          alt=""
          width={112}
          height={123}
          className="pointer-events-none absolute left-[-1px] top-[290px] z-[3]"
          aria-hidden="true"
        />

        {/* +15% plate (right) */}
        <Image
          src="/assets/plus15-mobile.png"
          alt=""
          width={110}
          height={124}
          className="pointer-events-none absolute left-[298px] top-[458px] z-[3]"
          aria-hidden="true"
        />

        {/* 4 feature cards stacked at the bottom */}
        <div className="absolute left-4 top-[710px] z-[2]">
          <FeatureCard size="mobile" variant="daily" />
        </div>
        <div className="absolute left-4 top-[806px] z-[2]">
          <FeatureCard size="mobile" variant="weekly" />
        </div>
        <div className="absolute left-4 top-[902px] z-[2]">
          <FeatureCard size="mobile" variant="stock" />
        </div>
        <div className="absolute left-4 top-[998px] z-[2]">
          <FeatureCard size="mobile" variant="team" />
        </div>
      </div>

      {/* ===== Tablet (744 × 635) ===== */}
      <div className="relative mx-auto hidden h-[635px] w-[744px] min-[744px]:block xl:hidden">
        <img
          src={`${base}/assets/telegram-blob-tablet.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute z-0"
          style={{ left: 285, top: 132, width: 537, height: 526 }}
        />

        <IntegrationsBadge className="absolute left-[322px] top-[32px] z-[2]" />

        <div className="absolute left-8 top-[83px] z-[2] flex w-[680px] flex-col items-center gap-4 text-center">
          <h2
            className="text-[36px] font-medium leading-8 text-[#272B51]"
            style={{ letterSpacing: "-2px" }}
          >
            Вся аналитика в Telegram —
            <br />
            без входа в кабинет
          </h2>
          <p
            className="text-[18px] font-normal leading-6 text-[#545881]"
            style={{ letterSpacing: "-1px" }}
          >
            Получайте утренние отчёты, уведомления о низких остатках
            <br />
            и динамику продаж прямо в свой мессенджер.
          </p>
        </div>

        {/* 4 cards stacked LEFT */}
        <div className="absolute left-8 top-[235px] z-[2]">
          <FeatureCard size="tablet" variant="daily" />
        </div>
        <div className="absolute left-8 top-[331px] z-[2]">
          <FeatureCard size="tablet" variant="weekly" />
        </div>
        <div className="absolute left-8 top-[427px] z-[2]">
          <FeatureCard size="tablet" variant="stock" />
        </div>
        <div className="absolute left-8 top-[523px] z-[2]">
          <FeatureCard size="tablet" variant="team" />
        </div>

        {/* Phone (right) */}
        <Image
          src="/assets/phone-tablet.png"
          alt="Telegram-бот Маржинатора"
          width={180}
          height={368}
          className="pointer-events-none absolute left-[464px] top-[235px] z-[2]"
          aria-hidden="true"
        />

        {/* −30% plate (over phone bottom-left) */}
        <Image
          src="/assets/minus30-tablet.png"
          alt=""
          width={141}
          height={154}
          className="pointer-events-none absolute left-[326px] top-[477px] z-[3]"
          aria-hidden="true"
        />

        {/* +15% plate (over phone top-right) */}
        <Image
          src="/assets/plus15-tablet.png"
          alt=""
          width={110}
          height={124}
          className="pointer-events-none absolute left-[612px] top-[158px] z-[3]"
          aria-hidden="true"
        />
      </div>

      {/* ===== Desktop (1440 × 999) ===== */}
      <div className="relative mx-auto hidden h-[999px] w-[1440px] xl:block">
        <img
          src={`${base}/assets/telegram-blob.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute z-0"
          style={{ left: 236, top: 97, width: 969, height: 948 }}
        />

        <IntegrationsBadge className="absolute left-[670px] top-[64px] z-[2]" />

        <div className="absolute left-[370px] top-[115px] z-[2] flex w-[700px] flex-col items-center gap-4 text-center">
          <h2
            className="text-[48px] font-medium leading-[50px] text-[#272B51]"
            style={{ letterSpacing: "-2px" }}
          >
            Вся аналитика в Telegram —
            <br />
            без входа в кабинет
          </h2>
          <p
            className="text-[18px] font-normal leading-6 text-[#545881]"
            style={{ letterSpacing: "-1px" }}
          >
            Получайте утренние отчёты, уведомления о низких остатках
            <br />
            и динамику продаж прямо в свой мессенджер.
          </p>
        </div>

        {/* Left feature cards */}
        <div className="absolute left-[82px] top-[311px] z-[2]">
          <FeatureCard size="desktop" variant="daily" />
        </div>
        <div className="absolute left-[82px] top-[471px] z-[2]">
          <FeatureCard size="desktop" variant="weekly" />
        </div>

        {/* Right feature cards */}
        <div className="absolute left-[946px] top-[631px] z-[2]">
          <FeatureCard size="desktop" variant="stock" />
        </div>
        <div className="absolute left-[946px] top-[791px] z-[2]">
          <FeatureCard size="desktop" variant="team" />
        </div>

        {/* Phone in center */}
        <Image
          src="/assets/phone.png"
          alt="Telegram-бот Маржинатора на экране смартфона"
          width={305}
          height={624}
          className="pointer-events-none absolute left-[568px] top-[311px] z-[2]"
          aria-hidden="true"
        />

        {/* −30% plate (left of phone, lower) */}
        <Image
          src="/assets/minus30.png"
          alt=""
          width={229}
          height={251}
          className="pointer-events-none absolute left-[224px] top-[706px] z-[3]"
          aria-hidden="true"
        />

        {/* +15% plate (right of phone, upper) */}
        <Image
          src="/assets/plus15.png"
          alt=""
          width={280}
          height={315}
          className="pointer-events-none absolute left-[972px] top-[258px] z-[3]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
