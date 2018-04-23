const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

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
              cacheDirectory: true,
              highlightCode: true,
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

  plugins: [new HTMLPlugin(), new HotModuleReplacementPlugin()],
};
