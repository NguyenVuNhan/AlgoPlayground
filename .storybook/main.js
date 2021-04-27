module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    return config;
  },
};
