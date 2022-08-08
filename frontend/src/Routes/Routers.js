import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from '../components/Header/Header';
import Register from '../components/pages/Register';
import LogIn from "../components/pages/LogIn.js";
import Home from "../components/pages/Home"
import Footer from '../components/Footer/Footer';


const Routers = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route
        path="/register" element={<Register/>}/>
      <Route path="/logIn" element={<LogIn/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routers