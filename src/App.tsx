import React from 'react'
import { Application } from './components/application/Application'
import { Skills } from './components/skillls/Skills'
import { Counter } from './components/Counter/Counter'

type Props = {}

const App = (props: Props) => {
    return (
        <div className="App">
            {/* <Application /> */}
            {/* <Skills skills={['HTML', 'CSS']} /> */}
            <Counter />
            {/* <CounterTwo count={1} />
          <Users />
          <MuiMode /> */}
        </div>
    )
}

export default App