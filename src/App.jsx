import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}


 

export default App;