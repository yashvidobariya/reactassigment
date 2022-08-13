import React, { Component } from 'react'

export default class PropsCom extends Component {
    constructor(props){
        super();
    }
  render() {
    return (
      <div>hello{this.props.name}</div>
    )
  }
}
