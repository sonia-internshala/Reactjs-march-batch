import { useState } from "react";


export default function Props(props) {
    
    // props.course="B.Com";
    // console.log(props);

    // let {} = props;
  return (
    <div>

      
       <h1>{props.course}</h1>
        {/* <h1>{props.name}</h1> */}
        {/* {
            (props.points>=1000)
            ?
            <h1>You earn a Leetcode shirt</h1>
            :
            <h1>You earn a badge.</h1>
        } */}
        {/* points>=1000 you earn a leetcode t-shirt else you earn a badge */}
        {/* {
            props.arr.map(item=>(
                (item>50)
                ?
                <h1>{item}</h1>
                :
                <h1></h1>
            ))
        } */}
        {/* <h1>Name of the candidate : {name}</h1>
        <h3>Name of the Company : {company}</h3>
        <p>Profession Status: {status}</p> */}
    </div>
  )
}
