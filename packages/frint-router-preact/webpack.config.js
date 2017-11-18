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
  ? 'frint-router-preact.js'
  : 'frint-router-preact.min.js';

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/dist',
    filename: filename,
    libraryTarget: 'umd',
    library: 'FrintRouterPreact'
  },
  externals: externals.concat([
    {
      'frint-preact': {
        root: 'FrintPreact',
        commonjs: 'frint-preact',
        commonjs2: 'frint-preact',
        amd: 'frint-preact',
      },
      'frint-router': {
        root: 'FrintRouter',
        commonjs: 'frint-router',
        commonjs2: 'frint-router',
        amd: 'frint-router',
      },
      'preact': {
        root: 'Preact',
        commonjs: 'preact',
        commonjs2: 'preact',
        amd: 'preact',
      },
    },
  ]),
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
