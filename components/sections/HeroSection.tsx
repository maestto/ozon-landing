import Image from "@/components/Img";
import Link from "next/link";
import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#001E58]">
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-80"
        priority
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[542px] flex-col">
        <Header />

        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center gap-10 px-5 pb-[60px] pt-[40px] text-center lg:px-0 lg:pt-[60px]">
          <h1 className="text-[40px] font-medium uppercase leading-[1.05] tracking-[-0.01em] text-white sm:text-[60px] lg:text-[85px] lg:leading-[92px]">
            Реальная прибыль
            <br />
            по каждому
            <br />
            товару на OZON
          </h1>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-[10px]" aria-hidden="true">
                <div className="h-10 w-10 rounded-full border-[2px] border-[#001E58] bg-[#DBD1FC]" />
                <div className="h-10 w-10 rounded-full border-[2px] border-[#001E58] bg-[#FFC7D6]" />
                <div className="h-10 w-10 rounded-full border-[2px] border-[#001E58] bg-[#131313]" />
              </div>
              <p className="text-left text-[14px] font-medium leading-[1.2] text-white">
                +200
                <br />
                селлеров
                <br />
                уже с нами
              </p>
            </div>

            <Link
              href="/register"
              className="group inline-flex h-[68px] items-center rounded-full border border-white/15 bg-[#001E58]/80 pl-[28px] pr-[6px] text-white backdrop-blur-sm transition-colors hover:bg-[#002875]"
            >
              <span className="mr-4 text-[16px] font-normal">
                Попробовать бесплатно
              </span>
              <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 11h14M13 6l5 5-5 5"
                    stroke="#001E58"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
