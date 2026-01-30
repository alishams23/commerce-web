import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

type TFormTextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

function FormTextarea({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  rows = 4,
}: TFormTextareaProps) {
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

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "border-input bg-background block w-full rounded-2xl border px-3 py-2",
          error && "border-error",
        )}
      />

      {error && <span className="text-error mr-4 text-[12px]">{error}</span>}
    </div>
  );
}

export default FormTextarea;
