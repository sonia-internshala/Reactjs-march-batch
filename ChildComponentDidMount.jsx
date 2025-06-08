import React, { Component } from 'react'

export default class ChildComponentDidMount extends Component {
    constructor(){
        super();
         console.log("I am the child constructor.");
    }
    componentDidMount(){
        console.log("I am the Child ComponentDidMount");
    }
  render() {
     console.log("I am the child render.")
    return (
      <div>ChildComponentDidMount</div>
    )
  }
}
