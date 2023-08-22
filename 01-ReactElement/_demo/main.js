console.log("learn react")

//create element
// const btn = document.createElement("button");
// btn.innerText = "cart";
// btn.classList= "red";

//render 
// const root = document.getElementById("root"); 
// root.appendChild(btn); 



// REatc
//react === global object (via cdn link)
// console.log(React);

//create element
const reactElement = React.createElement("button" , {classname: "red" }, "cart")
// console.dir(reactElement);

// let count = 0 
// for (let key in reactElement) {
//     count++;
// }
// console.log(count);

// ReactDOM : Render to browser
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot); //take over
root.render(reactElement);