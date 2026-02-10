"use client";

import {
  useForm,
  validateForm,
  VALIDATION_RULES as VR,
} from "@/hooks/useForms";

import LoadingButton from "@/components/LoadingButton/LoadingButton";
import FormInput from "@/components/FormInput/FormInput";

type TForgotPasswordForm = {
  email: string;
};

function ForgotPasswordPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  const forgotPasswordInitialValues: TForgotPasswordForm = {
    email: "",
  };

  const forgotPasswordValidationSchema = {
    email: [VR.required(), VR.email()],
  };

  const { handleSubmit, handleChange, errors, formRef, isSubmitting } =
    useForm<TForgotPasswordForm>(forgotPasswordInitialValues, (values) =>
      validateForm<TForgotPasswordForm>(forgotPasswordValidationSchema, values),
    );

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  async function onSubmit(value: TForgotPasswordForm) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
  }

  return (
    <form
      ref={formRef}
      className="bg-muted flex flex-col gap-4 rounded-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        name="email"
        label="ایمیل | Email"
        dir="ltr"
        placeholder="ایمیل خود را وارد کنید"
        inputClassName="placeholder:text-[14px] placeholder:text-right"
        onChange={handleChange}
        error={errors?.email}
        disable={isSubmitting}
        required
      />

      <LoadingButton isLoading={isSubmitting}>
        ورود به حساب کاربری
      </LoadingButton>
    </form>
  );
}

export default ForgotPasswordPage;
