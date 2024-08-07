const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss";     
          @import "@/styles/_function.scss";     
          @import "@/styles/_mixin.scss";     
        `
      }
    }
  }
})
