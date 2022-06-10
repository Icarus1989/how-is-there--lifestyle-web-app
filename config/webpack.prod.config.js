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
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'client/js/[name].bundle.js',
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
          filename: 'client/assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'client/assets/images/[name][ext]'
        }
      },
      // {
      //   test: /\.(db)$/i,
      //   type: 'asset',
      //   generator: {
      //     filename: 'client/assets/db/[name][ext]'
      //   }
      // }
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
    }),
    new MiniCssExtractPlugin({
      filename: "client/css/[name].bundle.css"
    }),
    new WebpackFavicons({
      src: './src/client/assets/img/favicon.png',
      path: 'client/assets/images/icons',
      appName: 'How is There?',
      appShortName: null,
      appDescription: 'Cities Quality of Life App',
      scope: '/',
      background: '#EEE',
      theme_color: '#EEE',
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
    static: path.resolve(__dirname, '../dist'),
  },
}