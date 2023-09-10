import React from 'react'
import heroimg from '/assets/hero.png'
const Hero = () => {
    return (
        <div className='bg-Hero h-[100vh] overflow-hidden w-full flex justify-center items-center'>
            <div className='flex justify-between w-[95%]'>
                <div className='flex flex-1 justify-center items-center'>
                    Implement Card's here
                </div>
                <div className=' flex flex-col flex-1 justify-center items-center h-full gap-y-4'>
                    <div className='h-[540px] animate-[Bounce_2s_infinite_alternate]'>
                        <img src={heroimg} className='h-full' alt="" />
                    </div>
                    <div className='text-orange-500 text-lg drop-shadow-[2px_3px_0_pink] cursor-pointer'>
                        Do Help.. Get Hired..
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
