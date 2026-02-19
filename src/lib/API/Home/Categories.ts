import { APIRequest } from "../APIRequest";

export type TCategoryChild = {
  id: number;
  name: string;
  order: number;
};

type TCategoryResponse = {
  id: number;
  name: string;
  order: number;
  children: TCategoryChild[];
};

export async function getCategories(): Promise<TCategoryChild[]> {
  const response = await APIRequest<TCategoryResponse[]>(
    "/api/product/categories-list/",
  );

  return response.flatMap((category) => category.children);
}
