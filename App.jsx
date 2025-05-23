import Employees from "./Employees";
import Interns from "./Interns";

function App() {
  return (
    <div>
       <h1>Hi Hellooooo!</h1>
       <Employees/>
       <Interns/>
    </div>
  )
}
export default App;

 function Windows() {
  return (
    <div>I am Windows OS.</div>
  )
}


 function Linux() {
  return (
    <div>
      I am Linux OS.
    </div>
  )
}

export {Linux, Windows};




