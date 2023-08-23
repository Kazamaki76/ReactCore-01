//jsx only
const userProfile = (
    <div className= "profile_card">
        <h1> FullName : John Doe</h1>
        <h2> Age : 30</h2>
    </div>
);

const appComponent = (
    <> 
    {userProfile}
    {userProfile}
    {userProfile}
    
    </>

)
//component 
//สร้าง component ได้ 2 วิธี 
// 1. Function Component (implement 2018 - present)
// 2. Class Component (Since 2013 - present )


// 1 review JS-Function (call == reuse logic == gen velue)
//JS-FN : (data) => data
function randomInRange(min, max) {
}
let r = randomInRange(1, 10);
console.log(r); 

// 2 function component : () => ReactElement | JSX 

// การประกาศ =ชื่อ fn ขึ้นต้นด้วย upperCase (react + dev) จะรู้ว่าเป็น component ไม่ใช่ JS-FN
// การเรียกใช้ FN component === reuse JSX === Reuse UI




function UserProfileComponent () {
    return <h1> FullName : John Doe </h1>
}

// let user1 = userProfileComponent();
// user1 = <h1> FullName : John Doe</h1>



// ***********************
// userProfileComponent() === <userProfileComponent/>    *************************
//SYNTAX : <UserComponent /> == การ call, invoke เรียกใช้ function component และต้องขึ้นด้วย upperCase
const app = (  // สามารถ call fnด้วยชื่อ แบบ html ได้
    <div>
        {UserProfileComponent()}
        <UserProfileComponent/>
    </div>
);

//user1 = <h1> Fullname : John Doe </h1> เก็บค่า john doe 

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<UserProfileComponent />);




