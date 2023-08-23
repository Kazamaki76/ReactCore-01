// #1 Write Your Function Component

const Contact = () => {
    return(
  <div>
    <form>
        <input placeholder = "Email" className="ctus" />  
        <button className="bt" > Submit </button>
    </form>
  </div > )}
;

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(< Contact />);
