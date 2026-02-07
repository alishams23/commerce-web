"use client";

import FormInput from "@/components/FormInput/FormInput";
import FormTextarea from "@/components/FormTextarea/FormTextarea";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TValidationSchema,
  useForm,
  validateForm,
  VALIDATION_RULES as VR,
} from "@/hooks/useForms";

type TCommentForm = {
  name: string;
  email: string;
  comment: string;
};

function ProductTabs() {
  /* -------------------------------------------------------------------------- */
  /*                                    Form                                    */
  /* -------------------------------------------------------------------------- */

  const commentInitialValues: TCommentForm = {
    comment: "",
    email: "",
    name: "",
  };

  const commentValidationSchema: TValidationSchema<TCommentForm> = {
    comment: [VR.required()],
    email: [VR.required(), VR.email()],
    name: [VR.required()],
  };

  const { handleSubmit, handleChange, errors, isSubmitting, formRef } =
    useForm<TCommentForm>(commentInitialValues, (value) =>
      validateForm<TCommentForm>(commentValidationSchema, value),
    );

  async function onSubmit(value: TCommentForm) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting", value);
  }

  return (
    <Tabs dir="rtl" defaultValue="descriptions">
      <TabsList className="lg:max-w-100">
        <TabsTrigger value="descriptions">توضیحات</TabsTrigger>
        <TabsTrigger value="info">اطلاعات</TabsTrigger>
        <TabsTrigger value="comments">نظرات</TabsTrigger>
      </TabsList>

      <TabsContent value="descriptions">
        <div className="text-title text-lg font-black">توضیحات</div>
        <hr className="text-title my-2" />
        <p className="text-[14px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شصت و سه درصد گذشته
          حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
        </p>
      </TabsContent>

      <TabsContent value="info">
        <div className="text-title text-lg font-black">اطلاعات</div>
        <hr className="text-title my-2" />
        <div className="text-title flex gap-2 text-[14px] *:rounded-xl *:bg-white *:p-2">
          <div>برند</div>
          <div>آدیداس</div>
        </div>
      </TabsContent>

      <TabsContent value="comments">
        <div className="text-title text-lg font-black">نظرات</div>
        <hr className="text-title my-2" />
        <div className="text-title text-lg font-black">دیدگاه شما</div>
        <hr className="text-title my-2" />

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormInput
            label="نام | Name"
            name="name"
            required
            onChange={handleChange}
            error={errors?.name}
            disable={isSubmitting}
          />
          <FormInput
            label="ایمیل | Email"
            name="email"
            dir="ltr"
            required
            onChange={handleChange}
            error={errors?.email}
            disable={isSubmitting}
          />
          <FormTextarea
            label="نظر | Comment"
            name="comment"
            required
            onChange={handleChange}
            error={errors?.comment}
            disable={isSubmitting}
          />

          <LoadingButton isLoading={isSubmitting}>ارسال پیام</LoadingButton>
        </form>
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
