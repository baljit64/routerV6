import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Second from '../pages/TEst2'
import ProtectedRoutes from "../route/ProtectedRoutes";
function LandingPage() {
  return (
      <Routes>
        {ProtectedRoutes.map(({path,component})=>{
            console.log(path,component,'-path')
        })}
        <Route path={'/'} element={<Second/>}/>

      </Routes>
  )
}
// function LandingPage() {
// //   ProtectedRoutes.map(({ component }, i) => {
// //     console.log(component, "-----component");
// //   });
// //   <Route path={'/'} element={<Home/>}/>
//   return (
//       <Routes>

//       <Route path={'/'} element={<Second/>}/>

//     <Route path={'second'} element={<Home/>}/>
//       </Routes>
   
//     );
// }

export default LandingPage;

//   {ProtectedRoutes.map(({path, component }, i) => (
//     <Route path={path} element={component} />
//   ))}