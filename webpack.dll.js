const webpack = require('webpack');
const path = require('path');
const lib = require('./app/config/lib.dependencies.js');
const isDev = process.env.NODE_ENV === 'development';
const publicPath = './app/common/dll';
const outputPath = isDev ? path.join(__dirname, `./${publicPath}/dev`) : path.join(__dirname, `./${publicPath}/dist`);
console.log(process.env.NODE_ENV, isDev)


const plugin = [
  new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     */
    path: path.join(outputPath, 'manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 和 output.library 一样即可。
     */
    name: '[name]',
    context: __dirname
  })
  // new webpack.optimize.OccurenceOrderPlugin()
];

if (!isDev) {
  plugin.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$', 'exports', 'require']
      },
      exclude: /\.min\.js$/,
      compress: { warnings: false },
      output: { comments: false }
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /(en-gb|zh-cn).js/
    )
  );
}

module.exports = {
  devtool: '#source-map',
  context: path.resolve(__dirname),
  entry: {
    lib: lib
  },
  output: {
    path: outputPath,
    filename: isDev ? '[name].js' : '[name].[hash:9].js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]'
  },
  plugins: plugin
};
