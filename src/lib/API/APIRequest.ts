type TApiConfig = {
  baseUrl?: string;
};

const defaultConfig: Required<TApiConfig> = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
};

export async function APIRequest<TResponse>(
  path: string,
  init?: RequestInit,
  config: TApiConfig = defaultConfig,
): Promise<TResponse> {
  const url = `${config.baseUrl}${path}`;

  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    // You can customize this error shape later if needed
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as TResponse;
}
