import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#001E58] overflow-hidden">
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-60"
        priority
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Header />

        <div className="mx-auto max-w-[1280px] px-5 pb-14 pt-12 lg:px-0 lg:pt-16 lg:pb-20">
          <h1 className="max-w-[900px] text-[56px] font-medium leading-[1.08] tracking-tight text-white md:text-[72px] lg:text-[85px]">
            Реальная прибыль
            <br />
            по каждому
            <br />
            товару на OZON
          </h1>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="group inline-flex h-[68px] items-center overflow-hidden rounded-full bg-[#001E58] border border-white/20 pr-2 pl-6 text-white hover:bg-[#002875] transition-colors"
            >
              <span className="mr-4 text-base font-normal">
                Попробовать бесплатно
              </span>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="#001E58"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5" aria-hidden="true">
              <div className="h-10 w-10 rounded-full bg-[#DBD1FC] border-2 border-[#001E58] flex items-center justify-center text-xs font-medium text-[#272B51]">
                А
              </div>
              <div className="h-10 w-10 rounded-full bg-[#FFC7D6] border-2 border-[#001E58] flex items-center justify-center text-xs font-medium text-[#272B51]">
                Б
              </div>
              <div className="h-10 w-10 rounded-full bg-[#131313] border-2 border-[#001E58] flex items-center justify-center text-xs font-medium text-white">
                В
              </div>
            </div>
            <p className="text-sm font-medium leading-tight text-white">
              +200
              <br />
              селлеров
              <br />
              уже с нами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
