// #1 React : JSX
let height = 1.75;
let weigth = 60;

const calcBMI = (w, h) => w / h ** 2;

function calcBMI (weigth,height) {

    // paramenter ; ตัวแปร js ที่ใช้ใน fn (แต้่คนเรียกใช้ fn เป็นคนกำหนดค่า)
    // let w = 60
    // let h = 5 
}
calcBMI(9,5)
calcBMI(weigth, height) //calcBMI(60,1.75)
//calcBMI(5.9)




const userBMI = (
    <>
    <h1> My BMI </h1>
    <h3>{calcBMI(weigth, height).toFixed(2)} </h3>
    </>
);



// #2 ReactDOM : createRoot

const domRoot = document.getElementById("root")
const root = ReactDOM.createRoot("domRoot");

// #3 ReactDOM : TakeOver for Render Task
root.render(userBMI);



