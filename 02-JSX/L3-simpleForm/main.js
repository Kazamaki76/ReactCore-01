// #1 React : JSX
// <input /> Self closing (no need child)
// class => className
// for => htmlFor
// onclick = OnClick

const formData = (
    <>
    <label htmlFor="username_id"> Username  </label>
    <input className="username" id="username" name="username" />
    </>
);
// { input className="username" id="username" name="username }
// const props = {className:"username" , id:"username", name:"username"}
//React.createElement("input",props)



// #2 ReactDOM : createRoot


const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);


// #3 ReactDOM : TakeOver for Render Task
root.render()