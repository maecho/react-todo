const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: path.resolve('src/index.js'),
  },
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader?minimize',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_moduels/,
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('public/index.html'),
    }),
  ],
}

module.exports = config
