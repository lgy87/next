const webpack = require("webpack")
const path = require("path")

const PWD = __dirname
const SRC = `${PWD}/src`

module.exports = {
  context: {
    React: "react",
    r: "ramda",
    _: "lodash",
  },
  require: [
    "spectre.css/dist/spectre.min.css",
    "spectre.css/dist/spectre-icons.min.css"
  ],
  components: "src/components/**/*.jsx",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            "babel-loader?cacheDirectory=true",
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(re|ml)$/,
          use: [
            {
              loader: "bs-loader",
            },
          ],
        },
      ],
    },
    context: SRC,
    devtool: "eval",
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
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom",
        styled: "style-components",
        classnames: "classnames",
        r: "ramda",
        cx: "classnames",
      }),
    ],
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
      disableHostCheck: true,
      overlay: true,
    },
  },
}