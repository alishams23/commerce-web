import { cn } from "@/lib/cn";

import { TFormProps } from "../Form/FormType";

type TFormTextareaProps = TFormProps & {
  placeholder?: string;
  rows?: number;
};

function FormTextarea({
  label,
  name,
  value,
  defaultValue,
  onChange,
  error,
  placeholder,
  disable = false,

  required,
  rows = 4,
}: TFormTextareaProps) {
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

      <textarea
        id={name}
        name={name}
        {...(isControlled ? { value } : { defaultValue })}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disable}
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
