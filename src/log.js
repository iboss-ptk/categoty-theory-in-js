import React from 'react'

export default class Logger extends React.Component {
  componentDidUpdate() {
    console.log(this.props.log)
  }
  render() {
    return (
      <div>log</div>
    )
  }
}

