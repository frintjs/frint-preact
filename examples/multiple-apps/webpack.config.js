const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const config = require('frint-config');
const path = require('path');

module.exports = {
  entry: {
    'root': path.resolve(__dirname, 'root/index.js'),
    'app-bar': path.resolve(__dirname, 'app-bar/index.js'),
    'app-foo': path.resolve(__dirname, 'app-foo/index.js')

  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'layouts/index.ejs'),
      filename: path.resolve(__dirname, 'build/index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ],
  externals: []
    .concat(config.lodashExternals)
    .concat(config.rxjsExternals)
    .concat(config.thirdPartyExternals)
    .concat(config.frintExternals)
    .concat([{
      'frint-preact': {
        root: 'FrintPreact',
        commonjs: 'frint-preact',
        commonjs2: 'frint-preact',
        amd: 'frint-preact',
      },
    }])
};
