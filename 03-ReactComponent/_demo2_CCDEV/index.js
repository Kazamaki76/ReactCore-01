
// #H3 : สร้าง <logo/> <NavMenu>

// #H2 : สร้าง header component

// function Header() {
//     return (
//         <header className="container header">
//             <nav className="Nav">
//                 { /*logo */}
//                 <div className="logo">
//                     <h2
//         </header>
//     )
// }









// สร้าง Header Component() 
const HeaderComponent = () => {
    <header className='container header'>
        <nav className='nav'>
            <div className='logo'>
                <h2>CodeCamp</h2>
            </div>
            <div className='nav_menu' id='nav_menu'>
                <ul className='menu_list'>
                    <li className='nav_menu_item'>
                        <a href='#' className='nav_menu_link'>
                            account
                        </a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='#' className='nav_menu_link'>
                            about
                        </a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='#' className='nav_menu_link'>
                            service
                        </a>
                    </li>
                    <li className='nav_menu_item'>
                        <a href='#' className='nav_menu_link'>
                            contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}; 
// return <header className='container header'>
// <nav className='nav'>
//     <div className='logo'>
//         <h2>CodeCamp</h2>
//     </div>
//     <div className='nav_menu' id='nav_menu'>
//         <ul className='menu_list'>
//             <li className='nav_menu_item'>
//                 <a href='#' className='nav_menu_link'>
//                     account
//                 </a>
//             </li>
//             <li className='nav_menu_item'>
//                 <a href='#' className='nav_menu_link'>
//                     about
//                 </a>
//             </li>
//             <li className='nav_menu_item'>
//                 <a href='#' className='nav_menu_link'>
//                     service
//                 </a>
//             </li>
//             <li className='nav_menu_item'>
//                 <a href='#' className='nav_menu_link'>
//                     contact
//                 </a>
//             </li>
//         </ul>
//     </div>
// </nav>
// </header>
// };



// สร้าง Hero Component......








// สร้าง AppComponent

// การประกาศ FN component
function App () {return<div> <Header /> </div>}
    // return React.createElement('div' , null, 'App!');
    

    // <header className='container header'>
    // <nav className='nav'>
    //     <div className='logo'>
    //         <h2>CodeCamp</h2>
    //     </div>
    //     <div className='nav_menu' id='nav_menu'>
    //         <ul className='menu_list'>
    //             <li className='nav_menu_item'>
    //                 <a href='#' className='nav_menu_link'>
    //                     account
    //                 </a>
    //             </li>
    //             <li className='nav_menu_item'>
    //                 <a href='#' className='nav_menu_link'>
    //                     about
    //                 </a>
    //             </li>
    //             <li className='nav_menu_item'>
    //                 <a href='#' className='nav_menu_link'>
    //                     service
    //                 </a>
    //             </li>
    //             <li className='nav_menu_item'>
    //                 <a href='#' className='nav_menu_link'>
    //                     contact
    //                 </a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
    // </header>
    


//การเรียกใช้ fn component 
// <App/>


// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);


