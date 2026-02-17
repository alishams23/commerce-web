import { APIRequest } from "../APIRequest";
import { TProductColor } from "./Products";

type TProductComment = {
  id: number;
  created_by: {
    get_full_name: string;
    profile_image: string;
  };
  text: string;
  is_approved: boolean;
  replies: string;
};

export type TProductByIdResponse = {
  id: number;
  name: string;
  brand: {
    id: number;
    name: string;
  } | null;
  fixed_price: number;
  percentage: number;
  is_published: boolean;
  is_favorite: boolean;
  specifications: string;
  description: string;
  colors: TProductColor[];
  comments: TProductComment[];
};

export async function getProductById(
  productId: string,
): Promise<TProductByIdResponse> {
  return APIRequest<TProductByIdResponse>(
    `/api/product/product-detail/${productId}/`,
  );
}
