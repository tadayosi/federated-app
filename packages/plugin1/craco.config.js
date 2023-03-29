const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('./package.json')

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'plugin1',
          filename: 'remoteEntry.js',
          exposes: {
            './plugin': './src/plugin',
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
            '@tadayosi/shared': {
              singleton: true,
              requiredVersion: '^0.1.0',
            },
          },
        }),
      ],
    },
    configure: {
      output: {
        publicPath: 'auto',
      },
      // For suppressing sourcemap warnings from @module-federation/utilities
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
}
