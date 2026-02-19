import axios, { AxiosError, AxiosResponse } from "axios";

const defaultAxiosHeaders = { "Content-Type": "application/json" };

// -----------------------------------

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: defaultAxiosHeaders,
});

AXIOS.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(new Error("Network error"));
    }

    return Promise.reject(error);
  },
);

export default AXIOS;
