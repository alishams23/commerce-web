import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type TFormInputProps = {
  label: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  dir?: "rtl" | "ltr";
  required?: boolean;
  disable?: boolean;
};

function FormInput({
  label,
  name,
  value,
  defaultValue,
  onChange,
  error,
  placeholder,
  disable = false,
  required = false,
  type = "text",
  dir = "rtl",
}: TFormInputProps) {
  // TODO: change this if needed
  const isControlled = value !== undefined;

  return (
    <div>
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
        className={cn(error && "border-error")}
        disabled={disable}
      />

      {error && <span className="text-error mr-4 text-[12px]">{error}</span>}
    </div>
  );
}

export default FormInput;
