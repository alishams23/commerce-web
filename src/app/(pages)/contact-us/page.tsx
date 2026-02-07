"use client";

import {
  useForm,
  TValidationSchema,
  validateForm,
  VALIDATION_RULES,
} from "@/hooks/useForms";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import FormTextarea from "@/components/FormTextarea/FormTextarea";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FormInput from "@/components/FormInput/FormInput";

function ContactUsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  type TContactUsFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    description: string;
  };
  const contactUsInitialValues: TContactUsFormValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    description: "",
  };

  const contactUsValidationSchema: TValidationSchema<TContactUsFormValues> = {
    firstName: [VALIDATION_RULES.required()],
    lastName: [VALIDATION_RULES.required()],
    email: [VALIDATION_RULES.email()],
    phoneNumber: [VALIDATION_RULES.required(), VALIDATION_RULES.phoneNumber()],
    description: [VALIDATION_RULES.required()],
  };

  const { handleSubmit, handleChange, errors, isSubmitting, values, reset } =
    useForm<TContactUsFormValues>(contactUsInitialValues, (values) =>
      validateForm<TContactUsFormValues>(contactUsValidationSchema, values),
    );

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  async function onSubmit(value: TContactUsFormValues) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
    reset();
  }

  return (
    <div className="mx-12 lg:mx-36">
      <Breadcrumbs items={[{ href: "", name: "تماس‌با‌ما" }]} />

      <div>
        <div className="font-extrabold">تماس با ما</div>
        <div className="text-subtitle mt-2 text-[14px]">
          جهت ارتباط گیری با ما می توانید فرم زیر ارتباط بگیرید .
        </div>
      </div>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="نام | FirstName"
          name="firstName"
          value={values.firstName}
          required
          onChange={handleChange}
          error={errors?.firstName}
        />
        <FormInput
          label="نام خانوادگی | LastName"
          name="lastName"
          value={values.lastName}
          required
          onChange={handleChange}
          error={errors?.lastName}
        />
        <FormInput
          label="ایمیل | Email"
          name="email"
          dir="ltr"
          value={values.email}
          onChange={handleChange}
          error={errors?.email}
        />
        <FormInput
          label="شماره تماس | PhoneNumber"
          name="phoneNumber"
          type="tel"
          value={values.phoneNumber}
          required
          onChange={handleChange}
          error={errors?.phoneNumber}
        />
        <FormTextarea
          label="توضیحات | Description"
          name="description"
          value={values.description}
          required
          onChange={handleChange}
          error={errors?.description}
        />

        <LoadingButton loading={isSubmitting}>ارسال</LoadingButton>
      </form>
    </div>
  );
}

export default ContactUsPage;
