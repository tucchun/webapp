const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = Merge(CommonConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: false,
        keep_fnames: true
      },
      compress: {
        screw_ie8: false
      },
      comments: false
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '../',
    path: path.join(__dirname, './dist')
  },
});