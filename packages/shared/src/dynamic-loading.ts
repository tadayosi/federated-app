import { importRemote, ImportRemoteOptions } from '@module-federation/utilities'

export type Plugin = () => void

export async function dynamicLoading(remotes: ImportRemoteOptions[]) {
  console.log('Loading remote modules dynamically ...')
  await Promise.all(
    remotes.map(async remote => {
      const { plugin } = await importRemote<{ plugin: Plugin }>(remote)
      plugin()
    }),
  )
}
