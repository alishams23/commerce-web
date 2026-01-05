import { useEffect, useState, useRef } from "react";

function useCountdown(targetDate: Date) {
  /* -------------------------------------------------------------------------- */
  /*                                 React Hook                                 */
  /* -------------------------------------------------------------------------- */

  const [secondsLeft, setSecondsLeft] = useState(() =>
    Math.max(0, Math.floor((targetDate.getTime() - Date.now()) / 1000)),
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function twoDigits(num: number) {
    return num.toString().padStart(2, "0");
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Constants                                 */
  /* -------------------------------------------------------------------------- */

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return {
    days: twoDigits(days),
    hours: twoDigits(hours),
    minutes: twoDigits(minutes),
    seconds: twoDigits(seconds),
  };
}

export default useCountdown;
