import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { use } from "react";
import { PAGE_PRODUCTS } from "../constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

function ProductIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Get item
  const prod = PAGE_PRODUCTS.find((item) => item.id === parseInt(id!))!;

  return (
    <div className="mx-12 flex flex-col gap-6 lg:mx-36">
      <Breadcrumbs
        items={[
          { href: "/products", name: "محصولات" },
          { href: `/products/${id}`, name: prod.title },
        ]}
      />

      <Image alt={prod.title} src={prod.src} width={500} height={500} />

      <div className="flex justify-center gap-4">
        <Image alt={prod.title} src={prod.src} width={70} height={70} />
        <Image alt={prod.title} src={prod.src} width={70} height={70} />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        <div className="text-lg font-black">{prod.title}</div>
        <div className="text-subtitle text-[14px]">کیف اسپرت</div>

        <ul className="text-subtitle list-disc pr-4 text-[14px]">
          <li>برند: آدیداس</li>
          <li>شناسه محصول: {prod.id}</li>
          <li>رنگ:</li>
        </ul>

        <div className="scrollbar-hide flex gap-2 overflow-x-auto">
          {prod.colors.map((color) => (
            <Button key={color} variant="outline">
              <div
                className="h-7 w-7 rounded-lg"
                style={{ backgroundColor: color }}
              />
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-2xl px-6 py-8">
        <div className="mb-4 flex justify-between">
          <div className="bg-muted-foreground flex items-center gap-2 rounded-2xl p-1">
            <Button
              size="icon"
              variant="secondary"
              className="justify-center text-[30px]"
            >
              +
            </Button>
            5
            <Button size="icon" variant="secondary" className="text-[30px]">
              -
            </Button>
          </div>

          <div>
            <div className="mb-2 flex gap-2">
              <div className="text-subtitle text-[14px] font-semibold line-through">
                {prod.price.toLocaleString("fa-IR")}
                تومان
              </div>
              <div className="bg-primary mr-2 rounded-full px-2 text-[12px] text-white">
                27%
              </div>
            </div>
            <div className="text-primary text-center text-[20px] font-semibold">
              {prod.price.toLocaleString("fa-IR")}
              تومان
            </div>
          </div>
        </div>

        <Button className="h-11.5 w-full">افزودن به سبد خرید</Button>
      </div>

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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شصت و سه درصد گذشته
            حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی.
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
              <label htmlFor="name" className="text-subtitle text-[14px]">
                نام | Name 
              </label>
              <Input name="name" />
            </div>
            <div>
              <label htmlFor="email" className="text-subtitle text-[14px]">
                ایمیل | Email 
              </label>
              <Input name="email" />
            </div>
            <div>
              <label htmlFor="comment" className="text-subtitle text-[14px]">
                دیدگاه | Comment 
              </label>
              <Input name="comment" />
            </div>

            <Input
              type="submit"
              className="text-title bg-muted-foreground"
              value="ثبت دیدگاه"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductIdPage;
