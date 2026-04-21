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
    description:
      "Через минуту вы увидите свою реальную чистую прибыль.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#02071C] py-16 lg:py-[64px]"
      id="how-it-works"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-64 top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[1069px] w-[1069px] rounded-full bg-[#00A6FF] opacity-[0.06] blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[546px] w-[546px] rounded-full bg-[#00A6FF] opacity-[0.08] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-0">
        <h2 className="mb-10 text-3xl font-medium text-white md:text-4xl lg:text-[48px]">
          Начните сейчас
        </h2>

        <div className="grid gap-6 lg:grid-cols-[416px_1fr]">
          {/* Left: "2 minutes" card */}
          <div className="relative overflow-hidden rounded-2xl lg:row-span-4">
            <Image
              src="/assets/2min-bg.png"
              alt="Настройка занимает всего 2 минуты"
              fill
              className="object-cover object-center"
            />
            <div className="relative z-10 flex h-full min-h-[280px] items-end p-8 lg:min-h-[512px]">
              <p className="text-3xl font-bold leading-tight text-white lg:text-[40px]">
                Займёт всего
                <br />2 минуты
              </p>
            </div>
          </div>

          {/* Right: Steps */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-6 rounded-2xl bg-white px-8 py-7"
            >
              <span className="shrink-0 text-4xl font-bold text-[#001E58] leading-none select-none">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#272B51] lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-[#545881]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex items-center justify-between gap-6 rounded-2xl bg-[#001E58] px-8 py-7">
            <h3 className="text-xl font-bold text-white lg:text-2xl">
              Попробовать бесплатно
            </h3>
            <Link
              href="/register"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="Зарегистрироваться"
            >
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
