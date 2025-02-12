export default defineNuxtPlugin((app) => {
  return {
    provide: {
      datoImage(
        url: string,
        opts: { height?: number; format: "png" | "webp" | "jpeg" } = {
          format: "webp",
        }
      ) {
        const [baseUrl, queryString] = url.split("?", 2);
        const queryParams = new URLSearchParams(queryString || "");

        if (opts.format) {
          queryParams.set("fm", opts.format);
        }

        if (opts.height) {
          queryParams.set("h", opts.height.toString());
        }

        return `${baseUrl}?${queryParams}`;
      },
    },
  };
});
