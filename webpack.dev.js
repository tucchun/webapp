const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const Plugin = require("./app/lib/HashMapPlugin.js");
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(CommonConfig, {
  // devtool: 'cheap-module-source-map',
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
    new BundleAnalyzerPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./app/common/dll/dev/manifest.json')
    }),
    new CleanWebpackPlugin('./app/dev/'),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Plugin()
  ],
  // devServer: {
  //   port: 9000,
  //   // host: '192.168.1.51',
  //   historyApiFallback: true,
  //   noInfo: false,
  //   stats: 'minimal',
  //   publicPath: '/',
  //   // contentBase: path.join(__dirname, './dist'),
  //   hot: true
  // },
  watch: true,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: './dev/',
    path: path.join(__dirname, './dev')
  }
});
