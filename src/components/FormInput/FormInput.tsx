import { HTMLInputTypeAttribute, ReactElement } from "react";

import { cn } from "@/lib/cn";

import { Input } from "../ui/input";
import { TFormProps } from "../Form/FormType";

type TFormInputProps = TFormProps & {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  inputClassName?: string;
  dir?: "rtl" | "ltr";
  innerInputEl?: ReactElement;
};

function FormInput({
  label,
  name,
  value,
  defaultValue,
  onChange,
  error,
  placeholder,
  inputClassName,
  disable = false,
  required = false,
  type = "text",
  dir = "rtl",
  innerInputEl,
}: TFormInputProps) {
  // TODO: change this if needed
  const isControlled = value !== undefined;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={cn("text-[14px]", error ? "text-error" : "text-subtitle")}
      >
        {label}
      </label>

      {required && (
        <span className="text-primary mr-1 font-[arial] text-2xl leading-0">
          *
        </span>
      )}

      <Input
        type={type}
        name={name}
        {...(isControlled ? { value } : { defaultValue })}
        onChange={onChange}
        placeholder={placeholder}
        dir={dir}
        className={cn(error && "border-error", inputClassName)}
        disabled={disable}
      />

      {innerInputEl}

      {error && <span className="text-error mr-4 text-[12px]">{error}</span>}
    </div>
  );
}

export default FormInput;
