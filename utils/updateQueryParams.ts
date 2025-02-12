export const updateQueryParams = (
  url: string,
  params: Record<string, string>
): string => {
  const [baseUrl, queryString] = url.split("?", 2);
  const queryParams = new URLSearchParams(queryString || "");

  for (const key in params) {
    queryParams.set(key, params[key]);
  }

  return `${baseUrl}?${queryParams}`;
};
