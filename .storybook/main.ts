const config = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // addons: [
  //   "@storybook/addon-links",
  //   "@storybook/addon-essentials",
  //   "@storybook/addon-interactions",
  // ],
  // framework: {
  //   name: "@storybook/html-webpack5",
  //   options: {},
  // },
  // docs: {
  //   autodocs: "tag",
  // },

  stories: [
    // use glob matching, eg: ../src/stories/**/*.stories.@(ts|tsx|js|jsx|mdx)
    './stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  output: '../docs/',
  logLevel: 'debug',
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-highlight',
    '@storybook/addon-storysource',
  ],
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  features: {
    buildStoriesJson: true,
    breakingChangesV7: true,
    babelModeV7: true,
  },
  framework: '@pixi/storybook-webpack5',
};

export default config;
