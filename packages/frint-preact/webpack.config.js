var webpack = require('webpack');
var externals = require('frint-config').externals;

var minify = process.env.DIST_MIN;
var plugins = !minify
  ? []
  : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ];
var filename = !minify
  ? 'frint-preact.js'
  : 'frint-preact.min.js';

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/dist',
    filename: filename,
    libraryTarget: 'umd',
    library: 'FrintPreact'
  },
  externals: externals.concat([{
    'frint': {
      root: 'Frint',
      commonjs: 'frint',
      commonjs2: 'frint',
      amd: 'frint',
    },
    'preact': {
      root: 'Preact',
      commonjs: 'preact',
      commonjs2: 'preact',
      amd: 'preact',
    },
  }]),
  target: 'web',
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  }
};
