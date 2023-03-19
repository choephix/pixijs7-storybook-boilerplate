const config = {
  stories: [
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  output: '../docs/',
  logLevel: 'debug',
  addons: [
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-highlight',
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
