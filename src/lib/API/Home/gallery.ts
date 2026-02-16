import { APIRequest } from "../APIRequest";

export type TGalleryResponse = {
  id: number;
  order: number;
  image: string;
};

export async function getGalleryImages(): Promise<TGalleryResponse[]> {
  return APIRequest<TGalleryResponse[]>("/api/product/gallery/");
}
