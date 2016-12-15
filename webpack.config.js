var webpack = require('webpack')
var env = process.env.NODE_ENV

var config = {
  context: __dirname +'/app',
  entry: './index.js',
  output: {
    path : __dirname +'/app',
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    contentBase: 'app',
    historyApiFallback: true,
    host:'0.0.0.0',
    port: 3000,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
    ]
  }
}

if ( env === 'production') {
  config.output.path = __dirname + '/dist'
  config.plugins = []

  const options = {
    compress: {
      warnings: false,
    }
  }

  config.plugins.push(new webpack.optimize.UglifyJsPlugin(options))
}

module.exports = config
