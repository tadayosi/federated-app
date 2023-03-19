import { plugin } from './plugin'

export const App = () => {
  plugin()

  return (
    <div>
      <h1>Plugin 1</h1>
      <p>Hello!</p>
    </div>
  )
}
