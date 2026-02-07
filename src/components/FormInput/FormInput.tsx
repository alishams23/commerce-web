import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type TFormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  dir?: "rtl" | "ltr";
  required?: boolean;
};

function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  type = "text",
  dir = "rtl",
}: TFormInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className={cn("text-[14px]", error ? "text-error" : "text-subtitle")}
      >
        {label}
      </label>

      {/* TODO: what if make thin on value type!!! */}
      {required && (
        <span className="text-primary mr-1 font-[arial] text-2xl leading-0">
          *
        </span>
      )}

      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        dir={dir}
        className={cn(error && "border-error")}
      />

      {error && <span className="text-error mr-4 text-[12px]">{error}</span>}
    </div>
  );
}

export default FormInput;
