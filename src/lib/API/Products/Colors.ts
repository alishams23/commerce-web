import { APIRequest } from "../APIRequest";

type TColorsResponse = {
  id: number;
  name: string;
  code: string;
};

export async function getColors(): Promise<TColorsResponse[]> {
  return APIRequest<TColorsResponse[]>("/api/product/colors-list/");
}
