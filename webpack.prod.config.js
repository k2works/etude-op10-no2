const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './lib/index.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    　},
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
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
  plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV), },}),
      new webpack.optimize.UglifyJsPlugin({minimize: true,compress: {warnings: false,}}),
      new ManifestPlugin(),
      new CleanWebpackPlugin(['dist', 'build', 'public'], {
          root: '/',
          verbose: true,
          dry: false,
          exclude: ['manifest.json']
      })
  ]
}
