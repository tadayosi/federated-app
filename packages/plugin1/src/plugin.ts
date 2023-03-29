import { sharedMessages, Plugin } from '@tadayosi/shared'

export const plugin: Plugin = () => {
  sharedMessages['plugin1'] = 'Hello!'
  console.log('Plugin 1', sharedMessages)
}
