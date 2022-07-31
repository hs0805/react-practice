import react, { Component } from "react";

let e1 = React.createElement("h1", null, "Hello Happy"); // Normal code

let e2 =  <h1> Hello Ghost </h1>;   // JSX

// ReactDOM.render(e1, document.getElementById("root"));   // rednder element e2 in root 
// ReactDOM.render(e2, document.getElementById("root"));   // rednder element e2 in root 

export default e1;