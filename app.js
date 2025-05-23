// let h1=document.createElement("h1");
// h1.innerText="Hello World!";
// // console.log(h1);
// let div=document.querySelector("#root");
// // console.log(div);

// div.appendChild(h1);

// let h1=React.createElement("h1",{id:"heading", className:"h"},"Helloooooooooooo!!");
// console.log(h1);

// let smalldiv=React.createElement(
//     "div",
//     {},
//     [
//     React.createElement("h1",null,"hi hello"),
//     React.createElement("h3",null,"hi hello")
//     ]
// )

// let dabba=React.createElement(
//     "div"
//     ,{},
//     [
//         React.createElement("div"
//             ,{},
//             [
//                 React.createElement("h1",{abc:"xyz"},"hi hello"),
//                 React.createElement("h3",{},"hi hello"),

//             ]
//         )
//     ,
//     React.createElement("div"
//             ,{},
//             [
//                 React.createElement("h1",{},"hi hello"),
//                 React.createElement("h3",{},"hi hello"),

//             ]
//         )

//     ]

// )

let dabba=<div>
    <div>
        <h1>Hi Hello</h1>
    </div>
</div>

let div=document.querySelector("#root");
let parent=ReactDOM.createRoot(div);

parent.render(dabba);
