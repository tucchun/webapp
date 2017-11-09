const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const modules = ['index'];
const modules = require('./app/components.js');

let entry = {};
let htmls = [];
for (let i = 0; i < modules.length; i++) {
  entry[modules[i]] = './app/' + modules[i] + '.js';
  htmls.push(new HtmlWebpackPlugin({
    filename: modules[i] + '.html',
    id: "__" + modules[i] + "__",
    template: path.join(__dirname, './app/template.ejs'),
    chunks: [modules[i], 'vendor', 'runtime']
  }));
}

module.exports = {
  entry: {
    ...entry,
    vendor: [
      'react',
      'react-dom',
      'react-virtualized',
      'jquery',
      'dot',
      'lodash',
      'node-forge',
      'viewerjs',
      'react-virtualized/styles.css'
    ]
  },

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
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: false,
              // importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    ...htmls,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', minChunks: Infinity
      // filename: 'vendor.[chunkhash].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
      // filename: 'runtime.[chunkhash].js'
    })
  ]
};
