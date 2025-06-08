import React, { useCallback, useState } from 'react'
import UseCallback2 from './UseCallback2'

export default function UseCallback() {
    let [count,setcount]=useState(0);

    let handleClick=useCallback(()=>{
        setcount(count+1);
    },[]);

  return (
    <div>
        <h1>count : {count}</h1>
        {/* <button onClick={handleClick}>Click</button> */}
        <UseCallback2 fn={handleClick}/>
    </div>
  )
}
