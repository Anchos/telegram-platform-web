const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[chunkhash:16].js',
    chunkFilename: 'static/js/[name].[chunkhash:16].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        parser: {
          requireEnsure: false,
        },
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'src')],
            use: [
              'thread-loader',
              {
                loader: 'babel-loader',
                options: {
                  compact: true,
                  highlightCode: true,
                },
              },
            ],
          },
          {
            loader: 'file-loader',
            exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[hash:16].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanPlugin(['./dist'], {
      beforeEmit: true,
    }),
    new CompressionPlugin({
      test: /\.(js|svg)$/,
    }),
    new HtmlPlugin({
      inject: true,
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
