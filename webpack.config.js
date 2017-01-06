var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: '/dist'
  },
  // Configuration for dev server
  devServer: {
    contentBase: './',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap') //Can be used without sourcemaps too.
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader?sourceMap')
    　},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
  　]
  },
  devtool: 'source-map',
  plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
}
