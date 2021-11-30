module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
	ignored: [/node_modules/, /docs/, /\.org/],
      }
    }
  }
}