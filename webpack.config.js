const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  devServer: { contentBase: './dist' },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.js/, use: 'source-map-loader' }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}