const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/paginaMain.js',
    popular: './src/popular.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index2.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/libros-populares.html',
      filename: 'libros-populares.html',
      chunks: ['popular'],
    }),
    new HtmlWebpackPlugin({
      template: './src/libro1-detalles.html',
      filename: 'libro1-detalles.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/libro2-detalles.html',
      filename: 'libro2-detalles.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/libro3-detalles.html',
      filename: 'libro3-detalles.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/daniloMenu.html',
      filename: 'daniloMenu.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/danilo1.html',
      filename: 'danilo1.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/danilo2.html',
      filename: 'danilo2.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/danilo3.html',
      filename: 'danilo3.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/nuevos-lanzamientos.html',
      filename: 'nuevos-lanzamientos.html',
    }),

    new MiniCssExtractPlugin(),
  ],
};