import React, { useState } from 'react'
import { Desktopnav } from '../data/Nav'
import { Link } from 'react-router-dom'
const Navbar_desktop = () => {
    const [user, setuser] = useState(false)
    return (
        <div>
            <nav className='bg-cyan hidden md:flex w-full fixed z-[999]'>
                <div className='flex w-full justify-between mx-[20px] items-center p-[10px_20px]'>
                    <div className='text-[28px] text-blue-900 font-semibold drop-shadow-[0_0_10px_black]'>PacTech</div>
                    <ul className='flex gap-x-4 justify-center items-center'>
                        {
                            Desktopnav.map((pro, i) => (
                                <Link key={i} to={pro.Link} className=' hover:text-blue-900 text-[18px]'>{pro.name}</Link>
                            ))
                        }

                        {
                            user ?
                                <div className='bg-main text-white p-[5px_20px] rounded-xl'>Log out </div>
                                :
                                <Link to={"/login"} className='bg-mustard p-[5px_20px] rounded-xl'>Sign in</Link>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar_desktop
