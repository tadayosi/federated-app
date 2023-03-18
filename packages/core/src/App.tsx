import React from 'react'

export const App = () => (
  <div>
    <h1>App</h1>
    <p>Hello!</p>
    <React.Suspense fallback='Loading ...'>
      <p>Plugin 1</p>
    </React.Suspense>
  </div>
)
