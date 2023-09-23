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
            Link: "/"
        },
        {
            title: "Become a Seller ",
            Link: "/"
        }
    ]
    return (
        <>
            <div className='flex justify-center gap-4 my-[10px]'>

                {
                    button.map((pro, i) => (
                        <Link key={i} to={pro.Link} className='bg-main text-white font-medium p-[10px_20px] rounded-xl cursor-pointer'>{pro.title}</Link>
                    ))
                }

            </div>
        </>
    )
}

export default Secondary_Nav
