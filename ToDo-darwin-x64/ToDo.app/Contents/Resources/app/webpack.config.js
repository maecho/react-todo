const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  // entry: {
  //   app: path.resolve('src/RenderProcess/index.js'),
  // },
  // output: {
  //   path: path.resolve('build/renderer'),
  //   filename: 'bundle.js',
  //   publicPath: '/',
  // },
  entry: {
    'main/index': './src/MainProcess/index.js',
    'renderer/bundle': './src/RenderProcess/index.js',
  },
  output: {
    filename: 'build/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: path.join(__dirname, 'build/renderer', 'index.html'),
      inject: false,
    }),
  ],
}

module.exports = config
