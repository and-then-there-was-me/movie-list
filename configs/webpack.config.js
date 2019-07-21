const _ = require('lodash');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DirectoryNamedPlugin = require('directory-named-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const rules = require('./webpack-rules.config');
const alias = require('./webpack-alias.config');

const isDeploy = process.env.npm_lifecycle_event === 'deploy';
const isBuild = isDeploy || process.env.npm_lifecycle_event === 'build';

module.exports = {
  module: { rules },

  devtool: 'cheap-source-map',

  resolve: {
    alias,
    extensions: ['.js', '.jsx'],
    plugins: [
      new DirectoryNamedPlugin(true),
    ],
  },

  entry: {
    index: './src/index.jsx',
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: `[name]${isBuild ? '.[chunkhash]' : ''}.js`,
    chunkFilename: `[name]${isBuild ? '.[chunkhash]' : ''}.js`,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  stats: {
    colors: true,
    reasons: true,
  },

  plugins: _.flatten([
    // Common plugins
    [
      new HtmlPlugin({ template: 'assets/index.html' }),
    ],

    // Development plugins
    !isBuild && [
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 9000,
          proxy: 'localhost:8080/',
          open: false,
        },
        { reload: false } // eslint-disable-line comma-dangle
      ),
    ],
  ]).filter(p => p),
};
