// #1 React : JSX
//JSX == 1 Root element (1parent )
// JSX == <> </>
//แทรก js ลงใน JSX ให้ใช้ {}
// const n = 30;

let fullName = "kanut k" ;
let birthYear = 2000;
const CURRENT_YEAR = 2023;
const userProfile = (
  <div>
    <h1 className= "text-red">Fullname:{ "fullName"}</h1>

    <p className={textColor} >Age {CURRENT_YEAR - birthYear}</p>
  </div>
);

// #2 ReactDOM : createRoot

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task

root.render(userProfile
);


// 1 tag = = 1 ReactElement == 1 Node (V-Dom)
// 1 JSX == 1 ReactElement (HTML Likes syntax)
