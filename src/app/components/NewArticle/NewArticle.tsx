import Image from "next/image";
import { Calendar, Clock } from "iconsax-reactjs";

import { toShamsi } from "@/src/lib/utils";

import NewArticleHeader from "./components/NewArticleHeader";
import { ARTICLES } from "./constants";

function NewArticle() {
  return (
    <div className="mx-12 flex flex-col gap-4 md:mx-36">
      <NewArticleHeader />

      <div className="scrollbar-hide flex snap-x snap-proximity gap-2 overflow-x-scroll scroll-smooth md:grid md:grid-cols-[auto_1fr_1fr] md:grid-rows-2">
        {/* First Article */}
        <div className="relative z-0 flex snap-start flex-col gap-2 rounded-2xl bg-[#F7F7F7] p-4 md:row-span-2">
          <div className="bg-primary absolute top-8 left-0 z-10 rounded-r-xl px-3 py-2 text-[14px] text-white">
            دسته بندی نشده
          </div>

          <div className="relative h-50 w-62.5 overflow-hidden rounded-2xl md:w-70.5">
            <Image
              alt={ARTICLES[0].title}
              src={ARTICLES[0].src}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="max-w-62.5 font-semibold text-[#494949]">
              {ARTICLES[0].title}
            </div>

            <div className="mt-auto flex justify-between gap-4">
              <div className="flex items-center gap-1 text-[#8B8B8B]">
                <Clock size={18} variant="Broken" />
                <div>{ARTICLES[0].readTime} دقیقه</div>
              </div>
              <div className="flex items-center gap-1 text-[#8B8B8B]">
                <Calendar size={18} variant="Broken" />
                {toShamsi(ARTICLES[0].date)}
              </div>
            </div>
          </div>
        </div>

        {/* Others */}
        {ARTICLES.filter((article) => article.id !== ARTICLES[0].id).map(
          ({ src, title, id, date, readTime, content }) => (
            <div
              key={id}
              className="relative z-0 flex snap-start flex-col gap-2 rounded-2xl bg-[#F7F7F7] p-4 md:col-span-2 md:flex-row"
            >
              <div className="bg-primary absolute top-8 left-0 z-10 rounded-r-xl px-3 py-2 text-[14px] text-white">
                دسته بندی نشده
              </div>

              <div className="relative h-50 w-62.5 overflow-hidden rounded-2xl md:h-31 md:w-36.5 md:shrink-0">
                <Image alt={title} src={src} fill className="object-cover" />
              </div>

              <div className="flex w-full flex-col gap-2">
                <div className="max-w-62.5 font-semibold text-[#494949]">
                  {title}
                </div>

                <p className="hidden max-w-105.75 text-[14px] font-normal text-[#808080] md:block">
                  {content}
                </p>

                <div className="mt-auto flex justify-between gap-4">
                  <div className="flex items-center gap-1 text-[#8B8B8B]">
                    <Clock size={18} variant="Broken" />
                    <div>{readTime} دقیقه</div>
                  </div>
                  <div className="flex items-center gap-1 text-[#8B8B8B]">
                    <Calendar size={18} variant="Broken" />
                    {toShamsi(date)}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default NewArticle;
