module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: ['./node_modules'],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9091,
    contentBase: '.',
 },
} 