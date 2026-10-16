// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import React, { useState,useEffect } from 'react';
// import bg from './assets/photo.jpg'
// import './index.css'
// import Button from './component/ui/button/index.jsx';
// const app = () =>{
//   const [data, setData]=useState([])
//   useEffect(()=>{
//     const fetchData = async()=>{
//       const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       const data = await response.json()
//       setData(data);
//     }
//     fetchData()
//   },[]);
//   console.log(data,"data")
//   return(
//     <div className='cd'>
//       <h2>User Details</h2>
//       <div className="user-list">
//     {data?.map((item,key)=>{
//       return(
//         <div className='dc'>
//         <div key={key}>
//           <label>Name:{item.name}</label>
          
//           <label>Email:{item.email}</label>
          
//           <label>City:{item.address.city}</label>
          
//           <label>Latitude:{item.address.geo.lat}</label>
          
//           <label>Langtitude:{item.address.geo.lng}</label>
          
//           </div>
//           </div>
           
//       )
//     })}
//     </div>
//     </div>
//   )
    
 

// //     return(
// //      <body>
// //      <div class="get">
     
// //        <h1>Welcome to My Photos</h1>
// //        <img className="css" src={bg} alt='My pIcture'></img><br></br>
// //        <Button name={"HelloBuddy"} onClick={()=>alert("Welcome Buddy")}/>
// //      </div>
// //        </body>
// //   ) 
//  }
// export default app;


import { useState } from "react";
import Title from "./component/ui/title/Titel.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Title count={count} />

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    );
}

export default App;
