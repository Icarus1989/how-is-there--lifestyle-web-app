const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    './src/server/server-prod.js' : './src/server/server-dev.js'
  return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            // options: {
            //   name: "/server/[name].[ext]",
            //   // context: "src"
            // },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader'
          //   use: [{
          //   loader: "file-loader",
          //   options: {
          //     name: "assets/images/[name].[ext]",
          //     // context: "src"
          //   },
          // }]
        }
      ]
    },
    plugins: [
      new Dotenv({
        path: './.env'
      }),
    ],
  })
}