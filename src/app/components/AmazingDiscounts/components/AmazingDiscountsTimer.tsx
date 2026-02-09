type TAmazingDiscountsTimerProps = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function AmazingDiscountsTimer({
  days,
  hours,
  minutes,
  seconds,
}: TAmazingDiscountsTimerProps) {
  const items = [
    { title: "روز", value: days },
    { title: "ساعت", value: hours },
    { title: "دقیقه", value: minutes },
    { title: "ثانیه", value: seconds },
  ];

  return (
    <div className="lg:bg-primary flex justify-center gap-2 lg:rounded-r-4xl lg:p-6">
      {items.map(({ title, value }) => (
        <div
          key={title}
          className="flex min-h-22 min-w-14.5 flex-col items-center justify-center rounded-2xl bg-[#FFFFFF26]"
        >
          <div className="text-xl text-white">{value}</div>
          <div className="bg-primary h-0.5 w-full" />
          <div className="text-[14px] text-[#FFFFFF80]">{title}</div>
        </div>
      ))}
    </div>
  );
}

export default AmazingDiscountsTimer;
