import path from 'path'
import webpack from 'webpack'


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets: ["react", "es2015", "stage-0"]
        }
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}
