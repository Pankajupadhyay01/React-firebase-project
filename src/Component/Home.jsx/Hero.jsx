import React from 'react'
import heroimg from '/assets/hero.png'
import Smallcard from '../Cards/Smallcard'
const Hero = () => {
    return (
        <div className='bg-Hero h-[100vh] overflow-hidden w-full flex justify-center items-center'>
            <div className='flex justify-between w-[95%] h-full'>
                <div className='hidden md:flex flex-col flex-1 justify-center items-center h-full gap-y-4'>
                    <div className='h-[540px] animate-[Bounce_2s_infinite_alternate]'>
                        <img src={heroimg} className='h-full' alt="" />
                    </div>
                    <div className='text-orange-500 text-lg drop-shadow-[2px_3px_0_pink] cursor-pointer'>
                        Do Help.. Get Hired..
                    </div>
                </div>

                <div className='flex  flex-1  justify-center items-center flex-col gap-y-8 h-[100vh]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[32px] font-semibold text-[#2d1c5a]'>
                            Get All Tech Related Help
                        </h1>
                        <div className='cursor-none'>
                            Get Help | Do Help | Earn Coin
                        </div>
                    </div>

                    <Smallcard />
                </div>

            </div>
        </div>
    )
}

export default Hero
