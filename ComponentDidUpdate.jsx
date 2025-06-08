import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log("Constructor is called")
        this.state={
            count:0,
            arr:[]
        }
    }
    async componentDidMount(){
        console.log("Component Did Mount is called.")
        let data=await fetch("https://dummyjson.com/comments");
        let fulldata=await data.json();
        console.log(fulldata.comments);
        this.setState({
            arr:fulldata.comments
        })
    }
    componentDidUpdate(){
        console.log("Component Did Update is called.")
    }

    componentWillUnmount(){
        console.log("Component is thrown out of UI")
    }
  render() {
    console.log("Render is called")
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Click</button>

          {
            this.state.arr.map(comment=>(
                <h1>{comment.body}</h1>
            ))
        }
      </div>

    )
  }
}
