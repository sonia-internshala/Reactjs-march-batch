import React from "react";

export default function Pen() {
     //duniya-1/ universe-1 ->statement, if else, for while, loop
    //  let a=10;
    //  let b="hello";
    //  let c=23.5;
    //  let d=true;
    //  let e=false;
    //  let f=null;
    //  let g=undefined;
    //  let obj={
    //     age:20
    //  }

    let array=[1,2,34,56,"hi",true,"hello"];

    // array.map(item=>(
    //     console.log(item)
    // ))

    // for(let i=0;i<array.length;i++){
    //     console.log(array[i]);
    // }

    
    // let h1=React.createElement("h1",{},"helooooooooo");
    // console.log(h1);

  return (
    //duniya-2/ universe-2 ternary operator, map, forEach, filter
    <div>
        {/* {h1} */}
        {/* {array.length} */}
        {/* {array.length} */}

        {/* {
            array.map(item=>(
               <h1>{item}</h1>
          ))
        } */}

        {
            (101%2==0)
            ?
            <h1>Even</h1>
            :
            <h1>Odd</h1>
        }




        {/* <p>{a}</p>
        <p>{b}</p>
        <p>{c}</p>
        <p>{JSON.stringify(d)}</p>
        <p>{JSON.stringify(e)}</p>
        <p>{JSON.stringify(f)}</p>
        <p>{JSON.stringify(g)}</p>
        <p>{obj.age}</p> */}


    </div>
  )
}
