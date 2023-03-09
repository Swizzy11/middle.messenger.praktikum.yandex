const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  entry: "./index.ts",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].messanger.js",
    clean: true,
    publicPath: '/',
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chat",
      template: "./index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "messenger.[contenthash].css",
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },
    ],
  },
};
