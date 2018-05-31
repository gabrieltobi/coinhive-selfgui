const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dest/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    contentBase: './dest',
    port: 3000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  }
};