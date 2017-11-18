module.exports = {
  entry: {
    vendors: __dirname + '/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/../build/js',
    filename: '[name].js'
  }
};
