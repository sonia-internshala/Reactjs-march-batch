import React, { Component } from 'react'
import ChildComponentDidMount from './ChildComponentDidMount';

export default class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log("I am the constructor.");
    }
    componentDidMount(){
        console.log("I am the ComponentDidMount");
    }
  render() {
    console.log("I am the render.")
    return (
      <div>
        <ChildComponentDidMount/>
        <ChildComponentDidMount/>
      </div>
    )
  }
}


/*
Parent Constructor
Parent render
      -First Child const
      -First child render
      -first child did mount

      -second child const
      -second child render
      -second child did mount
      
Parent Did mount










*/

//parent constructor
//render
 //-------child constrctor
 //---------child render

//parent did mount
//child did mount
