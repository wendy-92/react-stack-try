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
          },
          exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9091,
    contentBase: '.',
    historyApiFallback: {
      rewrites: [
        // fallback to index.html
        { from: /^\/.*$/, to: '/public/index.html' },
        { // same with production server, redirect to static folder
          from: /^\/(.*)$/,
          to(context) {
            return `/static/${context.match[1]}`;
          },
        },
      ],
    },
 },
} 