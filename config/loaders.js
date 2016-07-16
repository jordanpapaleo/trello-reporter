module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: (process.env.NODE_ENV === 'production') ? ['babel-loader', 'strip-loader?strip[]=console.log,strip[]=console.info,strip[]=console.warn,strip[]=console.error'] : ['babel-loader'],
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'stage-0', 'react']
    }
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'stage-0', 'react']
    }
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  },
  {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader'
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
    loader: 'url-loader?limit=100000'
  },
  {
    test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader'
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
]
