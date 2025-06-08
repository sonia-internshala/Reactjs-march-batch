import React, { useState } from 'react'

export default function FunctionComponent(props) {
    let [count,setcount]=useState(0);
    let [count2,setcount2]=useState(0);
  return (
    <>
    <div>{props.location}</div>
    <h1>Count : {count}</h1>
    <h1>Count2 : {count2}</h1>
    <button onClick={()=>{setcount(count+1),setcount2(count2+1)}}>click</button>
    </>
  )
}
