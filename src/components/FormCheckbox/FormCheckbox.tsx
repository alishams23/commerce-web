import { cn } from "@/lib/utils";
import { TFormProps } from "../Form/FormType";
import { Input } from "../ui/input";

type TFormCheckboxProps = TFormProps & {
  className?: string;
  labelClassName?: string;
};

function FormCheckbox({
  name,
  label,
  onChange,
  className,
  labelClassName,
  disable = false,
}: TFormCheckboxProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Input
        type="checkbox"
        id={name}
        className="w-4"
        onChange={onChange}
        disabled={disable}
      />
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
    </div>
  );
}

export default FormCheckbox;
