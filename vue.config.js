const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

const backendURL = process.env.BACKEND || 'http://localhost:8000';

module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: backendURL,
      },
      '/static': {
        target: backendURL,
      },
      '/media': {
        target: backendURL,
      },
      '/admin': {
        target: backendURL,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('stylelint').use('stylelint-webpack-plugin');
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js'),
        ]),
      }),
    ],
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: false,
    },
  },
};
