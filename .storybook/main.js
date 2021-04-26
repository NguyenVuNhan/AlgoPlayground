module.exports = {
  stories: [],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    return config;
  },
};
