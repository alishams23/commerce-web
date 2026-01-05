import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a Date to Persian (Shamsi / Jalali) calendar string.
 * Uses Intl.DateTimeFormat with the 'fa-IR-u-ca-persian' locale.
 */
export function toShamsi(date: Date, options?: Intl.DateTimeFormatOptions) {
  try {
    const formatter = new Intl.DateTimeFormat(
      "fa-IR-u-ca-persian",
      options ?? { year: "numeric", month: "long", day: "numeric" },
    );
    return formatter.format(date);
  } catch {
    return date.toLocaleDateString();
  }
}
