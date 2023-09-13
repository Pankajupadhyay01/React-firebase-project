import React from 'react'
import { Link } from 'react-router-dom'
import { Herodata } from '../../data/Nav'
const Smallcard = () => {
    return (
        <>
            <div className='w-[90%]  flex justify-center flex-wrap gap-4 mb-10 md:mb-0'>
                {
                    Herodata.map((pro, i) => (

                        <div key={i} className='flex flex-col justify-center items-center w-[calc(50%-10px)] bg-slate-100 md:p-[10px_10px] rounded-lg gap-2'>
                            <div className='text-blue-500 text-[20px]'>
                                <ion-icon name={pro.image}></ion-icon>
                            </div>
                            <div className='font-bold lg:text-2xl text-lg text-center text-blue-800'>
                                {pro.name}
                            </div>
                            <Link to={pro.Link} className='text-orange-500 font-bold text-[20px]'>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Smallcard
