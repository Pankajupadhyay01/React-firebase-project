import React from 'react'
import heroimg from '/assets/hero.png'
const Hero = () => {
    return (
        <div className='bg-Hero h-[100vh] overflow-hidden w-full flex justify-center items-center'>
            <div className='flex justify-between w-[95%]'>
                <div className='flex flex-1 justify-center items-center'>
                    Implement Card's here
                </div>
                <div className=' flex flex-1 justify-center items-center h-[540px]'>
                    <img src={heroimg} className='h-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
