import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Register from '../components/pages/Register';
import LogIn from "../components/pages/LogIn.js";

const Routers = () => {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Header />}>
      <Route
        path="/register" element={<Register/>}/>
      
      <Route path="/logIn" element={<LogIn />} />
      </Route>
     
        
      </Routes>
    </BrowserRouter>
  )
}

export default Routers