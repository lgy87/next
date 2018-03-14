/*
 * Guangyao Li
 * 2016/09/18
 * lgy87@foxmail.com
 */
const htmlWebpackPlugin = require("html-webpack-plugin")

const {APP} = require("../dirs")
const modes = require("../modes")

module.exports = mode => (
  new htmlWebpackPlugin({
    filename: "index.html",
    template: `${APP}/index.html`,
    title: "GZQ NeXT",
  })
)
