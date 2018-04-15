/*
 * Guangyao Li
 * 2016/09/17
 * lgy87@foxmail.com
 */
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const base = require("./base.babel")
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
const WebpackChunkHash = require("webpack-chunk-hash")
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

module.exports = mode => {
  const baseConfig = base(mode)

  return webpackMerge(baseConfig, {
    mode: "production",
    devtool: "none",
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestPlugin({
        filename: "chunk-manifest.json",
        manifestVariable: "webpackManifest",
      }),
      new LodashModuleReplacementPlugin({
        "collections": true,
        "paths": true,
      }),
      new BundleAnalyzerPlugin(),
      /*
       new webpack.optimize.AggressiveSplittingPlugin({
       minSize: 5000,
       maxSize: 10000,
       }),
       */
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
