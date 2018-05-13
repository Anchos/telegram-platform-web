const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",

  output: {
    publicPath: "/",
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              compact: true,
              highlightCode: true,
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

  plugins: [
    new HTMLPlugin(),
    new CleanPlugin(["./dist"], { beforeEmit: true }),
    new CompressionPlugin({ test: /\.js$/ }),
  ],

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};
