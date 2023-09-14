import React from 'react'
import Alnum_card from '../Cards/Alnum_card'

const About_point = () => {
    return (
        <div className='flex w-[90%] m-auto my-5'>
            <div className='flex flex-col w-full justify-center items-center gap-y-6'>
                <h1 className='text-[28px] font-semibold text-blue-500'>
                    How To Get Tech Point ?
                </h1>
                <div className='w-full'>
                    <Alnum_card />
                </div>
            </div>
        </div>
    )
}

export default About_point
