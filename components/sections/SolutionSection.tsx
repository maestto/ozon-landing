import Image from "@/components/Img";

// ============================================================================
// Atoms
// ============================================================================

// Composite badge icon — 9 stroke vectors per Figma `91:3741` (14×14).
function BadgeIcon() {
  const stroke = "#ADB4DE";
  const w = 0.875;
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <g>
        <path d="M7 0.875V2.625" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.625 3.5V5.25" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11.375V13.125" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 4.8125V9.1875" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.375 3.5V6.5625" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.625 7.4375V10.5" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.75 6.125V7.875" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.375 8.75V10.5" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.25 6.125V7.875" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// Pill bage "Решение".
function SolutionBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[27px] items-center gap-1 rounded-[27px] border border-white bg-[#F7F7F7] px-[10px] py-[5px] text-[12px] font-medium leading-4 tracking-[-1px] text-[#272B51] shadow-[0_-6px_6px_-5px_rgba(255,255,255,1),0_10px_10px_rgba(28,28,28,0.08),0_2px_2px_rgba(28,28,28,0.02)] ${className}`}
    >
      <BadgeIcon />
      Решение
    </span>
  );
}

// White checkmark in benefits-card row — `91:3772` path.
function BenefitsCheckmark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.75 7.01794L10.493 16.2749C10.3055 16.4624 10.0512 16.5677 9.786 16.5677C9.52084 16.5677 9.26653 16.4624 9.079 16.2749L4.25 11.4459"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Inline icon SVGs — exported from Figma.
function IconCalculator() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 7C2.53333 7 1.70833 6.65833 1.025 5.975C0.341667 5.29167 0 4.46667 0 3.5C0 2.53333 0.341667 1.70833 1.025 1.025C1.70833 0.341667 2.53333 0 3.5 0C4.46667 0 5.29167 0.341667 5.975 1.025C6.65833 1.70833 7 2.53333 7 3.5C7 4.46667 6.65833 5.29167 5.975 5.975C5.29167 6.65833 4.46667 7 3.5 7ZM3.5 5C3.91667 5 4.27083 4.85417 4.5625 4.5625C4.85417 4.27083 5 3.91667 5 3.5C5 3.08333 4.85417 2.72917 4.5625 2.4375C4.27083 2.14583 3.91667 2 3.5 2C3.08333 2 2.72917 2.14583 2.4375 2.4375C2.14583 2.72917 2 3.08333 2 3.5C2 3.91667 2.14583 4.27083 2.4375 4.5625C2.72917 4.85417 3.08333 5 3.5 5ZM12.5 16C11.5333 16 10.7083 15.6583 10.025 14.975C9.34167 14.2917 9 13.4667 9 12.5C9 11.5333 9.34167 10.7083 10.025 10.025C10.7083 9.34167 11.5333 9 12.5 9C13.4667 9 14.2917 9.34167 14.975 10.025C15.6583 10.7083 16 11.5333 16 12.5C16 13.4667 15.6583 14.2917 14.975 14.975C14.2917 15.6583 13.4667 16 12.5 16ZM12.5 14C12.9167 14 13.2708 13.8542 13.5625 13.5625C13.8542 13.2708 14 12.9167 14 12.5C14 12.0833 13.8542 11.7292 13.5625 11.4375C13.2708 11.1458 12.9167 11 12.5 11C12.0833 11 11.7292 11.1458 11.4375 11.4375C11.1458 11.7292 11 12.0833 11 12.5C11 12.9167 11.1458 13.2708 11.4375 13.5625C11.7292 13.8542 12.0833 14 12.5 14ZM1.4 16L0 14.6L14.6 0L16 1.4L1.4 16Z" fill="#0052D0" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M0 16V14H2.75L2.35 13.65C1.48333 12.8833 0.875 12.0083 0.525 11.025C0.175 10.0417 0 9.05 0 8.05C0 6.2 0.554167 4.55417 1.6625 3.1125C2.77083 1.67083 4.21667 0.716667 6 0.25V2.35C4.8 2.78333 3.83333 3.52083 3.1 4.5625C2.36667 5.60417 2 6.76667 2 8.05C2 8.8 2.14167 9.52917 2.425 10.2375C2.70833 10.9458 3.15 11.6 3.75 12.2L4 12.45V10H6V16H0ZM10 15.75V13.65C11.2 13.2167 12.1667 12.4792 12.9 11.4375C13.6333 10.3958 14 9.23333 14 7.95C14 7.2 13.8583 6.47083 13.575 5.7625C13.2917 5.05417 12.85 4.4 12.25 3.8L12 3.55V6H10V0H16V2H13.25L13.65 2.35C14.4667 3.16667 15.0625 4.05417 15.4375 5.0125C15.8125 5.97083 16 6.95 16 7.95C16 9.8 15.4458 11.4458 14.3375 12.8875C13.2292 14.3292 11.7833 15.2833 10 15.75Z" fill="#0052D0" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M0 18V13C0 12.45 0.195833 11.9792 0.5875 11.5875C0.979167 11.1958 1.45 11 2 11H14C14.55 11 15.0208 11.1958 15.4125 11.5875C15.8042 11.9792 16 12.45 16 13V18H0ZM5 10C3.61667 10 2.4375 9.5125 1.4625 8.5375C0.4875 7.5625 0 6.38333 0 5C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H11C12.3833 0 13.5625 0.4875 14.5375 1.4625C15.5125 2.4375 16 3.61667 16 5C16 6.38333 15.5125 7.5625 14.5375 8.5375C13.5625 9.5125 12.3833 10 11 10H5ZM2 16H14V13H2V16ZM5 8H11C11.8333 8 12.5417 7.70833 13.125 7.125C13.7083 6.54167 14 5.83333 14 5C14 4.16667 13.7083 3.45833 13.125 2.875C12.5417 2.29167 11.8333 2 11 2H5C4.16667 2 3.45833 2.29167 2.875 2.875C2.29167 3.45833 2 4.16667 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8ZM5 6C5.28333 6 5.52083 5.90417 5.7125 5.7125C5.90417 5.52083 6 5.28333 6 5C6 4.71667 5.90417 4.47917 5.7125 4.2875C5.52083 4.09583 5.28333 4 5 4C4.71667 4 4.47917 4.09583 4.2875 4.2875C4.09583 4.47917 4 4.71667 4 5C4 5.28333 4.09583 5.52083 4.2875 5.7125C4.47917 5.90417 4.71667 6 5 6ZM11 6C11.2833 6 11.5208 5.90417 11.7125 5.7125C11.9042 5.52083 12 5.28333 12 5C12 4.71667 11.9042 4.47917 11.7125 4.2875C11.5208 4.09583 11.2833 4 11 4C10.7167 4 10.4792 4.09583 10.2875 4.2875C10.0958 4.47917 10 4.71667 10 5C10 5.28333 10.0958 5.52083 10.2875 5.7125C10.4792 5.90417 10.7167 6 11 6Z" fill="#0052D0" />
    </svg>
  );
}

function IconSku() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 20C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18V6.725C0.7 6.54167 0.458333 6.30417 0.275 6.0125C0.0916667 5.72083 0 5.38333 0 5V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V5C20 5.38333 19.9083 5.72083 19.725 6.0125C19.5417 6.30417 19.3 6.54167 19 6.725V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H3ZM3 7V18H17V7H3ZM2 5H18V2H2V5ZM7 12H13V10H7V12Z" fill="#0052D0" />
    </svg>
  );
}

function IconAbc() {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" aria-hidden="true">
      <path d="M0 15L3.75 5H5.9L9.65 15H7.6L6.75 12.6H2.9L2.1 15H0ZM3.5 10.9H6.1L4.9 7.15H4.75L3.5 10.9ZM11.7 15V13.1L16.75 6.8H11.9V5H18.95V6.9L13.95 13.2H19V15H11.7ZM7 3L10 0L13 3H7ZM10 20L7 17H13L10 20Z" fill="#0052D0" />
    </svg>
  );
}

type IconKey = "calculator" | "refresh" | "telegram" | "sku" | "abc";
const featureIcons: Record<IconKey, () => React.JSX.Element> = {
  calculator: IconCalculator,
  refresh: IconRefresh,
  telegram: IconTelegram,
  sku: IconSku,
  abc: IconAbc,
};

type Size = "desktop" | "tablet" | "mobile";

// Card sizes/paddings/gaps from Figma.
const featureDims: Record<Size, { box: string }> = {
  desktop: { box: "h-[130px] w-[308px] p-[24px] gap-[8px]" },
  tablet: { box: "h-[106px] w-[216px] p-[16px] gap-[4px]" },
  mobile: { box: "h-[106px] w-[358px] p-[16px] gap-[4px]" },
};

const benefitsDims: Record<Size, { box: string; rowGap: string }> = {
  desktop: { box: "h-[137px] w-[308px] p-[24px] gap-[8px]", rowGap: "gap-1" },
  tablet: { box: "h-[113px] w-[308px] p-[16px] gap-[4px]", rowGap: "gap-1" },
  mobile: { box: "h-[113px] w-[358px] p-[16px] gap-[4px]", rowGap: "gap-1" },
};

const cardChrome =
  "rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)] ring-1 ring-[#A6AAD7]/10";

function FeatureCard({
  icon,
  title,
  subtitle,
  size,
}: {
  icon: IconKey;
  title: string;
  subtitle: string;
  size: Size;
}) {
  const Icon = featureIcons[icon];
  return (
    <article className={`flex flex-col ${cardChrome} ${featureDims[size].box}`}>
      <div className="flex h-6 w-6 items-center justify-center">
        <Icon />
      </div>
      <h3 className="text-[16px] font-semibold leading-6 tracking-[-1px] text-[#272B51]">
        {title}
      </h3>
      <p className="text-[12px] font-normal leading-4 tracking-[-1px] text-[#545881]">
        {subtitle}
      </p>
    </article>
  );
}

const benefitsItems = [
  "Никаких ручных обновлений",
  "Учёт самовыкупов и возвратов",
  "Точность до 99.9%",
];

function BenefitsCard({ size }: { size: Size }) {
  const { box, rowGap } = benefitsDims[size];
  return (
    <article
      className={`flex flex-col rounded-[20px] bg-[#0052D0] shadow-[0_20px_40px_rgba(39,43,81,0.06)] ring-1 ring-[#A6AAD7]/10 ${box}`}
    >
      {benefitsItems.map((t) => (
        <div key={t} className={`flex items-center ${rowGap}`}>
          <BenefitsCheckmark />
          <span className="text-[16px] font-medium leading-6 tracking-[-1px] text-white">
            {t}
          </span>
        </div>
      ))}
    </article>
  );
}

function ConcentricRings({ sizes }: { sizes: number[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{ opacity: 0.25 }}
    >
      {sizes.map((s, i) => (
        <span
          key={s}
          style={{
            width: s,
            height: s,
            opacity: 1 - i * 0.1,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#4C93FF]"
        />
      ))}
    </div>
  );
}

const ringsDesktop = [863, 783, 705, 623, 541, 461, 379, 297, 215, 135];
const ringsTablet = [574, 520, 468, 414, 359, 306, 252, 197, 143, 89];

// ============================================================================
// Section
// ============================================================================

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#F7F7F7]"
    >
      {/* ===== Mobile (390 × 1047) — vertical stack, no rings ===== */}
      <div className="relative mx-auto h-[1047px] w-[390px] min-[744px]:hidden">
        {/* Decorative 3D images (small, pre-rotated) — z-3 puts them ABOVE cards
            because in Figma mobile they peek visible on top of card surfaces. */}
        <Image
          src="/assets/lightning-mobile.png"
          alt=""
          width={67}
          height={82}
          className="pointer-events-none absolute left-[311px] top-[268px] z-[3]"
          aria-hidden="true"
        />
        <Image
          src="/assets/star-mobile.png"
          alt=""
          width={84}
          height={83}
          className="pointer-events-none absolute left-[158px] top-[636px] z-[3]"
          aria-hidden="true"
        />
        <Image
          src="/assets/tiles-mobile.png"
          alt=""
          width={92}
          height={90}
          className="pointer-events-none absolute left-[325px] top-[946px] z-[3]"
          aria-hidden="true"
        />

        <SolutionBadge className="absolute left-[153px] top-[24px] z-[2]" />
        <div className="absolute left-4 top-[67px] z-[2] flex w-[358px] flex-col items-center gap-2 text-center">
          <h2 className="text-[32px] font-medium leading-8 tracking-[-2px] text-[#272B51]">
            Мы автоматически собираем данные
            <br />
            из Ozon и считаем
            <br />
            чистую прибыль
          </h2>
          <p className="text-[16px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Забудьте об Excel. Наш сервис подключается
            <br />
            к вашему кабинету через API и формирует прозрачную аналитику в реальном времени.
          </p>
        </div>

        <div className="absolute left-4 top-[299px] z-[2]">
          <BenefitsCard size="mobile" />
        </div>
        <div className="absolute left-4 top-[429px] z-[2]">
          <FeatureCard size="mobile" icon="sku" title="SKU прибыль" subtitle="Прибыль каждого товара в деталях" />
        </div>
        <div className="absolute left-4 top-[551px] z-[2]">
          <FeatureCard size="mobile" icon="abc" title="ABC анализ" subtitle="Выявление ключевых товаров" />
        </div>
        <div className="absolute left-4 top-[673px] z-[2]">
          <FeatureCard size="mobile" icon="calculator" title="Калькулятор" subtitle="Актуальная маржинальность" />
        </div>
        <div className="absolute left-4 top-[795px] z-[2]">
          <FeatureCard size="mobile" icon="telegram" title="Telegram-бот" subtitle="Отчёты прямо в мессенджер" />
        </div>
        <div className="absolute left-4 top-[917px] z-[2]">
          <FeatureCard size="mobile" icon="refresh" title="Авто-обновления" subtitle="Данные каждые 15 минут" />
        </div>
      </div>

      {/* ===== Tablet (744 × 811) ===== */}
      <div className="relative mx-auto hidden h-[811px] w-[744px] min-[744px]:block xl:hidden">
        {/* Concentric circles — group at (85, 214), 574×574 */}
        <div
          className="pointer-events-none absolute z-0"
          style={{ left: 85, top: 214, width: 574, height: 574 }}
          aria-hidden="true"
        >
          <ConcentricRings sizes={ringsTablet} />
        </div>

        {/* 3D images */}
        <Image
          src="/assets/star-tablet.png"
          alt=""
          width={194}
          height={193}
          className="pointer-events-none absolute left-[85px] top-[366px] z-[1]"
          aria-hidden="true"
        />
        <Image
          src="/assets/lightning-tablet.png"
          alt=""
          width={114}
          height={138}
          className="pointer-events-none absolute left-[506px] top-[367px] z-[1]"
          aria-hidden="true"
        />
        <Image
          src="/assets/tiles-tablet.png"
          alt=""
          width={136}
          height={135}
          className="pointer-events-none absolute left-[306px] top-[563px] z-[1]"
          aria-hidden="true"
        />

        <SolutionBadge className="absolute left-[330px] top-[32px] z-[2]" />
        <div className="absolute left-8 top-[83px] z-[2] flex w-[680px] flex-col items-center gap-4 text-center">
          <h2 className="text-[36px] font-medium leading-8 tracking-[-2px] text-[#272B51]">
            Мы автоматически собираем
            <br />
            данные из Ozon и считаем
            <br />
            чистую прибыль
          </h2>
          <p className="text-[18px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Забудьте об Excel. Наш сервис подключается к вашему кабинету
            <br />
            через API и формирует прозрачную аналитику в реальном
            <br />
            времени.
          </p>
        </div>

        <div className="absolute left-[90px] top-[291px] z-[2]">
          <FeatureCard size="tablet" icon="sku" title="SKU прибыль" subtitle="Прибыль каждого товара в деталях" />
        </div>
        <div className="absolute left-[438px] top-[291px] z-[2]">
          <FeatureCard size="tablet" icon="abc" title="ABC анализ" subtitle="Выявление ключевых товаров" />
        </div>
        <div className="absolute left-[218px] top-[421px] z-[2]">
          <BenefitsCard size="tablet" />
        </div>
        <div className="absolute left-8 top-[559px] z-[2]">
          <FeatureCard size="tablet" icon="calculator" title="Калькулятор" subtitle="Актуальная маржинальность" />
        </div>
        <div className="absolute left-[496px] top-[559px] z-[2]">
          <FeatureCard size="tablet" icon="telegram" title="Telegram-бот" subtitle="Отчёты прямо в мессенджер" />
        </div>
        <div className="absolute left-[264px] top-[673px] z-[2]">
          <FeatureCard size="tablet" icon="refresh" title="Авто-обновления" subtitle="Данные каждые 15 минут" />
        </div>
      </div>

      {/* ===== Desktop (1440 × 1111) ===== */}
      <div className="relative mx-auto hidden h-[1111px] w-[1440px] xl:block">
        {/* Concentric circles — group at (289, 224), 863×863, center (720.5, 655.5) */}
        <div
          className="pointer-events-none absolute z-0"
          style={{ left: 289, top: 224, width: 863, height: 863 }}
          aria-hidden="true"
        >
          <ConcentricRings sizes={ringsDesktop} />
        </div>

        {/* 3D images */}
        <Image
          src="/assets/star.png"
          alt=""
          width={311}
          height={309}
          className="pointer-events-none absolute left-[309px] top-[415px] z-[1]"
          aria-hidden="true"
        />
        <Image
          src="/assets/lightning.png"
          alt=""
          width={196}
          height={238}
          className="pointer-events-none absolute left-[923px] top-[388px] z-[1]"
          aria-hidden="true"
        />
        <Image
          src="/assets/tiles.png"
          alt=""
          width={136}
          height={135}
          className="pointer-events-none absolute left-[740px] top-[740px] z-[1]"
          aria-hidden="true"
        />

        <SolutionBadge className="absolute left-[677px] top-[64px] z-[2]" />
        <div className="absolute left-[370px] top-[115px] z-[2] flex w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-[48px] font-medium leading-[50px] tracking-[-2px] text-[#272B51]">
            Мы автоматически собираем
            <br />
            данные из Ozon и считаем
            <br />
            чистую прибыль
          </h2>
          <p className="text-[18px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Забудьте об Excel. Наш сервис подключается к вашему кабинету
            <br />
            через API и формирует прозрачную аналитику в реальном
            <br />
            времени.
          </p>
        </div>

        <div className="absolute left-[296px] top-[385px] z-[2]">
          <FeatureCard size="desktop" icon="sku" title="SKU прибыль" subtitle="Прибыль каждого товара в деталях" />
        </div>
        <div className="absolute left-[836px] top-[385px] z-[2]">
          <FeatureCard size="desktop" icon="abc" title="ABC анализ" subtitle="Выявление ключевых товаров" />
        </div>
        <div className="absolute left-[566px] top-[571px] z-[2]">
          <BenefitsCard size="desktop" />
        </div>
        <div className="absolute left-[80px] top-[627px] z-[2]">
          <FeatureCard size="desktop" icon="calculator" title="Калькулятор" subtitle="Актуальная маржинальность" />
        </div>
        <div className="absolute left-[1052px] top-[627px] z-[2]">
          <FeatureCard size="desktop" icon="telegram" title="Telegram-бот" subtitle="Отчёты прямо в мессенджер" />
        </div>
        <div className="absolute left-[566px] top-[853px] z-[2]">
          <FeatureCard size="desktop" icon="refresh" title="Авто-обновления" subtitle="Данные каждые 15 минут" />
        </div>
      </div>
    </section>
  );
}
