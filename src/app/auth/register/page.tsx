"use client";

import { useState } from "react";

import {
  useForm,
  validateForm,
  VALIDATION_RULES as VR,
} from "@/hooks/useForms";
import FormInput from "@/components/FormInput/FormInput";
import { EyeClosed } from "lucide-react";
import { EyeSlash } from "iconsax-reactjs";
import LoadingButton from "@/components/LoadingButton/LoadingButton";

type TRegisterForm = {
  email: string;
  password: string;
  phoneNumber: string;
};

function RegisterPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [showPassword, setShowPassword] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  const registerInitialValues: TRegisterForm = {
    email: "",
    password: "",
    phoneNumber: "",
  };

  const registerValidationSchema = {
    email: [VR.required(), VR.email()],
    password: [VR.required()],
    phoneNumber: [VR.required(), VR.phoneNumber()],
  };

  const { handleSubmit, handleChange, errors, formRef, isSubmitting } =
    useForm<TRegisterForm>(registerInitialValues, (values) =>
      validateForm<TRegisterForm>(registerValidationSchema, values),
    );

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  async function onSubmit(value: TRegisterForm) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
  }

  return (
    <form
      ref={formRef}
      className="bg-muted flex min-w-80 flex-col gap-4 rounded-2xl p-4"
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
      <FormInput
        name="phoneNumber"
        label="شماره تلفن | Phone Number"
        placeholder="شماره تلفن خود را وارد کنید"
        type="tel"
        inputClassName="placeholder:text-[14px] placeholder:text-right"
        onChange={handleChange}
        error={errors?.phoneNumber}
        disable={isSubmitting}
        required
      />
      <FormInput
        name="password"
        label="رمز عبور | Password"
        type={showPassword ? "text" : "password"}
        placeholder="رمز عبور خود را وارد کنید"
        inputClassName="placeholder:text-[14px]"
        onChange={handleChange}
        error={errors?.password}
        disable={isSubmitting}
        required
        innerInputEl={
          <button
            type="button"
            onClick={handleShowPassword}
            className="text-subtitle hover:text-primary absolute bottom-0 left-3 -translate-y-2/3 cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? <EyeSlash size={18} /> : <EyeClosed size={18} />}
          </button>
        }
      />

      <LoadingButton isLoading={isSubmitting}>
        ورود به حساب کاربری
      </LoadingButton>
    </form>
  );
}

export default RegisterPage;
