import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "My Tech Blog",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "antialiased scroll-smooth",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "A personal tech blog built with Nuxt 3 and Tailwind CSS",
        },
        { name: "author", content: "Tech Blogger" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "My Tech Blog" },
        {
          property: "og:description",
          content: "A personal tech blog built with Nuxt 3 and Tailwind CSS",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "My Tech Blog" },
        {
          name: "twitter:description",
          content: "A personal tech blog built with Nuxt 3 and Tailwind CSS",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://yourdomain.com" },
      ],
    },
  },
});
