const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './web/src/index.tsx',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          plugins: ['@babel/proposal-class-properties'],
          presets: [
            '@babel/preset-env',
            '@babel/typescript',
            '@babel/preset-react',
          ],
        },
        test: /\.(ts|js)x?$/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './web/public/index.html' })],
};
