import React, { useState } from 'react'
import { Mobilenav } from '../data/Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar_mobile = () => {
  // checking wether user is login or not
  const isLogin = useSelector((state) => state.user.user)

  return (
    <div className='fixed bottom-0 w-full md:hidden flex justify-center items-center mb-1 z-[999]'>
      <div className='flex justify-center w-[95%] items-center gap-x-5  bg-white rounded-xl p-[10px_10px]'>
        {
          Mobilenav.map((pro, i) => (
            <Link key={i} to={pro.Link} className='flex justify-center items-center bg-mustard p-[10px_10px] rounded-full text-[28px] font-bold text-blue-900'>
              <ion-icon name={pro.name}></ion-icon>
            </Link>
          ))
        }

        {

          isLogin ?
            <Link to={"/"} className='flex justify-center items-center bg-mustard p-[10px_10px] rounded-full text-[28px] font-bold text-blue-900'>
              <ion-icon name="person-circle-outline"></ion-icon>
            </Link>
            :
            <Link to={"/login"} className='flex justify-center items-center bg-mustard p-[10px_10px] rounded-full text-[28px] font-bold text-blue-900'>
              <ion-icon name="log-in-outline"></ion-icon>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar_mobile
