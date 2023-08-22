// #1 React : CreateElement


// child
const a = React.createElement( "span" , null , " Codecamp")
const b = React.createElement( "br" , null , )

// parent

const c = React.createElement("h1", {className:"main-heading" }, "Welcome to", a, b, "Develop anything." )

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root"); 
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task

root.render(c);