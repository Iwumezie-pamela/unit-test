import React from 'react'
import { Application } from './components/application/Application'

type Props = {}

const App = (props: Props) => {
  return (
      <div className="App">
          <Application />
          {/* <Skills skills={['HTML', 'CSS']} />
          <Counter />
          <CounterTwo count={1} />
          <Users />
          <MuiMode /> */}
      </div>
  )
}

export default App