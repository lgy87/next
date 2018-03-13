/*
 * Guangyao Li
 * 2017/02/27
 * lgy87@foxmail.com
 */
const {BUILD, DIST} = require("./dirs")
const modes = require("./modes")
const {defaultMode} = require("./settings")
const r = require("ramda")

const settings = {
  [modes.dev]: {
    path: BUILD,
    publicPath: "/",
    pathinfo: true,
    filename: "[name].js",
    sourceMapFilename: "[file].map",
  },
  [modes.prod]: {
    path: DIST,
    publicPath: "/",
    pathinfo: false,
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
  },
}

module.exports = r.pipe(
  r.prop(r.__, settings),
  r.defaultTo(r.prop(defaultMode, settings)),
)

