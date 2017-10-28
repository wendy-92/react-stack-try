module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
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
          test: /(\.jsx|\.js)$/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: [
                      "react"
                  ]
              }
          },
          exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9091,
    contentBase: '.',
 },
} 