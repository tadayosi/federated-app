import { dynamicLoading, sharedMessages } from '@tadayosi/shared'
import { plugin } from 'plugin1/plugin'
import { useEffect, useState } from 'react'

const plugin2Url =
  process.env.NODE_ENV === 'production' ? 'https://tadayosi-federated-app-plugin2.surge.sh' : 'http://localhost:3002'

const remotes = [
  {
    scope: 'plugin2',
    module: './plugin',
    url: plugin2Url,
  },
]

plugin()
dynamicLoading(remotes)

export const App = () => {
  const [messages, setMessages] = useState({ ...sharedMessages })

  useEffect(() => {
    const id = setInterval(() => {
      if (Object.keys(messages).length !== Object.keys(sharedMessages).length) {
        setMessages(sharedMessages)
      }
    }, 1000)

    return () => clearInterval(id)
  }, [messages])

  return (
    <div>
      <h1>App</h1>
      <p>Hello!</p>
      <p>Here are messages from the plugins:</p>
      {Object.entries(messages).map(([key, message]) => (
        <p key={key}>
          <>
            <b>{key}:</b> {message}
          </>
        </p>
      ))}
    </div>
  )
}
