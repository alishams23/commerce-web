"use client";

import AmazingDiscountsProducts from "./components/AmazingDiscountsProducts";
import AmazingDiscountsHeader from "./components/AmazingDiscountsHeader";
import AmazingDiscountsTimer from "./components/AmazingDiscountsTimer";

import useCountdown from "./hooks/useCountDown";

function AmazingDiscounts() {
  /* -------------------------------------------------------------------------- */
  /*                                  Countdown                                 */
  /* -------------------------------------------------------------------------- */

  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2026-01-10T00:00:00"),
  );

  return (
    <div className="mx-12 flex flex-col items-center gap-4 md:mx-36">
      {/* Mobile header */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <AmazingDiscountsHeader />
      </div>

      <div className="bg-primary flex w-full flex-col gap-12 rounded-4xl pt-8 pb-10 md:flex-row md:gap-0 md:bg-transparent md:py-0">
        {/* Timer + desktop header */}
        <div className="flex flex-col">
          <AmazingDiscountsTimer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />

          <div className="mt-6 hidden flex-col items-start gap-4 md:flex">
            <AmazingDiscountsHeader />
          </div>
        </div>

        <AmazingDiscountsProducts />
      </div>
    </div>
  );
}

export default AmazingDiscounts;
