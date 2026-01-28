"use client";

import { FormEvent } from "react";
import { cn } from "@/lib/utils";

import { SearchNormal1 } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TSearchInputProps = {
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

function SearchInput({ className, onSubmit }: TSearchInputProps) {
  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.(e);
  }

  return (
    <form className={cn("relative", className)} onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="جست و جو . . ."
        variant="filled"
        className="h-12.5"
      />
      <Button
        type="submit"
        size="icon"
        className="absolute top-1/2 left-2 h-8.5 w-8.5 -translate-y-1/2 bg-white hover:bg-transparent"
      >
        <SearchNormal1 variant="Broken" className="h-5 w-5 text-gray-500" />
      </Button>
    </form>
  );
}

export default SearchInput;
