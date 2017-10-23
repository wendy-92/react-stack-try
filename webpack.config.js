module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: []
  },
  devServer: {
    host: '0.0.0.0',
    port: 9091,
    contentBase: '.',
    inline: true,
    hot: true,
 },
}