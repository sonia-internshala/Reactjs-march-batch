import { useState, useEffect } from "react";


export default function UseEffect() {
    let [arr,setArr]=useState([]);

    console.log("before useEffect....");
    useEffect(()=>{
        console.log("inside useEffect....");
        async function getAPI(){
        let response=await fetch("https://dummyjson.com/comments");
        let data=await response.json();
        console.log(data);
        setArr(data.comments);
    }
    getAPI();
    },[arr]);
    console.log("after useEffect....");

  return (
    <div>
        {
            arr.map(comment=>(
                <h1>{comment.body}</h1>
            ))
        }
    </div>
  )
}
