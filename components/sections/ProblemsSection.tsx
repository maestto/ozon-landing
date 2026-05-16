import Image from "@/components/Img";
import Link from "next/link";

function ProblemBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[27px] items-center gap-1 rounded-[27px] border border-white bg-[#F7F7F7] px-[10px] py-[5px] text-[12px] font-medium leading-4 tracking-[-1px] text-[#272B51] shadow-[0_-6px_6px_-5px_rgba(255,255,255,1),0_10px_10px_rgba(28,28,28,0.08),0_2px_2px_rgba(28,28,28,0.02)] ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.25" stroke="#ADB4DE" strokeWidth="0.875" />
        <path d="M7 4.5V7.875" stroke="#ADB4DE" strokeWidth="0.875" strokeLinecap="round" />
        <circle cx="7" cy="9.844" r="0.656" fill="#ADB4DE" />
      </svg>
      Проблема
    </span>
  );
}

function IncomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#"
      className={`inline-flex items-center gap-[10px] text-[16px] font-semibold leading-6 text-[#0052D0] transition-colors duration-300 hover:text-[#0048B9] ${className}`}
    >
      Узнайте реальный доход
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17L17 7M10 7H17V14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

// Inline SVG icons exported from Figma `61:746/755/760/765`.
function IconRevenue() {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
      <path
        d="M17.3684 13.6053C16.8161 13.6053 16.3684 13.1576 16.3684 12.6053V12.1685C16.3684 11.6734 16.7697 11.272 17.2648 11.272C18.0717 11.272 18.4679 10.2894 17.8866 9.72976L13.9453 5.93477C13.5567 5.56061 12.9414 5.5621 12.5546 5.93813L9.14779 9.25035C8.75873 9.6286 8.13901 9.62755 7.75122 9.248L0.300952 1.95573C-0.100675 1.56263 -0.0995868 0.91585 0.303361 0.524095L0.551281 0.283062C0.939402 -0.0942779 1.55732 -0.0942783 1.94544 0.283062L7.75128 5.92763C8.1394 6.30497 8.75732 6.30497 9.14544 5.92763L12.5513 2.61639C12.9394 2.23905 13.5573 2.23906 13.9454 2.6164L19.6394 8.15222C20.2105 8.70746 21.1684 8.3028 21.1684 7.50627C21.1684 7.0087 21.5717 6.60535 22.0693 6.60535H22.5684C23.1206 6.60535 23.5684 7.05306 23.5684 7.60535V12.6053C23.5684 13.1576 23.1206 13.6053 22.5684 13.6053H17.3684Z"
        fill="#0052D0"
      />
    </svg>
  );
}

function IconProducts() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.44444 15.5556H6.66667V10H4.44444V15.5556ZM13.3333 15.5556H15.5556V4.44444H13.3333V15.5556ZM8.88889 15.5556H11.1111V12.2222H8.88889V15.5556ZM8.88889 10H11.1111V7.77778H8.88889V10ZM2.22222 20C1.61111 20 1.08796 19.7824 0.652778 19.3472C0.217593 18.912 0 18.3889 0 17.7778V2.22222C0 1.61111 0.217593 1.08796 0.652778 0.652778C1.08796 0.217593 1.61111 0 2.22222 0H17.7778C18.3889 0 18.912 0.217593 19.3472 0.652778C19.7824 1.08796 20 1.61111 20 2.22222V17.7778C20 18.3889 19.7824 18.912 19.3472 19.3472C18.912 19.7824 18.3889 20 17.7778 20H2.22222ZM2.22222 17.7778H17.7778V2.22222H2.22222V17.7778Z"
        fill="#84B1FF"
      />
    </svg>
  );
}

function IconTables() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <path
        d="M5.7 19C5.1775 19 4.73021 18.814 4.35812 18.4419C3.98604 18.0698 3.8 17.6225 3.8 17.1V5.7C3.8 5.1775 3.98604 4.73021 4.35812 4.35812C4.73021 3.98604 5.1775 3.8 5.7 3.8H17.1C17.6225 3.8 18.0698 3.98604 18.4419 4.35812C18.814 4.73021 19 5.1775 19 5.7V17.1C19 17.6225 18.814 18.0698 18.4419 18.4419C18.0698 18.814 17.6225 19 17.1 19H5.7ZM5.7 17.1H10.45V14.25H5.7V17.1ZM12.35 17.1H17.1V14.25H12.35V17.1ZM0 15.2V1.9C0 1.3775 0.186042 0.930208 0.558125 0.558125C0.930208 0.186042 1.3775 0 1.9 0H15.2V1.9H1.9V15.2H0ZM5.7 12.35H10.45V9.5H5.7V12.35ZM12.35 12.35H17.1V9.5H12.35V12.35ZM5.7 7.6H17.1V5.7H5.7V7.6Z"
        fill="#B31B25"
      />
    </svg>
  );
}

function IconMoney() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" aria-hidden="true">
      <path
        d="M13 8.4375C12.1667 8.4375 11.4583 8.16406 10.875 7.61719C10.2917 7.07031 10 6.40625 10 5.625C10 4.84375 10.2917 4.17969 10.875 3.63281C11.4583 3.08594 12.1667 2.8125 13 2.8125C13.8333 2.8125 14.5417 3.08594 15.125 3.63281C15.7083 4.17969 16 4.84375 16 5.625C16 6.40625 15.7083 7.07031 15.125 7.61719C14.5417 8.16406 13.8333 8.4375 13 8.4375ZM6 11.25C5.45 11.25 4.97917 11.0664 4.5875 10.6992C4.19583 10.332 4 9.89062 4 9.375V1.875C4 1.35938 4.19583 0.917969 4.5875 0.550781C4.97917 0.183594 5.45 0 6 0H20C20.55 0 21.0208 0.183594 21.4125 0.550781C21.8042 0.917969 22 1.35938 22 1.875V9.375C22 9.89062 21.8042 10.332 21.4125 10.6992C21.0208 11.0664 20.55 11.25 20 11.25H6ZM8 9.375H18C18 8.85938 18.1958 8.41797 18.5875 8.05078C18.9792 7.68359 19.45 7.5 20 7.5V3.75C19.45 3.75 18.9792 3.56641 18.5875 3.19922C18.1958 2.83203 18 2.39062 18 1.875H8C8 2.39062 7.80417 2.83203 7.4125 3.19922C7.02083 3.56641 6.55 3.75 6 3.75V7.5C6.55 7.5 7.02083 7.68359 7.4125 8.05078C7.80417 8.41797 8 8.85938 8 9.375ZM19 15H2C1.45 15 0.979167 14.8164 0.5875 14.4492C0.195833 14.082 0 13.6406 0 13.125V2.8125H2V13.125H19V15Z"
        fill="white"
      />
    </svg>
  );
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProblemsSection() {
  return (
    <section
      id="problems"
      className="relative h-[1304px] overflow-hidden bg-[#F7F7F7] min-[744px]:h-[907px] xl:h-[887px]"
    >
      {/* Plus-pattern background — actual Figma SVG per viewport */}
      <img
        src={`${base}/assets/problems-bg-pattern-mobile.png`}
        alt=""
        aria-hidden="true"
        style={{ transform: "translateY(10px)" }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover min-[744px]:hidden"
      />
      <img
        src={`${base}/assets/problems-bg-pattern-tablet.png`}
        alt=""
        aria-hidden="true"
        style={{ transform: "translateY(12px)" }}
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover min-[744px]:block xl:hidden"
      />
      <img
        src={`${base}/assets/problems-bg-pattern.png`}
        alt=""
        aria-hidden="true"
        style={{ transform: "translateY(15px)" }}
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover xl:block"
      />

      {/* Desktop layout (1440 × 887) */}
      <div className="relative z-[30] mx-auto hidden h-[887px] w-[1440px] xl:block">
        <ProblemBadge className="absolute left-[674px] top-16" />

        <div className="absolute left-[370px] top-[115px] h-[140px] w-[700px] text-center">
          <h2 className="text-[48px] font-medium leading-[50px] tracking-[-2px] text-[#272B51]">
            Вы не знаете, сколько реально зарабатываете
          </h2>
          <p className="mt-4 text-[18px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Основные проблемы селлеров, которые мы решаем
          </p>
        </div>

        <article className="absolute left-20 top-[287px] h-[260px] w-[848px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-10 top-10 flex h-6 w-6 items-center justify-center">
            <IconRevenue />
          </div>
          <h3 className="absolute left-10 top-20 text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Выручка есть — прибыли нет
          </h3>
          <p className="absolute left-10 top-32 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Многие селлеры радуются миллионным оборотам, не замечая, что чистая прибыль после
            <br />
            всех вычетов стремится к нулю или уходит в минус.
          </p>
          <IncomeLink className="absolute left-10 top-[196px]" />
        </article>

        <article className="absolute left-[944px] top-[287px] h-[260px] w-[416px] rounded-[20px] bg-[#001E58] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-10 top-10 flex h-6 w-6 items-center justify-center">
            <IconProducts />
          </div>
          <h3 className="absolute left-10 top-20 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
            Непонятно, какие товары
            <br />
            реально прибыльные
          </h3>
          <p className="absolute left-10 top-40 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
            Хиты продаж могут быть убыточными
            <br />
            из-за стоимости хранения и рекламы.
          </p>
        </article>

        <article className="absolute left-20 top-[563px] h-[260px] w-[416px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-10 top-10 flex h-6 w-6 items-center justify-center">
            <IconTables />
          </div>
          <h3 className="absolute left-10 top-20 text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Таблицы, отчёты, хаос
          </h3>
          <p className="absolute left-10 top-32 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Бесконечные Excel-файлы, в которых
            <br />
            легко допустить ошибку и потерять
            <br />
            деньги.
          </p>
        </article>

        <article className="absolute left-[512px] top-[563px] h-[260px] w-[848px] overflow-visible rounded-[20px] bg-[#0052D0] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-10 top-10 flex h-6 w-6 items-center justify-center">
            <IconMoney />
          </div>
          <h3 className="absolute left-10 top-20 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
            Комиссии и расходы съедают маржу
          </h3>
          <p className="absolute left-10 top-32 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
            Ozon меняет тарифы, стоимость логистики растёт,
            <br />
            а ваши отчёты за этим не успевают. Мы считаем всё
            <br />
            до копейки автоматически.
          </p>
          <Image
            src="/assets/pig-desktop-figma-cropped.png"
            alt=""
            width={228}
            height={189}
            className="pointer-events-none absolute left-[556px] top-[35px] object-contain"
            aria-hidden="true"
          />
        </article>
      </div>

      {/* Tablet layout (744 × 907) */}
      <div className="relative z-[30] mx-auto hidden h-[907px] w-[744px] min-[744px]:block xl:hidden">
        <ProblemBadge className="absolute left-[326px] top-8" />

        <div className="absolute left-8 top-[83px] h-[104px] w-[680px] text-center">
          <h2 className="text-[36px] font-medium leading-8 tracking-[-2px] text-[#272B51]">
            Вы не знаете, сколько реально зарабатываете
          </h2>
          <p className="mt-4 text-[18px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Основные проблемы селлеров, которые мы решаем
          </p>
        </div>

        <article className="absolute left-8 top-[211px] h-[204px] w-[680px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconRevenue />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Выручка есть — прибыли нет
          </h3>
          <p className="absolute left-6 top-24 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Многие селлеры радуются миллионным оборотам, не замечая, что чистая прибыль после всех вычетов стремится к нулю или уходит в минус.
          </p>
          <IncomeLink className="absolute left-6 top-[156px]" />
        </article>

        <article className="absolute left-8 top-[431px] h-[230px] w-[390px] rounded-[20px] bg-[#001E58] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconProducts />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
            Непонятно, какие товары
            <br />
            реально прибыльные
          </h3>
          <p className="absolute left-6 top-32 max-w-[237px] text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
            Хиты продаж могут быть убыточными из-за стоимости хранения и рекламы.
          </p>
        </article>

        <article className="absolute left-[438px] top-[431px] h-[230px] w-[274px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconTables />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Таблицы, отчёты, хаос
          </h3>
          <p className="absolute left-6 top-32 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Бесконечные Excel-файлы,
            <br />
            в которых легко допустить
            <br />
            ошибку и потерять деньги.
          </p>
        </article>

        <article className="absolute left-8 top-[677px] h-[198px] w-[680px] overflow-visible rounded-[20px] bg-[#0052D0] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconMoney />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
            Комиссии и расходы съедают маржу
          </h3>
          <p className="absolute left-6 top-24 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
            Ozon меняет тарифы, стоимость логистики растёт,
            <br />
            а ваши отчёты за этим не успевают. Мы считаем всё
            <br />
            до копейки автоматически.
          </p>
          <Image
            src="/assets/pig-tablet-figma-cropped.png"
            alt=""
            width={201}
            height={166}
            className="pointer-events-none absolute left-[467px] top-[16px] object-contain"
            aria-hidden="true"
          />
        </article>
      </div>

      {/* Mobile layout (390 × 1304) */}
      <div className="relative z-[30] mx-auto h-[1304px] w-[390px] min-[744px]:hidden">
        <ProblemBadge className="absolute left-[148px] top-[47px]" />

        <div className="absolute left-4 top-[90px] h-[120px] w-[358px] text-center">
          <h2 className="text-[32px] font-medium leading-8 tracking-[-2px] text-[#272B51]">
            Вы не знаете, сколько реально зарабатываете
          </h2>
          <p className="mt-2 text-[16px] font-normal leading-6 tracking-[-1px] text-[#545881]">
            Основные проблемы селлеров, которые
            <br />
            мы решаем
          </p>
        </div>

        <article className="absolute left-4 top-[234px] h-[288px] w-[358px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconRevenue />
          </div>
          <h3 className="absolute left-6 top-14 w-[310px] text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Выручка есть — прибыли нет
          </h3>
          <p className="absolute left-6 top-32 max-w-[310px] text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Многие селлеры радуются миллионным оборотам, не замечая, что чистая прибыль после всех вычетов стремится к нулю или уходит в минус.
          </p>
          <IncomeLink className="absolute left-6 top-60" />
        </article>

        <article className="absolute left-4 top-[538px] h-[230px] w-[358px] rounded-[20px] bg-[#001E58] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconProducts />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
            Непонятно, какие товары
            <br />
            реально прибыльные
          </h3>
          <p className="absolute left-6 top-32 max-w-[237px] text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
            Хиты продаж могут быть убыточными из-за стоимости хранения и рекламы.
          </p>
        </article>

        <article className="absolute left-4 top-[784px] h-[198px] w-[358px] rounded-[20px] bg-white shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
          <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
            <IconTables />
          </div>
          <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-[#272B51]">
            Таблицы, отчёты, хаос
          </h3>
          <p className="absolute left-6 top-24 text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#545881]">
            Бесконечные Excel-файлы,
            <br />
            в которых легко допустить ошибку
            <br />
            и потерять деньги.
          </p>
        </article>

        <article className="absolute left-4 top-[998px] h-[282px] w-[358px]">
          <div className="relative h-[256px] w-[358px] overflow-visible rounded-[20px] bg-[#0052D0] shadow-[0_20px_40px_rgba(39,43,81,0.06)]">
            <div className="absolute left-6 top-6 flex h-6 w-6 items-center justify-center">
              <IconMoney />
            </div>
            <h3 className="absolute left-6 top-14 text-[24px] font-bold leading-8 tracking-[-1px] text-white">
              Комиссии и расходы
              <br />
              съедают маржу
            </h3>
            <p className="absolute left-6 top-32 max-w-[310px] text-[16px] font-normal leading-[26px] tracking-[-1px] text-[#ADB4DE]">
              Ozon меняет тарифы, стоимость логистики растёт, а ваши отчёты за этим не успевают. Мы считаем всё до копейки автоматически.
            </p>
            <Image
              src="/assets/pig-mobile-figma-cropped.png"
              alt=""
              width={137}
              height={113}
              className="pointer-events-none absolute left-[233px] top-[-64px] object-contain"
              aria-hidden="true"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
