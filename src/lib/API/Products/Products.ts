import {
  GetProductsParams,
  queryParamGenerator,
} from "@/lib/queryParamGenerator";
import { APIRequest } from "../APIRequest";
import { PaginatedResponse } from "../APITypes";

export type TProductColorImage = {
  id: number;
  image: string;
  order: number;
  is_cover: boolean;
};

type TProductColorCode = {
  id: number;
  name: string;
  code: string;
};

export type TProductColor = {
  id: number;
  color: TProductColorCode;
  price: number;
  stock: number;
  images: TProductColorImage[];
};

export type TProductResponse = {
  id: number;
  name: string;
  fixed_price: number;
  cover_image: string | null;
  colors: TProductColor[];
};

export async function getProducts(
  params?: GetProductsParams,
): Promise<PaginatedResponse<TProductResponse[]>> {
  return APIRequest<PaginatedResponse<TProductResponse[]>>(
    `/api/product/list/${queryParamGenerator(params)}`,
  );
}
