export type TArticle = {
  id: number;
  src: string;
  title: string;
  readTime: number;
  content: string;
  date: Date;
};

export const ARTICLES: TArticle[] = [
  {
    id: 1,
    src: "/asset/articles/article1.jpg",
    title: "کیف های تولیدی آقای ابریشم برای بالابردن کیفیت تولید در یزد",
    content: "محتوای مقاله دوم در اینجا قرار می گیرد.",
    readTime: 5,
    date: new Date(),
  },
  {
    id: 2,
    src: "/asset/articles/article2.jpg",
    title: "عنوان مقاله دوم",
    readTime: 7,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ازطراحان گرافیک است، چاپگرها و...",
    date: new Date(),
  },
  {
    id: 3,
    src: "/asset/articles/article3.jpg",
    title: "عنوان مقاله سوم",
    readTime: 15,
    content: "محتوای مقاله سوم در اینجا قرار می گیرد.",
    date: new Date(),
  },
];
