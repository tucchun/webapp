const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const modules = ['index'];
const modules = require('./app/modules.js');

let entry = {};
let htmls = [];
for (let i = 0; i < modules.length; i++) {
  entry[modules[i]] = './app/page/' + modules[i] + '.js';
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
      'jquery',
      'dot',
      'lodash',
      'rc-table',
      'node-forge',
      'viewerjs',
      'es6-promise',
      'object-assign',
      'axios',
      'rc-table/assets/index.css',
      './app/component/table/rc-table.css'
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
