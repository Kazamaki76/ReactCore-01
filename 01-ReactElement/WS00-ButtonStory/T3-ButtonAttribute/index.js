// #1 React : CreateElement

const attribute = {
    className : "btn",
    role: "button",
    type: "submit",
    onClick: () => alert("successfully Register"),
}

const btnEl = React.createElement("button", attribute, "register" )




// #2 ReactDOM : createRoot

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot) ;



// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);