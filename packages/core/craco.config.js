const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('./package.json')

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'core',
          remotes: {
            plugin1: 'plugin1@http://localhost:3001/remoteEntry.js',
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
          },
        }),
      ],
    },
  },
  configure: {
    output: {
      publicPath: 'auto',
    },
  },
}
