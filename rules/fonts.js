/*
 * Guangyao Li
 * 2016/1/10
 * lgy87@foxmail.com
 */
const {SRC} = require("../dirs")

module.exports = [
  {
    test: /\.woff2?\??.*$/,
    use: {
      loader: "url-loader",
      options: {
        name: "[name].[ext]",
        limit: 5000,
        mimetype: "application/font-woff",
      },
    },
  },
  {
    test: /\.(ttf|eot|svg)\??.*$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
      },
    },
  },
]
