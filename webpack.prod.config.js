const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackFavicons = require('webpack-favicons');

module.exports = {
  entry: {
    main: '/src/client/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'client/assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'client/assets/images/[name][ext]'
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
      excludeChunks: ['server'],
      // favicon: './src/client/assets/img/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: "./client/css/[name].bundle.css"
    }),
    new WebpackFavicons({
      src: './src/client/assets/img/favicon.ico',
      path: './dist/client/assets/images/favicon.ico',
      background: '#B0BEC5',
      theme_color: '#B0BEC5',
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,

      }
    })
  ],
  devServer: {
    port: 5000,
    open: true,
    static: path.resolve(__dirname, 'dist'),
  },
}