import { importRemote, ImportRemoteOptions } from '@module-federation/utilities'

const plugin2Url =
  process.env.NODE_ENV === 'production' ? 'https://tadayosi-federated-app-plugin2.surge.sh' : 'http://localhost:3002'

const remotes: ImportRemoteOptions[] = [
  {
    scope: 'plugin2',
    module: './plugin',
    url: plugin2Url,
  },
]

type Plugin = () => void

export async function dynamicLoading() {
  console.log('Loading remote modules dynamically ...')
  await Promise.all(
    remotes.map(async remote => {
      const { plugin } = await importRemote<{ plugin: Plugin }>(remote)
      plugin()
    }),
  )
}
