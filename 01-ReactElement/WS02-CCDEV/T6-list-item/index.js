// #1 React : CreateElement



const a = React.createElement( "a", {className: "nav_menu_link" ,href: "#"}, "account");

const li = React.createElement("li", {className:"nav_menu_item" }, a );

// #2 ReactDOM : createRoot

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);


// #3 ReactDOM : TakeOver for Render Task

root.render(li);

