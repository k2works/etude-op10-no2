var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        loader: ExtractTextPlugin.extract('css-loader?sourceMap') //Can be used without sourcemaps too.
    }]
  },
  // Configuration for dev server
  devServer: {
    contentBase: './',
    port: 3000
  },
  devtool: 'source-map',
  plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
}
