/* eslint-env node */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'jean9.js'
  },
  resolve: {
    modules: ['node_modules', 'client']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css?$/,
        loader: 'css-loader'
      },
      {
        test: /\.styl?$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '/dist/index.html'),
      template: './client/template/index.html'
    }),
    new CopyWebpackPlugin([
        { from: 'static' }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
    hot: true,
    inline: true
  }
}
