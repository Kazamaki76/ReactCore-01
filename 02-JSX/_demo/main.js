//  1. vanila (js-dom) ## imparative
// อธิบายทีละบรรทัด
// const header = document.createElement("h1")
// header.innerText = "Hello"



//  2 A: vanila (React)
const header = React.createElement("h1", null, )

// 2b ; JSX 
// declarvtive  :

// const header = <h1>Hello</h1>

const A = "Sleep"
const B = "John Doe"
const C = [ "Ghost sweeper", " Dev ", " Thief "]
const userAge = 30;
const userPets = {
    dog: "cat",
    Cats: "Dog"
}
function myLuckyNumber() {
    return 1+ Math.floor(Math.random() * 10)
}

const styleobj ={
    color: "blue",
    textAlign: "center"
}
const userProfile = (
    <div>
        <h1 className="heder"> Fullname : {B} </h1>
        <h4>Age : ${40 - 5 + 2 }  </h4>
        <h2> Hobby : {A} </h2>
        <ul>  Experience :{C}  </ul> 
        <p style={styleobj}> dog: {userPets.dog}  </p>     
        <p> Cats: {userPets.Cats}  </p>
        <h4> MyluckyNumber : {myLuckyNumber()} </h4>

    
        
    </div>
);

//ReactDOM
const domNode = document.getElementById("root"); 
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);










