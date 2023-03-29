import { sharedMessages, Plugin } from '@tadayosi/shared'

export const plugin: Plugin = () => {
  sharedMessages['plugin2'] = 'Hello!'
  console.log('Plugin 2', sharedMessages)
}
