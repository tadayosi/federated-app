import { plugin } from './plugin'

export const App = () => {
  plugin()

  return (
    <div>
      <h1>Plugin 2</h1>
      <p>Hello!</p>
    </div>
  )
}
