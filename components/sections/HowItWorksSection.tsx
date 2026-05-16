import Image from "@/components/Img";
import Link from "next/link";

// ============================================================================
// Atoms
// ============================================================================

// Single step card row layout. Numeric character (1/2/3), title, description.
// Variants per viewport.
type Step = { number: string; title: string; description: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Регистрация",
    description: "Введите почту и создайте пароль для входа в кабинет.",
  },
  {
    number: "2",
    title: "API-ключ Ozon",
    description: "Скопируйте ключ из настроек кабинета продавца.",
  },
  {
    number: "3",
    title: "Готовая аналитика",
    description: "Через минуту вы увидите свою реальную чистую прибыль.",
  },
];

function ArrowPill({ size = "lg" }: { size?: "lg" | "sm" }) {
  // Desktop/tablet pill 167×56 (padding 10/24/10/24 with 24×24 arrow centered).
  // Mobile pill 107×56.
  const dims =
    size === "lg" ? "h-[56px] w-[167px]" : "h-[56px] w-[107px]";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white ${dims}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 17L17 7M10 7h7v7"
          stroke="#272B51"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Glow group — 2 large blue ellipses with heavy CSS blur (Figma layer-blur 324).
// Position varies per viewport — pass as props.
function GlowEllipses({
  variant,
}: {
  variant: "desktop" | "tablet" | "mobile";
}) {
  if (variant === "desktop") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Big ellipse — center-right under viewport */}
        <div
          className="absolute"
          style={{
            left: 138,
            top: 572,
            width: 1069,
            height: 1069,
            background: "#00A6FF",
            borderRadius: "50%",
            filter: "blur(162px)",
            opacity: 0.5,
          }}
        />
        {/* Small ellipse — top-right */}
        <div
          className="absolute"
          style={{
            left: 447,
            top: 156,
            width: 546,
            height: 546,
            background: "#00A6FF",
            borderRadius: "50%",
            filter: "blur(162px)",
            opacity: 0.5,
          }}
        />
      </div>
    );
  }
  if (variant === "tablet") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute"
          style={{
            left: 62,
            top: 509,
            width: 621,
            height: 1069,
            background: "#00A6FF",
            borderRadius: "50%",
            filter: "blur(162px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute"
          style={{
            left: 241,
            top: 93,
            width: 317,
            height: 546,
            background: "#00A6FF",
            borderRadius: "50%",
            filter: "blur(162px)",
            opacity: 0.5,
          }}
        />
      </div>
    );
  }
  // mobile
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute"
        style={{
          left: -80,
          top: 509,
          width: 621,
          height: 1069,
          background: "#00A6FF",
          borderRadius: "50%",
          filter: "blur(162px)",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute"
        style={{
          left: 99,
          top: 93,
          width: 317,
          height: 546,
          background: "#00A6FF",
          borderRadius: "50%",
          filter: "blur(162px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

// ============================================================================
// Section
// ============================================================================

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#02071C]"
    >
      {/* ===== Mobile (390 × 748) ===== */}
      <div className="relative mx-auto h-[748px] w-[390px] min-[744px]:hidden">
        <GlowEllipses variant="mobile" />

        <h2
          className="absolute left-1/2 top-[24px] z-[2] -translate-x-1/2 whitespace-nowrap text-[32px] font-medium leading-8 text-white"
          style={{ letterSpacing: "-2px" }}
        >
          Начните сейчас
        </h2>

        {/* "Займёт всего 2 минуты" plate */}
        <div className="absolute left-4 top-[80px] z-[2] h-[116px] w-[358px] overflow-hidden rounded-[20px]">
          <Image
            src="/assets/2min-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="relative flex h-full items-center px-[33px]">
            <p
              className="text-[32px] font-bold leading-[45px] text-white"
              style={{ letterSpacing: "-1px" }}
            >
              Займёт всего
              <br />2 минуты
            </p>
          </div>
        </div>

        {/* 3 step cards — numeral pokes left edge */}
        {steps.map((s, i) => (
          <div
            key={s.number}
            className="absolute left-4 z-[2] h-[116px] w-[358px] overflow-hidden rounded-[20px] bg-white"
            style={{ top: 212 + i * 132 }}
          >
            <span
              className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-[80px] font-bold leading-none text-[#001E58]"
              style={{ letterSpacing: "-1px", width: 120, textAlign: "center" }}
              aria-hidden="true"
            >
              {s.number}
            </span>
            <h3
              className="absolute left-[118px] top-4 text-[24px] font-bold leading-8 text-[#272B51]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.title}
            </h3>
            <p
              className="absolute left-[118px] top-[52px] w-[225px] text-[16px] font-normal leading-6 text-[#545881]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.description}
            </p>
          </div>
        ))}

        {/* CTA-bar */}
        <Link
          href="#"
          className="group absolute left-4 top-[608px] z-[2] flex h-[116px] w-[358px] items-center justify-between overflow-hidden rounded-[20px] bg-[#001E58] px-[30px]"
        >
          <span
            className="text-[24px] font-bold leading-6 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            Попробовать
            <br />
            бесплатно
          </span>
          <ArrowPill size="sm" />
        </Link>
      </div>

      {/* ===== Tablet (744 × 782) ===== */}
      <div className="relative mx-auto hidden h-[782px] w-[744px] min-[744px]:block xl:hidden">
        <GlowEllipses variant="tablet" />

        <h2
          className="absolute left-1/2 top-[32px] z-[2] -translate-x-1/2 whitespace-nowrap text-[36px] font-medium leading-[50px] text-white"
          style={{ letterSpacing: "-2px" }}
        >
          Начните сейчас
        </h2>

        <div className="absolute left-8 top-[106px] z-[2] h-[116px] w-[680px] overflow-hidden rounded-[20px]">
          <Image
            src="/assets/2min-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="relative flex h-full items-center pl-[161px]">
            <p
              className="whitespace-nowrap text-[32px] font-bold leading-[45px] text-white"
              style={{ letterSpacing: "-1px" }}
            >
              Займёт всего 2 минуты
            </p>
          </div>
        </div>

        {steps.map((s, i) => (
          <div
            key={s.number}
            className="absolute left-8 z-[2] flex h-[116px] w-[680px] items-center overflow-hidden rounded-[20px] bg-white"
            style={{ top: 238 + i * 132 }}
          >
            <span
              className="ml-4 inline-flex h-[120px] w-[120px] items-center justify-center text-[96px] font-bold leading-none text-[#001E58]"
              style={{ letterSpacing: "-1px" }}
              aria-hidden="true"
            >
              {s.number}
            </span>
            <h3
              className="ml-[38px] w-[212px] text-[24px] font-bold leading-8 text-[#272B51]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.title}
            </h3>
            <p
              className="ml-[22px] w-[244px] text-[16px] font-normal leading-6 text-[#545881]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.description}
            </p>
          </div>
        ))}

        <Link
          href="#"
          className="group absolute left-8 top-[634px] z-[2] flex h-[116px] w-[680px] items-center overflow-hidden rounded-[20px] bg-[#001E58]"
        >
          <span
            className="ml-[104px] text-[24px] font-bold leading-8 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            Попробовать бесплатно
          </span>
          <span className="ml-auto mr-[30px]">
            <ArrowPill size="lg" />
          </span>
        </Link>
      </div>

      {/* ===== Desktop (1440 × 722) ===== */}
      <div className="relative mx-auto hidden h-[722px] w-[1440px] xl:block">
        <GlowEllipses variant="desktop" />

        <h2
          className="absolute left-1/2 top-[64px] z-[2] -translate-x-1/2 whitespace-nowrap text-[48px] font-medium leading-[50px] text-white"
          style={{ letterSpacing: "-2px" }}
        >
          Начните сейчас
        </h2>

        {/* Left tall card "Займёт всего 2 минуты" — 416×512, text at top-left (40, 40) */}
        <div className="absolute left-[80px] top-[146px] z-[2] h-[512px] w-[416px] overflow-hidden rounded-[20px]">
          <Image
            src="/assets/2min-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <p
            className="absolute left-[40px] top-[40px] text-[40px] font-bold leading-[45px] text-white"
            style={{ letterSpacing: "-1px" }}
          >
            Займёт всего
            <br />2 минуты
          </p>
        </div>

        {/* Right column — 3 steps + CTA, each 848×116 */}
        {steps.map((s, i) => (
          <div
            key={s.number}
            className="absolute left-[512px] z-[2] flex h-[116px] w-[848px] items-center overflow-hidden rounded-[20px] bg-white"
            style={{ top: 146 + i * 132 }}
          >
            <span
              className="ml-4 inline-flex h-[184px] w-[184px] items-center justify-center text-[160px] font-bold leading-none text-[#001E58]"
              style={{ letterSpacing: "-2px" }}
              aria-hidden="true"
            >
              {s.number}
            </span>
            <h3
              className="ml-[48px] w-[260px] text-[24px] font-bold leading-8 text-[#272B51]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.title}
            </h3>
            <p
              className="ml-[20px] w-[300px] text-[16px] font-normal leading-6 text-[#545881]"
              style={{ letterSpacing: "-1px" }}
            >
              {s.description}
            </p>
          </div>
        ))}

        <Link
          href="#"
          className="group absolute left-[512px] top-[542px] z-[2] flex h-[116px] w-[848px] items-center overflow-hidden rounded-[20px] bg-[#001E58]"
        >
          <span
            className="ml-[248px] text-[24px] font-bold leading-8 text-white"
            style={{ letterSpacing: "-1px" }}
          >
            Попробовать бесплатно
          </span>
          <span className="ml-auto mr-[30px]">
            <ArrowPill size="lg" />
          </span>
        </Link>
      </div>
    </section>
  );
}
