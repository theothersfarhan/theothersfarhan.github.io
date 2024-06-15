// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  css: ["~/assets/style/main.scss"],
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
      datoCmsEnv: process.env.DATO_CMS_ENV || "main",
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
