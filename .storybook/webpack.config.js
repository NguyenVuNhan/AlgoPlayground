/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
const path = require('path');

module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need
  // config.module.rules.push({
  //   test: /\.css&/,
  //   use: [
  //     {
  //       loader: 'postcss-loader',
  //       options: {
  //         ident: 'postcss',
  //         plugins: [require('tailwindcss'), require('autoprefixer')],
  //       },
  //     },
  //   ],
  //   include: path.resolve(__dirname, '../'),
  // });

  // Return the altered config
  return config;
};
