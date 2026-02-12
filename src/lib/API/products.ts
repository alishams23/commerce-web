import { APIRequest } from "./APIRequest";

// TODO: change the types
export type TProduct = {
  id: number;
  colors: string[];
  price: number;
  title: string;
  src: string;
};

export async function getNewProducts(): Promise<TProduct[]> {
  return APIRequest<TProduct[]>("/api/product/list/");
}
