const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV || 'production';
const isDevelopment = mode === 'development';

module.exports = {
  devtool: isDevelopment ? 'inline-source-map' : null,
  entry: path.resolve(__dirname, '/src/index.js'),
  externals: [webpackNodeExternals()],
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  target: 'node',
};
