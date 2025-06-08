import { useState , useRef} from "react"


export default function UseRef() {
    let [count,setCount]=useState(0);

    
    let value=useRef(0);
    // console.log(value);

    function handleClick(){
        value.current=value.current+1;
        console.log(value.current);
        setCount(count+1);
    }
    let a=useRef();
    function handleChange(){
        // let btn=document.getElementById("btn");
        // btn.style.backgroundColor="yellow";
        // a.current.style.backgroundColor="red";
        // a.current.style.border="2px solid green";
        a.current.style.cssText=
        `
        background-color:red;
        border:20px solid yellow;
        `
    }

    return (
    <div>
        <h1>Count : {count}</h1>
        <br></br>

        <button ref={a} id="btn" onClick={handleClick}>Click</button>
        <button ref={a} onClick={handleChange}>ChangeColor</button>
    </div>
  )
}
