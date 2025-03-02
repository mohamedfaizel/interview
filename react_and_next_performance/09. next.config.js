const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withPlugins([
  [withCSS],
  [withImages],
  {
    webpack(config, options) {
      // Example: Add custom webpack configuration here
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      return config;
    },
  },
]);