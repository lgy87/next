/*
 * Guangyao Li
 * 2/28/17
 * lgy87@foxmail.com
 */
const {SRC, TESTS} = require("../dirs")

module.exports = [
  {
    test: /\.[jt]sx?$/,
    use: [
      "babel-loader?cacheDirectory=true",
    ],
    include: [
      SRC,
    ],
  },
  {
    test: /\.(re|ml)$/,
    use: [
      {
        loader: "bs-loader",
      },
    ],
  }
]
