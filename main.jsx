import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pen from "./App.jsx";
import {Linux, Windows} from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {Pen()};
    <Pen></Pen> */}
    <Pen/>
    {/* <Linux/>
    <Windows/> */}
  </StrictMode>,
)
