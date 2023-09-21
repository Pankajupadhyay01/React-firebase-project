import React from 'react'
import { BrowserRouter, Link, Routes, Route, Navigate, } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Resume from './Pages/Resume';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.user);



  const RequiredAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />
  }
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume" element={<RequiredAuth> <Resume /> </RequiredAuth>} />

        </Routes>
      </BrowserRouter >
    </>
  )
}




export default App;