// #1 React : CreateElement
// ```html
// <div class="btn_wrapper">
//     <button class="btn view_more_btn">view all pages</button>
//     <button class="btn documentation_btn">documentation</button>
// </div>
// ```
//child 

const bt1 = React.createElement( "button", {className:"btn view_more_btn"}, "view all pages")
const bt2 = React.createElement( "button", {className:"btn documentation_btn"}, "documentation")


// parent 

const div = React.createElement("div", {className:"btn_wrapper"},bt1, bt2 )


// #2 ReactDOM : createRoot

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);


// #3 ReactDOM : TakeOver for Render Task
root.render(div);