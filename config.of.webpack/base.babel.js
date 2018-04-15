/*
 * Guangyao Li
 * 2016/09/07
 * lgy87@foxmail.com
 */
const path              = require("path")
const webpack           = require("webpack")
const htmlWebpackPlugin = require("./plugins/htmlWebpack")
const envs              = require("./envs")
const {SRC, APP}        = require("./dirs")
const devtools          = require("./devtools")
const entries           = require("./entries")
const outputs           = require("./outputs")
const script            = require("./rules/script")
const style             = require("./rules/style")
const fonts             = require("./rules/fonts")
const image             = require("./rules/image")
const {defaultEnv}      = require("./settings")
const stats             = require("./stats")

module.exports = mode => ({
  entry: entries(mode),
  output: outputs(mode),
  module: {
    rules: [
      ...script,
      image,
      ...fonts,
      ...style(mode),
    ]
  },
  resolve: {
    modules: [
      SRC,
      "node_modules",
    ],
    extensions: [
      ".js",
      ".jsx",
      ".re",
      ".ml",
      ".ts",
      ".tsx",
    ],
  },
  context: SRC,
  target: "web",
  devtool: devtools(mode),
  stats: stats(mode),
  plugins: [
    htmlWebpackPlugin(mode),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
      "__ORIGIN__": JSON.stringify(defaultEnv),
      "__ENVS__": JSON.stringify(envs),
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      include: ["app.js"],
      columns: false
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      $: "jquery",
      styled: "style-components",
      cx: "classnames",
    }),
  ],
})
