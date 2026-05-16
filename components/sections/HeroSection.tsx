import Image from "@/components/Img";
import Link from "next/link";
import Header from "@/components/Header";

function CtaPill({
  variant,
}: {
  variant: "desktop" | "tablet" | "mobile";
}) {
  // Figma frame dims and inner-pill geometry:
  //   desktop: outer 344×72 — text left=32 (124w), inner pill 167×56 at right=-7
  //   tablet:  outer 280×54 — text left=24 (120w), inner pill 142×48 at right=-7
  //   mobile:  outer 330×57 — text left=32 (124w), inner pill 171×46 at right=-38
  // Hover: inner pill slides left to span the full outer pill (animate `left`).
  const dims = {
    desktop: {
      outer: "h-[72px] w-[344px]",
      textPos: "left-[32px] w-[124px]",
      letterSpacing: "-1px",
      innerBase: "right-[-7px] left-[177px] h-[56px]",
      innerHover: "group-hover:left-[6px]",
    },
    tablet: {
      outer: "h-[54px] w-[280px]",
      textPos: "left-[24px] w-[120px]",
      letterSpacing: "-0.4px",
      innerBase: "right-[-7px] left-[145px] h-[48px]",
      innerHover: "group-hover:left-[6px]",
    },
    mobile: {
      outer: "h-[57px] w-[330px]",
      textPos: "left-[32px] w-[124px]",
      letterSpacing: "-1px",
      innerBase: "right-[-38px] left-[197px] h-[46px]",
      innerHover: "",
    },
  }[variant];

  return (
    <span className={`relative block overflow-visible ${dims.outer}`}>
      <span className="absolute inset-0 rounded-full border border-white" />
      <span
        className={`absolute top-1/2 z-[1] -translate-y-1/2 text-left text-[16px] font-normal leading-[17px] text-white ${dims.textPos}`}
        style={{ letterSpacing: dims.letterSpacing }}
      >
        Попробовать
        <br />
        бесплатно
      </span>
      <span
        className={`absolute top-1/2 z-[2] flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-[left,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${dims.innerBase} ${dims.innerHover} group-hover:bg-[#0052D0]`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-[#272B51] transition-colors duration-300 group-hover:text-white"
        >
          <path
            d="M7 17L17 7M10 7h7v7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

function SocialProof({ opacity }: { opacity: 0.5 | 0.8 }) {
  return (
    <>
      <div className="flex -space-x-[13px]" aria-hidden="true">
        <Image
          src="/assets/hero-avatar-1.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <Image
          src="/assets/hero-avatar-2.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <Image
          src="/assets/hero-avatar-3.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <p
        className="text-[14px] font-medium leading-[14px] text-white"
        style={{ opacity }}
      >
        +200
        <br />
        селлеров
        <br />
        уже с нами
      </p>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative z-[20] w-full overflow-visible bg-[#001E58]">
      {/* Background — three separate images per Figma frames */}
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        className="hidden object-cover object-center xl:block"
        priority
        aria-hidden="true"
      />
      <Image
        src="/assets/hero-bg-tablet.png"
        alt=""
        fill
        className="hidden object-cover object-center min-[744px]:block xl:hidden"
        priority
        aria-hidden="true"
      />
      <Image
        src="/assets/hero-bg-mobile.png"
        alt=""
        fill
        className="object-cover object-center min-[744px]:hidden"
        priority
        aria-hidden="true"
      />

      {/* Decorative hand — three sizes per Figma rotated rectangles */}
      <Image
        src="/assets/hero-hand-mobile.png"
        alt=""
        width={165}
        height={157}
        className="pointer-events-none absolute left-[6px] top-[371px] z-[30] min-[744px]:hidden"
        aria-hidden="true"
      />
      <Image
        src="/assets/hero-hand-tablet.png"
        alt=""
        width={282}
        height={267}
        className="pointer-events-none absolute left-[-135px] top-[268px] z-[30] hidden min-[744px]:block xl:hidden"
        aria-hidden="true"
      />
      <Image
        src="/assets/hero-hand-figma.png"
        alt=""
        width={513}
        height={486}
        className="pointer-events-none absolute left-[-120px] top-[292px] z-[30] hidden xl:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto h-[448px] w-full min-[744px]:h-[419px] min-[744px]:max-w-[744px] xl:h-[542px] xl:max-w-[1440px]">
        <Header />

        {/* Mobile (390): no ladder, all 3 lines start at left=16 */}
        <div className="absolute left-4 top-[112px] min-[744px]:hidden">
          <p
            className="absolute left-0 top-0 whitespace-nowrap text-[36px] font-medium uppercase leading-[44px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            Реальная прибыль
          </p>
          <p
            className="absolute left-0 top-10 whitespace-nowrap text-[36px] font-medium uppercase leading-[44px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            по каждому
          </p>
          <p
            className="absolute left-0 top-20 whitespace-nowrap text-[36px] font-medium uppercase leading-[44px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            товару на OZON
          </p>
        </div>
        <div className="absolute left-4 top-[252px] flex items-center gap-4 min-[744px]:hidden">
          <SocialProof opacity={0.8} />
        </div>
        <Link href="#" className="group absolute left-4 top-[330px] inline-flex min-[744px]:hidden">
          <CtaPill variant="mobile" />
        </Link>

        {/* Tablet (744): ladder with 3rd line shifted right by 169 */}
        <div className="absolute left-8 top-[112px] hidden min-[744px]:block xl:hidden">
          <p
            className="absolute left-0 top-0 whitespace-nowrap text-[57px] font-medium uppercase leading-[69px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            Реальная прибыль
          </p>
          <p
            className="absolute left-0 top-[61px] whitespace-nowrap text-[57px] font-medium uppercase leading-[69px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            по каждому
          </p>
          <p
            className="absolute left-[137px] top-[122px] whitespace-nowrap text-[57px] font-medium uppercase leading-[69px] text-white"
            style={{ letterSpacing: "-2px" }}
          >
            товару на OZON
          </p>
        </div>
        <div className="absolute left-[438px] top-[186px] hidden h-[42px] w-[215px] items-center gap-4 min-[744px]:flex xl:hidden">
          <SocialProof opacity={0.5} />
        </div>
        <Link
          href="#"
          className="group absolute left-[422px] top-[317px] hidden min-[744px]:inline-flex xl:hidden"
        >
          <CtaPill variant="tablet" />
        </Link>

        {/* Desktop (1440): ladder with progressive right-shift.
            Positions use % of viewport width — at 1440 they evaluate to Figma's
            exact px values (80/367/530, 1009); at narrower xl viewports they
            scale proportionally so nothing overflows. Font-size via clamp(). */}
        <p
          className="absolute left-[5.56%] top-[170px] hidden whitespace-nowrap text-[clamp(74px,5.9vw,85px)] font-medium uppercase leading-[clamp(80px,6.4vw,92px)] text-white xl:block"
          style={{ letterSpacing: "-2px" }}
        >
          Реальная прибыль
        </p>
        <p
          className="absolute left-[25.49%] top-[262px] hidden whitespace-nowrap text-[clamp(74px,5.9vw,85px)] font-medium uppercase leading-[clamp(80px,6.4vw,92px)] text-white xl:block"
          style={{ letterSpacing: "-2px" }}
        >
          по каждому
        </p>
        <p
          className="absolute left-[36.81%] top-[354px] hidden whitespace-nowrap text-[clamp(74px,5.9vw,85px)] font-medium uppercase leading-[clamp(80px,6.4vw,92px)] text-white xl:block"
          style={{ letterSpacing: "-2px" }}
        >
          товару на OZON
        </p>

        {/* Avatars + CTA stack — both anchored to left=70.07% (= 1009/1440 at frame). */}
        <div className="absolute left-[70.07%] top-[195px] hidden xl:block">
          <div className="flex h-[42px] w-[215px] items-center gap-4">
            <SocialProof opacity={0.5} />
          </div>
          <Link href="#" className="group mt-[37px] inline-flex">
            <CtaPill variant="desktop" />
          </Link>
        </div>
      </div>
    </section>
  );
}
