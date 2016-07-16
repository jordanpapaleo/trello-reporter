const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const loaders = require('./config/loaders')
const preloaders = require('./config/preloaders')

module.exports = {
  context: __dirname,
  // devtool: 'source-map',
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'public')
    ],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc')
  },
  module: {
    preLoaders: preloaders,
    loaders: loaders,
    noParse: /\.min\.js/
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Trello Reporter',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      template: 'index.tmpl.html',
      inject: 'body',
      hash: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify({ blar: 'plop' })
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true
    // })
  ]
}
