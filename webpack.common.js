const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const modules = require('./app/modules.js');
const ExamplePlugin = require("./app/lib/ExamplePlugin.js");


let entry = {};
let htmls = [];
for (let i = 0; i < modules.length; i++) {
  entry[modules[i]] = './app/page/' + modules[i] + '.js';
  htmls.push(new HtmlWebpackPlugin({
    filename: modules[i] + '.html',
    id: "__" + modules[i] + "__",
    moduleId: entry[modules[i]],
    template: path.join(__dirname, './app/template.ejs'),
    chunks: [modules[i], 'vendor', 'runtime']
  }));
}

module.exports = {
  entry: {
    ...entry,
    vendor: [
      "babel-polyfill",
      'react',
      'react-dom'
    ]
  },

  // resolve: {
  //   extensions: ['.ts', '.js', '.json'],
  //   modules: [path.join(__dirname, 'src'), 'node_modules']
  // },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }, {
        test: /\.css$/,
        use:
        // ExtractTextPlugin.extract({
        //   use: ['css-loader', 'postcss-loader'],
        //   fallback: 'style-loader',
        // })
    ['style-loader', 'css-loader', 'postcss-loader']
        // {
        //   loader: 'style-loader'
        // }, {
        //   loader: 'css-loader',
        //   options: {
        //     modules: false
        //     // importLoaders: 1
        //   }
        // }, {
        //   loader: 'less-loader'
        // }, {
        //   loader: 'postcss-loader'
        // }
        // ]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('app.css'),
    ...htmls,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', minChunks: Infinity
      // filename: 'vendor.[chunkhash].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
      // filename: 'runtime.[chunkhash].js'
    }),
    new ExamplePlugin()
  ]
};
