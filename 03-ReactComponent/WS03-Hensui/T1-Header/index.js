// #1 Write Your Function Component

const HeaderComponent = () => (
    <div>
        <p className= "headcomp" > Discover authentic
            Japanese cuisine in LA.
            Opening Soon!
        </p>
    </div>
);





// #2 ReactDOM : createRoot




const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

root.render(<HeaderComponent/>);
