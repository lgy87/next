/*
 * Guangyao Li
 * 2017/03/28
 * lgy87@foxmail.com
 */
const webpack      = require('webpack')
const noParse      = require('./noParse')
const {APP, BUILD} = require('./dirs')
const outputs      = require('./outputs')
const {vendors} = require('./entries')
const modes        = require('./modes')

module.exports = {
  entry: {
    vendors,
  },
  output: outputs(modes.dev),
  module: {
    noParse,
  },
  devtool: 'null',
  context: APP,
  target: 'web',
  plugins: [
    new webpack.DllPlugin({
      path: `${BUILD}/[name]-manifest.json`,
      name: '[name]',
      context: APP,
    }),
  ],
}
