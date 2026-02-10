"use client";

import {
  useForm,
  TValidationSchema,
  validateForm,
  VALIDATION_RULES as VR,
} from "@/hooks/useForms";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import FormTextarea from "@/components/FormTextarea/FormTextarea";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FormInput from "@/components/FormInput/FormInput";

type TContactUsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
};

function ContactUsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  const contactUsInitialValues: TContactUsFormValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    description: "",
  };

  const contactUsValidationSchema: TValidationSchema<TContactUsFormValues> = {
    firstName: [VR.required()],
    lastName: [VR.required()],
    email: [VR.email()],
    phoneNumber: [VR.required(), VR.phoneNumber()],
    description: [VR.required()],
  };

  const { handleSubmit, handleChange, errors, isSubmitting, formRef } =
    useForm<TContactUsFormValues>(contactUsInitialValues, (values) =>
      validateForm<TContactUsFormValues>(contactUsValidationSchema, values),
    );

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  async function onSubmit(value: TContactUsFormValues) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
  }

  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ href: "", name: "تماس‌با‌ما" }]} />

      <div>
        <div className="font-extrabold">تماس با ما</div>
        <div className="text-subtitle mt-2 text-[14px]">
          جهت ارتباط گیری با ما می توانید فرم زیر ارتباط بگیرید .
        </div>

        <form
          ref={formRef}
          className="mt-4 flex flex-col gap-4 lg:max-w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            label="نام | FirstName"
            name="firstName"
            required
            onChange={handleChange}
            error={errors?.firstName}
            disable={isSubmitting}
          />
          <FormInput
            label="نام خانوادگی | LastName"
            name="lastName"
            required
            onChange={handleChange}
            error={errors?.lastName}
            disable={isSubmitting}
          />
          <FormInput
            label="ایمیل | Email"
            name="email"
            dir="ltr"
            onChange={handleChange}
            error={errors?.email}
            disable={isSubmitting}
          />
          <FormInput
            label="شماره تماس | PhoneNumber"
            name="phoneNumber"
            type="tel"
            required
            onChange={handleChange}
            error={errors?.phoneNumber}
            disable={isSubmitting}
          />
          <FormTextarea
            label="توضیحات | Description"
            name="description"
            required
            onChange={handleChange}
            error={errors?.description}
            disable={isSubmitting}
          />

          <LoadingButton isLoading={isSubmitting}>ارسال</LoadingButton>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
