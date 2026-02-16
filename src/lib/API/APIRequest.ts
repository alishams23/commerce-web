import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

type TApiConfig = {
  baseUrl?: string;
};

const defaultConfig: Required<TApiConfig> = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
};

const defaultAxiosHeaders = { "Content-Type": "application/json" };

let sharedInstance: AxiosInstance | null = null;

function getAxiosInstance(baseUrl?: string): AxiosInstance {
  const url = baseUrl ?? defaultConfig.baseUrl;
  if (sharedInstance && sharedInstance.defaults.baseURL === url)
    return sharedInstance;
  sharedInstance = axios.create({ baseURL: url, headers: defaultAxiosHeaders });
  return sharedInstance;
}

export const http = getAxiosInstance();

export async function APIRequest<TResponse>(
  path: string,
  init?: AxiosRequestConfig,
  config: TApiConfig = defaultConfig,
): Promise<TResponse> {
  const instance = getAxiosInstance(config.baseUrl);

  try {
    const response = await instance.request<TResponse>({ url: path, ...init });
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;
      throw new Error(
        `Request failed with status ${status}: ${JSON.stringify(data)}`,
      );
    }
    throw err;
  }
}
