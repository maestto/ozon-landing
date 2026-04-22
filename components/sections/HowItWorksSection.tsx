import Image from "@/components/Img";
import Link from "next/link";

const steps = [
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

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[116px] items-center gap-[20px] rounded-[16px] bg-white px-[24px] py-[16px] md:gap-[32px] md:px-[40px] lg:h-[116px] lg:min-h-0 lg:py-0">
      <span
        className="select-none text-[72px] font-bold leading-[0.9] text-[#001E58] md:text-[96px]"
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="flex-1">
        <h3 className="text-[18px] font-bold leading-[1.2] text-[#272B51] md:text-[20px] lg:text-[24px]">
          {title}
        </h3>
        <p className="mt-[6px] text-[14px] leading-[1.4] text-[#545881] md:text-[15px] lg:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#02071C] py-[64px]"
      id="how-it-works"
    >
      {/* Blue glow radial gradient */}
      <div
        className="pointer-events-none absolute -right-[400px] top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[1069px] w-[1069px] rounded-full bg-[#00A6FF] opacity-[0.14] blur-[150px]" />
      </div>
      <div
        className="pointer-events-none absolute -right-[200px] top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[546px] w-[546px] rounded-full bg-[#00A6FF] opacity-[0.25] blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-0">
        {/* Desktop layout: 2 columns [416 | 848] */}
        <div className="hidden lg:grid lg:grid-cols-[416px_848px] lg:gap-4">
          {/* Left: 2 minutes card spanning full height */}
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/assets/2min-bg.png"
              alt="Настройка занимает всего 2 минуты"
              fill
              className="object-cover"
            />
            <div className="relative flex h-[594px] items-end p-[40px]">
              <p className="text-[40px] font-bold leading-[1.1] text-white">
                Займёт всего
                <br />2 минуты
              </p>
            </div>
          </div>

          {/* Right column: heading + steps + CTA */}
          <div className="flex flex-col">
            <h2 className="mb-[32px] text-[48px] font-medium leading-[1.04] text-white">
              Начните сейчас
            </h2>

            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}

              <div className="flex h-[116px] items-center justify-between gap-6 rounded-[16px] bg-[#001E58] px-[40px]">
                <h3 className="text-[20px] font-bold leading-[1.2] text-white lg:text-[24px]">
                  Попробовать бесплатно
                </h3>
                <Link
                  href="/register"
                  className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-100"
                  aria-label="Зарегистрироваться"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path
                      d="M4 11h14M13 6l5 5-5 5"
                      stroke="#001E58"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet layout */}
        <div className="lg:hidden">
          <h2 className="mb-8 text-[32px] font-medium text-white md:text-[40px]">
            Начните сейчас
          </h2>

          <div className="mb-6 flex flex-col gap-4">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
            <div className="flex h-[96px] items-center justify-between gap-6 rounded-[16px] bg-[#001E58] px-[24px]">
              <h3 className="text-[18px] font-bold leading-[1.2] text-white">
                Попробовать бесплатно
              </h3>
              <Link
                href="/register"
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-white"
                aria-label="Зарегистрироваться"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="#001E58"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/2min-bg.png"
              alt="Настройка занимает всего 2 минуты"
              fill
              className="object-cover"
            />
            <div className="relative flex h-full items-end p-[28px]">
              <p className="text-[28px] font-bold leading-[1.15] text-white md:text-[32px]">
                Займёт всего
                <br />2 минуты
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
