const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    main: '/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'client/js/[name].bundle.js',
    // assetModuleFilename: 'assets/[name].[ext]'
  },
  target: 'web',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true,
          }
        }],
        // generator: {
        //   filename: 'client/[name].[ext]'
        // }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ],

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'client/assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'client/assets/images/[name].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "client/index.html",
      excludeChunks: ['server']
    }),
    new MiniCssExtractPlugin({
      filename: "./client/css/[name].bundle.css"
    }),
  ],
  devServer: {
    port: 5001,
    open: true,
    static: path.resolve(__dirname, 'dist'),
  },
}