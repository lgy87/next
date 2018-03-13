module.exports = {
  test: /\.(jpe?g|svg|png|gif)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 100000,
        name: 'images/[hash:20].[ext]',
      },
    },
  ]
}
