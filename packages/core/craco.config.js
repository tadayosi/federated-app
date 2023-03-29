const { whenProd } = require('@craco/craco')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('./package.json')

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'core',
          remotes: {
            plugin1: `plugin1@${whenProd(
              () => 'https://tadayosi-federated-app-plugin1.surge.sh',
              'http://localhost:3001',
            )}/remoteEntry.js`,
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
