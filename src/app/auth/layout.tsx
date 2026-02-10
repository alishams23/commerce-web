"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

function LoginLayout({ children }: { children: ReactNode }) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const pathname = usePathname();

  return (
    <div className="mt-4 flex flex-col items-center gap-6">
      <div className="bg-muted flex gap-4 rounded-2xl px-11 py-4">
        <Link
          href="/auth/login"
          className={cn(
            "rounded-lg px-3 py-2",
            pathname.includes("/auth/login")
              ? "bg-primary text-white"
              : "hover:bg-muted-foreground cursor-pointer",
          )}
        >
          ورود
        </Link>

        <Link
          href="/auth/register"
          className={cn(
            "rounded-lg px-4 py-2",
            pathname.includes("/auth/register")
              ? "bg-primary text-white"
              : "hover:bg-muted-foreground cursor-pointer",
          )}
        >
          ثبت نام
        </Link>
      </div>
      <div className="min-w-80 lg:min-w-100">{children}</div>
    </div>
  );
}

export default LoginLayout;
