import { importRemote, ImportRemoteOptions } from '@module-federation/utilities'

const remotes: ImportRemoteOptions[] = [
  {
    scope: 'plugin2',
    module: './plugin',
    url: 'http://localhost:3002',
  },
]

type Plugin = () => void

export async function dynamicLoading() {
  console.log('Loading remote modules dynamically ...')
  await Promise.all(
    remotes.map(async remote => {
      const { plugin } = (await importRemote(remote)) as { plugin: Plugin }
      plugin()
    }),
  )
}
