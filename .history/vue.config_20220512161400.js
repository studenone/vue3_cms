const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '', //本地调试打包时部署的路径
  configureWebpack: {
    // devtool: 'source-map',
    plugins: [
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      require('unplugin-element-plus/webpack')({}),
    ],
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, 'src/service'),
      },
    },
  }, //会被webpack-merge 合并
  // chainWebpack: (config) => {
  //   console.log('[vue config]', config)
  // },
})
