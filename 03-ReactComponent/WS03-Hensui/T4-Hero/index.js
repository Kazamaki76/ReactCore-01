// #1 React : CreateElement
const Hero = () => (
    <div>
        <img src= "https://i.ibb.co/9VZRsxF/pexels-cottonbro-studio-3296546-1.png"></img>
    </div>

)

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);



// #3 ReactDOM : TakeOver for Render Task
root.render(<Hero/>);