const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/main.scss";`
      }
    }
  },
  pwa: {
    name: "Tproger",
    manifestOptions: {
      icons: [
        {
          src: "./icons/192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./icons/512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./icons/192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./icons/512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ],
      start_url: ".",
      display: "standalone",
      background_color: "#171919"
    },
    themeColor: "#171919",
    msTileColor: "#171919",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black_translucent",
    workboxPluginMode: "GenerateSW",

    favicon32: './icons/32x32.png',
    favicon16: './icons/16x16.png',
    appleTouchIcon: './icons/152x152.png',
    maskIcon: './icons/svg.svg',
    msTileImage: './icons/144x144.png'
  }
})
