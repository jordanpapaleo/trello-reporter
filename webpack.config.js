const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const loaders = require('./config/loaders')
const preloaders = require('./config/preloaders')
const keys = require('./config/keys')

module.exports = {
  context: __dirname,
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: (process.env.NODE_ENV === 'production') ? '/' : 'http://localhost:8080/'
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
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(keys.TRELLO_KEY)
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin()/*,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        booleans: true,
        cascade: true,
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        evaluate: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        loops: true,
        negate_iife: true,
        properties: true,
        sequences: true,
        unsafe: true,
        unused: true,
        warnings: false
      },
      mangle: {
        toplevel: true,
        sort: true,
        eval: true,
        properties: true
      },
      output: {
        space_colon: false,
        comments: false
      }
    })*/
  ]
}
