module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: '/dist'
  },
  module: {
    rules: [{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'css-loader'
    }]
  },
  // Configuration for dev server
  devServer: {
    contentBase: './',
    port: 3000
  },
  devtool: "cheap-eval-source-map"
}
