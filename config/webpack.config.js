const webpack = require('webpack')
const path = require('path')
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
const WebpackChunkHash = require("webpack-chunk-hash")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:7].js',
    chunkFilename: '[name].[chunkhash:7].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:  ["vendor", "manifest"],
      minChunks: function(module) {
        return /node_modules/.test(module.resource);
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: true
    }),
    new ExtractTextPlugin('styles.[chunkhash].css'),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: './src/assets/images/favicon.ico',
      template: './index.html'
    })
  ]
}
