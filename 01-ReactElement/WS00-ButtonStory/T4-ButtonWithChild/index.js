// #1 React : CreateElement

//children  
const span1 = React.createElement("span" , null);
const span2 = React.createElement("span" , null);
const span3 = React.createElement("span" , null);
const span4 = React.createElement("span" , null);
const span5 = React.createElement("span" , null, "button");

//parent : button 
const button = React.createElement("button" , null , span1, span2,span3, span4, span5) ;
console.log(button); 


// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDom.createRoot(domRoot);


// #3 ReactDOM : TakeOver for Render Task
root.render(button); 