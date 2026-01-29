import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductTabs() {
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

        <div className="flex flex-col gap-2">
          <div>
            <label className="text-subtitle text-[14px]">نام | Name</label>
            <Input />
          </div>
          <div>
            <label className="text-subtitle text-[14px]">ایمیل | Email</label>
            <Input />
          </div>
          <div>
            <label className="text-subtitle text-[14px]">
              دیدگاه | Comment
            </label>
            <Input />
          </div>

          <Input
            type="submit"
            className="text-title bg-muted-foreground"
            value="ثبت دیدگاه"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
