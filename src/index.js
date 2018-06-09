import React from 'react'
import ReactDOM from 'react-dom'
import { Logger, clear } from './log'
import Functor from './lib/functor'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Howdy, FP mind :D
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
