import { plugin } from 'plugin1/plugin'
import { dynamicLoading } from './dynamic-loading'

plugin()
dynamicLoading()

export const App = () => (
  <div>
    <h1>App</h1>
    <p>Hello!</p>
  </div>
)
