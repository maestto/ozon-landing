import Link from "next/link";

const navLinks = [
  { label: "Возможности", href: "#solution" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Telegram-бот", href: "#telegram" },
];

const companyLinks = [
  { label: "О сервисе", href: "#" },
  { label: "Помощь", href: "#" },
  { label: "Связаться с нами", href: "#" },
];

const legalLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Условия использования", href: "#" },
  { label: "Оферта", href: "#" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[16px] font-semibold leading-6 text-white"
      style={{ letterSpacing: "-1px" }}
    >
      {children}
    </h3>
  );
}

function ColumnLinks({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2" role="list">
      {items.map((it) => (
        <li key={it.label}>
          <Link
            href={it.href}
            className="text-[16px] font-semibold leading-6 text-[#ADB4DE] transition-colors duration-300 hover:text-white"
            style={{ letterSpacing: "-1px" }}
          >
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Brand({ description }: { description: string }) {
  return (
    <div>
      <div
        className="text-[24px] font-semibold leading-8 text-white"
        style={{ letterSpacing: "-2px" }}
      >
        Маржинатор
      </div>
      <p
        className="mt-2 max-w-[300px] text-[16px] font-semibold leading-6 text-[#ADB4DE]"
        style={{ letterSpacing: "-1px" }}
      >
        {description}
      </p>
    </div>
  );
}

function Copyright({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[20px] font-bold leading-8 text-[#ADB4DE]/[0.38] ${className}`}
      style={{ letterSpacing: "-1px" }}
    >
      © 2025 Маржинатор
    </p>
  );
}

const description = "Аналитика прибыли для продавцов Ozon. Автоматически, точно, без лишнего.";

export default function Footer() {
  return (
    <footer className="bg-[#001E58]">
      {/* Mobile (390 × 777) */}
      <div className="relative mx-auto h-[777px] w-[390px] min-[744px]:hidden">
        <div className="absolute left-[41px] top-[26px]">
          <Brand description={description} />
        </div>
        <div className="absolute left-[41px] top-[146px]">
          <ColumnTitle>Навигация</ColumnTitle>
          <ColumnLinks items={navLinks} />
        </div>
        <div className="absolute left-[41px] top-[314px]">
          <ColumnTitle>Компания</ColumnTitle>
          <ColumnLinks items={companyLinks} />
        </div>
        <div className="absolute left-[41px] top-[482px]">
          <ColumnTitle>Правовое</ColumnTitle>
          <ColumnLinks items={legalLinks} />
        </div>
        <Copyright className="absolute left-[41px] top-[698px]" />
      </div>

      {/* Tablet (744 × 398) — Brand top-left + 3 link columns below + copyright bottom */}
      <div className="relative mx-auto hidden h-[398px] w-[744px] min-[744px]:block xl:hidden">
        <div className="absolute left-8 top-[24px]">
          <Brand description={description} />
        </div>
        <div className="absolute left-8 top-[144px]">
          <ColumnTitle>Навигация</ColumnTitle>
          <ColumnLinks items={navLinks} />
        </div>
        <div className="absolute left-[235px] top-[144px]">
          <ColumnTitle>Компания</ColumnTitle>
          <ColumnLinks items={companyLinks} />
        </div>
        <div className="absolute left-[448px] top-[144px]">
          <ColumnTitle>Правовое</ColumnTitle>
          <ColumnLinks items={legalLinks} />
        </div>
        <Copyright className="absolute left-8 top-[304px]" />
      </div>

      {/* Desktop (1440 × 387) — 4 columns inline */}
      <div className="relative mx-auto hidden h-[387px] w-[1440px] xl:block">
        <div className="absolute left-[80px] top-[64px]">
          <Brand description={description} />
        </div>
        <div className="absolute left-[620px] top-[64px]">
          <ColumnTitle>Навигация</ColumnTitle>
          <ColumnLinks items={navLinks} />
        </div>
        <div className="absolute left-[836px] top-[64px]">
          <ColumnTitle>Компания</ColumnTitle>
          <ColumnLinks items={companyLinks} />
        </div>
        <div className="absolute left-[1052px] top-[64px]">
          <ColumnTitle>Правовое</ColumnTitle>
          <ColumnLinks items={legalLinks} />
        </div>
        <Copyright className="absolute left-[80px] top-[291px]" />
      </div>
    </footer>
  );
}
