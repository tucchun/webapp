const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modules = ['index'];

let entry = {};
let htmls = [];
for (let i = 0; i < modules.length; i++) {
  entry[modules[i]] = './app/' + modules[i] + '.js';
  htmls.push(new HtmlWebpackPlugin({
    filename: modules[i] + '.html',
    template: path.join(__dirname, './app/template.ejs'),
    chunks: modules[i]
  }));
}

module.exports = {
  entry: entry,

  // resolve: {
  //   extensions: ['.ts', '.js', '.json'],
  //   modules: [path.join(__dirname, 'src'), 'node_modules']
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
          // 'postcss-loader'
        ]
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [...htmls]
};
