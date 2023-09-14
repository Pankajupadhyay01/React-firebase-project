import React from 'react'
import Smallcard from '../Cards/Smallcard'
import Hero_mobile from './Hero_mobile'
const Hero = () => {
    return (
        <>
            <div className='pt-[50px] hidden md:flex md:flex-col'>
                <div className='bg-Hero h-[320px] z-[-1] '>
                    <div className='flex flex-col justify-center items-center h-[280px] '>
                        <div className='text-[32px] text-black font-semibold'>
                            Get All Tech Related Help
                        </div>
                        <div className='text-purple-500'>
                            Get Help | Do Help | Earn Coin
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[90%] hidden md:flex justify-center items-center m-auto py-[30px] -mt-[80px] rounded-t-[30px]'>
                    <Smallcard />
                </div>
            </div>

            <Hero_mobile />
        </>
    )
}

export default Hero
