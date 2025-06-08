import { useState } from "react"

export default function Task() {
    // let [paisa,setPaisa]=useState();
    let [value,setValue]=useState(0);

    // function handleClick1(){
    //     setPaisa(1);
    // }
    // function handleClick2(){
    //     setPaisa(2);
    // }
    // function handleClick5(){
    //     setPaisa(5);
    // }
    // function handleClick10(){
    //     setPaisa(10);
    // }
    // function handleClick20(){
    //     setPaisa(20);
    // }

    function handleClick(value){
        // setValue(value+3);
        console.log("value  before setstate "+ value);
        setValue((value)=>value+1);//0+1->value=1
         console.log("value  after 1st setstate "+ value);
        setValue((value)=>value+1);//1+1->value=2
         console.log("value  after 2nd setstate "+ value);
        setValue(value+10);//2+1-> value=3 ans-> 3
        console.log("value  after 3rd setstate "+ value);
    }

  return (
    <div>

        <h1>value : {value}</h1>
        <br /><br />
        <button onClick={()=>handleClick(value)}>IncrementBy3</button>
        {/* <h1>Paisa : {paisa}</h1>
        <br />
        <br />
        <button onClick={()=>setPaisa(1)}>1</button>
        <button onClick={()=>setPaisa(2)}>2</button>
        <button onClick={()=>setPaisa(5)}>5</button>
        <button onClick={()=>setPaisa(10)}>10</button>
        <button onClick={()=>setPaisa(20)}>20</button> */}
    </div>
  )
}
