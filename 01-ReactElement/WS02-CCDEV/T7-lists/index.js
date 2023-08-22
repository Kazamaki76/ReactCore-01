// #1 React : CreateElement

const a1 = React.createElement("a", {className:"nav_menu_link", href: "#" }, "account" ); 
const a2 = React.createElement("a", {className:"nav_menu_link", href: "#" }, "about" ); 
const a3 = React.createElement("a", {className:"nav_menu_link", href: "#" }, "service" ); 
const a4 = React.createElement("a", {className:"nav_menu_link", href: "#" }, "contact" ); 

const li1 = React.createElement("li", {className:"nav_menu_list"}, a1 );
const li2 = React.createElement("li", {className:"nav_menu_list"}, a2 );
const li3 = React.createElement("li", {className:"nav_menu_list"}, a3 );
const li4 = React.createElement("li", {className:"nav_menu_list"}, a4);


const ul = React.createElement("ul", {className:"nav_menu_list"}, li1, li2, li3, li4);



// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);


root.render(ul);





// #3 ReactDOM : TakeOver for Render Task
