"use client";

import useForm from "@/hooks/useForm";

import LoadingButton from "@/components/LoadingButton/LoadingButton";
import FormTextarea from "@/components/FormTextarea/FormTextarea";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FormInput from "@/components/FormInput/FormInput";

function ContactUsPage() {
  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  type TContactUsForm = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    description: string;
  };
  const contactUsInitialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    description: "",
  };

  const {
    handleSubmit,
    handleChange,
    errors,
    isSubmitting,
    values,
    // reset
  } = useForm<TContactUsForm>(contactUsInitialValues, (values) => {
    const errors: Partial<Record<keyof TContactUsForm, string>> = {};

    if (!values.firstName) errors.firstName = "خر";
    if (!values.lastName) errors.lastName = "ERROR";
    if (!values.phoneNumber) errors.phoneNumber = "خر";
    if (!values.description) errors.description = "خر";

    return errors;
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  async function onSubmit(value: TContactUsForm) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
  }
  // reset();

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
