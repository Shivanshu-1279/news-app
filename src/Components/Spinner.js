import React, { Component } from 'react'
import loading2 from './loading2.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading2} alt="loading" />
      </div>
    )
  }
}

export default Spinner
