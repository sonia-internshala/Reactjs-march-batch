import { useState , useMemo} from "react"


export default function UseMemo() {
    let [count,setCount]=useState(0);
    let [input,setInput]=useState(0);

    function handleClick(){
        setCount(count+1);
    }

    function expensiveOperation(number){
        for(let i=1;i<=100000000;i++){
            //nothing is happening here
        }
        return number*10;
    }
    let ans=useMemo(()=>{ return expensiveOperation(input)},[input]);
  return (
    <div>
        <h1>Count : {count}</h1>
        <br />
        <h1>ans : {ans}</h1>
        <br />
         <input type="number" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
