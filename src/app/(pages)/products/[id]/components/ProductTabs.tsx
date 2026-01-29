import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductTabs() {
  return (
    <Tabs defaultValue="descriptions">
      <TabsList>
        <TabsTrigger value="comments">نظرات</TabsTrigger>
        <TabsTrigger value="info">اطلاعات</TabsTrigger>
        <TabsTrigger value="descriptions">توضیحات</TabsTrigger>
      </TabsList>

      <TabsContent value="descriptions">
        <div className="text-title text-lg font-black">توضیحات</div>
        <hr className="text-title my-2" />
        <p className="text-end text-[14px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
        </p>
      </TabsContent>

      <TabsContent value="info">
        <div className="text-title text-lg font-black">اطلاعات</div>
        <hr className="text-title my-2" />
        <div className="text-title flex flex-row-reverse gap-2 text-[14px] *:rounded-xl *:bg-white *:p-2">
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
