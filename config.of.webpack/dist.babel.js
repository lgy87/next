/*
 * Guangyao Li
 * 2016/09/17
 * lgy87@foxmail.com
 */
const webpack = require("webpack")
const {BUILD, CONFIG} = require("./dirs")
const webpackMerge = require("webpack-merge")
const base = require("./base.babel")
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
const WebpackChunkHash = require("webpack-chunk-hash")
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")

module.exports = mode => {
  const baseConfig = base(mode)

  return webpackMerge(baseConfig, {
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestPlugin({
        filename: "chunk-manifest.json",
        manifestVariable: "webpackManifest",
      }),
      new LodashModuleReplacementPlugin(),
      /*
       new webpack.optimize.AggressiveSplittingPlugin({
       minSize: 5000,
       maxSize: 10000,
       }),
       */
      new webpack.optimize.CommonsChunkPlugin({
        name: [
          "bundle",
          "manifest",
        ],
        minChunks: Infinity,
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        beautify: false,
        compress: {
          screw_ie8: true,
        },
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        comments: false,
      }),
      /*
      new ExtractTextPlugin({
        filename: "bundle.css",
        disable: false,
        allChunks: true,
      }),
      */
    ],
  })
}
