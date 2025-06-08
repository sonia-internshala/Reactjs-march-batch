import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }
        console.log(<ClassComponent/>)
    }
  render() {
    return (
        <>
      <div>{this.props.location}</div>
      <h1>Count : {this.state.count}</h1>
      <h1>Count2 : {this.state.count2}</h1>
      <button onClick={()=>{
        //  this.state.count:this.state.count+1
        this.setState(
            {
                count:this.state.count+1,
                count2:this.state.count2+1
            }
        )
      }}>Click</button>
      </>
    )
  }
}
