const path = require("path");

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss', 'storybook-css-modules-preset'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  // webpackFinal: (config, {configType}) => {
  //   config.module.rules.push({
  //     use: ['style-loader', {
  //       loader: 'postcss-loader',
  //         options: {
  //           /* 
  //             Enable Source Maps
  //             */
  //           sourceMap: true,
  //           /*
  //             Set postcss.config.js config path && ctx 
  //             */
  //           config: {
  //             path: './.storybook/',
  //           },
  //         },
  //     }],
  //   });
  // }
};
