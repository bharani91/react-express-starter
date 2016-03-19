var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var embedFileSize = 50000;

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'bootstrap-loader',
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader'
      },
      { test: /\.svg/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'
      },
      { test: /\.png$/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'
      },
      { test: /\.jpg/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'
      },
      { test: /\.gif/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=' + embedFileSize
      }
    ]
  },
  _hotPort: 8000,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
