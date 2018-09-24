var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var serverConfig = {
  entry: './app.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

var umdConfig = {
  entry: './src/regate.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'regate.umd.js',
    libraryTarget: 'umd',
    library: 'Regate'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
}

var docsConfig = {
  entry: './src/regate.js',
  output: {
    path: path.resolve(__dirname, 'docs/dashmix'),
    filename: 'regate.umd.js',
    libraryTarget: 'umd',
    library: 'Regate'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
}

module.exports = [serverConfig, umdConfig, docsConfig]