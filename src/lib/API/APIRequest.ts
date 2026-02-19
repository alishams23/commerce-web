import { AxiosRequestConfig, AxiosError } from "axios";
import AXIOS from "../axiosInstance";

export class APIError<TData = unknown> extends Error {
  status?: number;
  data?: TData;

  constructor(status?: number, data?: TData) {
    super(`Request failed with status ${status}`);
    this.status = status;
    this.data = data;
  }
}

export async function APIRequest<TResponse>(
  path: string,
  init?: AxiosRequestConfig,
): Promise<TResponse> {
  try {
    const response = await AXIOS.request<TResponse>({ url: path, ...init });
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    const status = error.response?.status;
    const data = error.response?.data;

    throw new APIError(status, data);
  }
}
