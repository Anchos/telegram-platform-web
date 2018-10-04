const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new Dotenv({ systemvars: true }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: process.env.NODE_ENV !== "production" ? "source-map" : false,
};

if(process.env.ANALYZE_MODE === 'analyze') {
  config.plugins.push(new BundleAnalyzerPlugin())
};

module.exports = config;
