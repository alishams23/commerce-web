"use client";

import { FormEvent } from "react";
import { cn } from "@/src/lib/utils";

import { SearchNormal1 } from "iconsax-reactjs";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

type SearchInputProps = {
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

function SearchInput({ className, onSubmit }: SearchInputProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

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
        className="absolute top-1/2 left-2 h-8.5 w-8.5 -translate-y-1/2 rounded-2xl bg-white hover:bg-transparent"
      >
        <SearchNormal1 className="h-5 w-5 text-gray-500" />
      </Button>
    </form>
  );
}

export default SearchInput;
