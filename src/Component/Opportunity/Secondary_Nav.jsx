import React from 'react'
import { Link } from 'react-router-dom'

const Secondary_Nav = () => {
    const button = [
        {
            title: "Add a Job",
            Link: "/"
        },
        {
            title: "Find Job",
            Link: "/"
        },
        {
            title: "Find a Seller ",
            Link: "/hire"
        },
        {
            title: "Become a Seller ",
            Link: "/"
        }
    ]
    return (
        <>

            <div className='flex md:w-auto w-full justify-between items-center md:justify-center md:p-[10px_0] p-[8px_10px] md:bg-white bg-blue-500 m-auto'>
                <div className='md:hidden'>
                    LOGO
                </div>
                <div className='flex flex-col md:w-full justify-center md:flex-row md:gap-6 gap-y-4 absolute z-[999] w-[70%] top-[7%] md:top-0 md:p-0 p-[30px] bg-slate-400 md:bg-white md:relative'>
                    {
                        button.map((pro, i) => (
                            <Link key={i} to={pro.Link} className='bg-main  text-white font-medium p-[10px_20px] rounded-xl cursor-pointer'>{pro.title}</Link>
                        ))
                    }
                </div>
            </div>

            {/* <div className='md:relative md:py-0 md:flex-row absolute flex flex-col justify-center gap-4 z-[999] top-[5%]'>

                {
                    button.map((pro, i) => (
                        <Link key={i} to={pro.Link} className='bg-main text-white font-medium p-[10px_20px] rounded-xl cursor-pointer'>{pro.title}</Link>
                    ))
                }

            </div> */}
        </>
    )
}

export default Secondary_Nav