import { ChangeEvent, FormEvent, useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

function useForm<T extends Record<string, string>>(
  initialValues: T,
  validate?: (values: T) => Errors<T>,
) {
  /* -------------------------------------------------------------------------- */
  /*                                 React Hooks                                */
  /* -------------------------------------------------------------------------- */

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(onSubmit: (values: T) => Promise<void> | void) {
    return async (e: FormEvent) => {
      e.preventDefault();

      if (validate) {
        const validateErrors = validate(values);

        if (Object.keys(validateErrors).length > 0) {
          setErrors(validateErrors);
          return;
        }
      }

      try {
        setIsSubmitting(true);
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    };
  }

  function reset() {
    setValues(initialValues);
    setErrors(undefined);
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  };
}

export default useForm;
