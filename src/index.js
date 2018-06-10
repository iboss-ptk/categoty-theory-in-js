import React from 'react'
import ReactDOM from 'react-dom'
import { Logger, clear } from './log'
import Functor from './lib/functor'
import Mon from './lib/monoid'
import Monad from './lib/monad'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        CATSTAAAA!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept(() => {
    setTimeout(() => {
      clear()
      Logger.show()
    })
  });
}
