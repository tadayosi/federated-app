const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('./package.json')

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'plugin2',
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
          },
        }),
      ],
    },
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
  },
}
