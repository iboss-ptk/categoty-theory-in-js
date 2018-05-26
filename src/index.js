import React from 'react'
import ReactDOM from 'react-dom'
import Logger from './log'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title">CT SHOW</h1>
        <Logger log="hi" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
