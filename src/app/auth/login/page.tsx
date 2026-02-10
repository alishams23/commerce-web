"use client";

import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import FormInput from "@/components/FormInput/FormInput";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import {
  useForm,
  validateForm,
  VALIDATION_RULES as VR,
} from "@/hooks/useForms";
import { EyeSlash } from "iconsax-reactjs";
import { EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type TLoginForm = {
  email: string;
  password: string;
  rememberMe: string;
};

function LoginPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    React                                   */
  /* -------------------------------------------------------------------------- */

  const [showPassword, setShowPassword] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  const loginInitialValues: TLoginForm = {
    email: "",
    password: "",
    rememberMe: "false",
  };

  const loginValidationSchema = {
    email: [VR.required(), VR.email()],
    password: [VR.required()],
    rememberMe: [],
  };

  const { handleSubmit, handleChange, errors, formRef, isSubmitting } =
    useForm<TLoginForm>(loginInitialValues, (values) =>
      validateForm<TLoginForm>(loginValidationSchema, values),
    );

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  async function onSubmit(value: TLoginForm) {
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

      <div className="flex items-center justify-between">
        <Link
          href="/auth/forgot-password"
          className="text-primary text-[12px] underline"
        >
          گذرواژه خود را فراموش کرده اید ؟
        </Link>

        <FormCheckbox
          label="به خاطر سپردن"
          name="rememberMe"
          onChange={handleChange}
          disable={isSubmitting}
          className="gap-1"
          labelClassName="text-[12px] text-subtitle"
        />
      </div>

      <LoadingButton isLoading={isSubmitting}>
        ورود به حساب کاربری
      </LoadingButton>
    </form>
  );
}

export default LoginPage;
