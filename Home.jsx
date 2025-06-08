import React from 'react'
import { Link , useNavigate} from 'react-router-dom';


export default function Home() {
    let navigate=useNavigate();
    function handleHome(){
        // window.location.href="/home";
        navigate("/home");
        console.log("Home is reached!")
        alert("Home");
    }
    function handleAbout(){
        // window.location.href="/about";
         navigate("/about");
         console.log("About is reached!")
         alert("About");
    }
    function handleContact(){
        // window.location.href="/contact";
         navigate("/contact");
         console.log("Contact is reached!")
         alert("Contact");
    }
    function handleDashboard(){
        // window.location.href="/dashboard";
         navigate("/dashboard");
         console.log("Dashboard is reached!")
         alert("Dashboard");

    }
  return (
    <div>Home
        <nav>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleAbout}>About</button>
            <button onClick={handleContact}>Contact</button>
            <button onClick={handleDashboard}>Dashboard</button>

            {/* <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/dashboard">Dashboard</a> */}

            {/* <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link> */}


        </nav>
    </div>
  )
}
