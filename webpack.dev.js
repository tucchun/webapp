const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  /*module: {
    rules: [ {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },*/
  plugins: [
    new CleanWebpackPlugin('./WEB-INF/views/public'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 9000,
    // host: '192.168.1.51',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    // contentBase: path.join(__dirname, './dist'),
    hot: true
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: './views/public',
    path: path.join(__dirname, './WEB-INF/views/public')
  }
});
