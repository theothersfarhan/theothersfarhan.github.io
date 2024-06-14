export const useGraphQlQuery = <T>(options: any) => {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();
  return useFetch<{ data: T; errors: any }>("https://graphql.datocms.com", {
    key: "content",
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
      "X-Environment": runtimeConfig.public.datoCmsEnv,
    },
    body: {
      query,
      variables,
    },
    // @ts-ignore
    transform: ({ data, errors }) => {
      if (errors) {
        throw errors();
      }
      return data as any as T;
    },
  });
};
