import React, { Component } from 'react'

export default class ConstructCom extends Component {
 constructor(){
    super()
    this.state={number:"yashvi"
}
 }
 render(){
    return(
        <div>
          
            <h1>{this.state.number}</h1>
        </div>
    )
 }
}
