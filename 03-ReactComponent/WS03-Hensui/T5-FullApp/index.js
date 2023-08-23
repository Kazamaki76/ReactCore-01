// #1 React : CreateElement
// 1 
const HeaderComponent = () => (
    <div>
        <p className= "headcomp" > Discover authentic
            Japanese cuisine in LA.
            Opening Soon!
        </p>
    </div>
);


// 2
const InfoText = () => (
    <div>
        <p className= "infoText">
        <br/>
        Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our restaurant is dedicated to bringing you the most authentic and delicious Japanese cuisine.
Stay tuned for our grand opening date, sign up with your e-mail address to get notified. 
        </p>
    </div>
)



// 3 
const Contact = () => {
    return(
  <div>
    <form>
<br/>
        <input placeholder = "Email" className="ctus" />  
        <button className="bt" > Submit </button>
    </form>
  </div > )}
;

// 4 
const Hero = () => (
    <div>
        <img src= "https://i.ibb.co/9VZRsxF/pexels-cottonbro-studio-3296546-1.png"></img>
    </div>

)

function App() {
return(
    <main>
        
        <div className = "left"> 
        <Hero/>
        </div>
        <div className = "right">
        <HeaderComponent/>
        <InfoText/>
        <Contact/>
        
        </div>

    </main>
)
}

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(<App/>);

// #2 ReactDOM : createRoot


// #3 ReactDOM : TakeOver for Render Task



