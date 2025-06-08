import { useState } from "react";

export default function UseState() {
    // const [name,setName]=useState("unknown");
    const[count,setCount]=useState();

    //universe-1
    // `function handleclick(a,b){
    //     console.log("Button is clicked!");
    //     console.log(a+b);
    // }`
    // let name="Unknown";
    function handleClick(){
        // setCount(count+5);
        setCount(500);
        //  setName("Sonia");
        // console.log("before "+ name);
        // name="Sonia";
        // console.log("after "+ name);
        // console.log("i am clicking!");
    }

  return (
    //universe-2
    <div>
        {/* <button onClick="handleclick()">Click me</button> */}
        {/* <button onClick={handleClick}>Log In</button> */}
        <button onClick={handleClick}>Click</button>
        {/* <h1>Hello {name}</h1> */}
        <h2>Counter : {count}</h2>
        {/* <button onClick={()=>handleclick(10,20)}>Click me</button> */}
    </div>
  )
}
