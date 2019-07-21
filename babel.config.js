module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          chrome: '67',
          edge: '17',
          firefox: '60',
          ie: '11',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],

  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    ['babel-plugin-styled-components', { pure: true }],
    'lodash',
  ],
};
