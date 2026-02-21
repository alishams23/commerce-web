export const SORT_OPTIONS: { name: string; value: string }[] = [
  {
    name: "جدید ترین",
    value: "-created_at",
  },
  {
    name: "محبوب ترین",
    value: "a",
  },
  {
    name: "ارزان ترین",
    value: "fixed_price",
  },
  {
    name: "گران ترین",
    value: "-fixed_price",
  },
  {
    name: "بیشترین امتیاز",
    value: "b",
  },
] as const;
