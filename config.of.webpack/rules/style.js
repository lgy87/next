/*
 * Guangyao Li
 * 2017/03/10
 * lgy87@foxmail.com
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const modes = require("../modes")
const {defaultMode} = require("../settings")
const r = require("ramda")
const {SRC} = require("../dirs")

/*
const cssOptionProd = {
  localIdentName: "[hash:base64:32]",
  minimize: true,
  camelCase: true,
  importLoaders: 1,
}
*/
const cssUseProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [
    "css-loader",
  ],
})
const settings = {
  development: [
    {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
      ],
    },
  ],
  production: [
    {
      test: /\.css$/,
      use: cssUseProd,
    },
  ],
}

module.exports = r.pipe(
  r.prop(r.__, settings),
  r.defaultTo(r.prop(defaultMode, settings)),
)