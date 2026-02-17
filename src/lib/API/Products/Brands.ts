import { APIRequest } from "../APIRequest";

export type TBrandResponse = {
  id: number;
  name: string;
};

export async function getBrands(): Promise<TBrandResponse[]> {
  return APIRequest<TBrandResponse[]>("/api/product/brands-list/");
}
