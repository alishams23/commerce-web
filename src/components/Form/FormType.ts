import { ChangeEvent } from "react";

export type TFormProps = {
  label: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  disable?: boolean;
};
