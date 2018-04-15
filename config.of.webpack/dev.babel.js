/*
 * Guangyao Li
 * 2017/07/20
 * lgy87@foxmail.com
 */
const webpack = require("webpack")
const {BUILD, APP, SRC} = require("./dirs")
const webpackMerge = require("webpack-merge")
const base = require("./base.babel")
const stats = require("./stats")
const envs = require("./envs")

module.exports = mode => {
  const baseConfig = base(mode)

  return webpackMerge(baseConfig, {
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
    mode: "development",
    devServer: {
      host: "0.0.0.0",
      port: 8000,
      contentBase: BUILD,
      publicPath: "/",
      historyApiFallback: true,
      stats: stats(mode),
      disableHostCheck: true,
      overlay: {
        errors: true,
        warnings: true,
      },
      proxy: {
        '/account': {
          target: envs.test,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  })
}
