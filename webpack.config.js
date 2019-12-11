//normally, plugins are a nodejs packages, then we need to import them
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let frontendPath = __dirname.split("\\")
frontendPath = frontendPath.splice(0,6)
frontendPath = frontendPath.join("/") 
frontendPath = frontendPath + '/src/renderer/index.html'

module.exports = {
  target: 'node',
  node: {
    __dirname: false
  },
  devServer: {
    index: frontendPath,
    clientLogLevel: "info",
    contentBase: join(__dirname, "dist"),
    port: 9001, //http://localhost:52779 this is not working
    hot: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: frontendPath,
          filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
          filename: "css/[name].css"
      })     
  ]

}