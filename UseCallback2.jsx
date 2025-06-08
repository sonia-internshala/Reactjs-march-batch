import React from 'react'

export default React.memo(function UseCallback2(props) {
    console.log("I am  UseCallback2");
  return (
    <div>
        {/* <h1>{props.location}</h1> */}
        <button onClick={props.fn}>Click</button>
    </div>
  )
})
