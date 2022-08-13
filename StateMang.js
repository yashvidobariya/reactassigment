import React, { Component } from 'react'

export default class StateMang extends Component {
 constructor(){
      super()
      this.state={
        count:0
      }    
 }
 HandleState=()=>{
    this.setState({count:this.state.count+1})
    }
    decrement = () =>{
        this.state({count:this.state.count-1})
    }
    render(){
        return(
            <>
            <center>
                <h1>value:{this.state.count}</h1>
                <button onClick={this.HandleState}>Increment
                </button>
            </center>
            </>
        )
    }
 }
