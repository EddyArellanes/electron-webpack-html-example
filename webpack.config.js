//normally, plugins are a nodejs packages, then we need to import them
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'node',
  node: {
    __dirname: false
  },
  plugins: [
    
      new MiniCssExtractPlugin({
          filename: "css/[name].css"
      })     
  ]

}