const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode =
  process.env.NODE_ENV == 'production' ? 'production' : 'development';

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: mode,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
  },
  devServer: {
    contentBase: __dirname + '/dist/',
    inline: true,
    host: 'localhost',
    port: 5002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new TSLintPlugin({
      files: ['./src/**/*.tsx', './src/**/*.ts'],
      waitForLinting: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
