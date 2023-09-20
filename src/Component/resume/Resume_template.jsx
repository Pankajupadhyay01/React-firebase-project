import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import Left_resume from './Left_resume';
import Right_resume from './Right_resume';

const Resume_template = () => {
    const Resuref = useRef()
    return (
        <div className='bg-blue-100 w-full py-10 overflow-x-scroll'>
            <div ref={Resuref} className='bg-white lg:w-[900px] w-[750px] py-3 gap-3 flex flex-col justify-center items-center m-auto'>

                {/* basic detail */}

                <div className='flex w-full'>

                    {/* personal image */}
                    <div className='w-[20%] flex justify-center mx-2'>

                        <div className='h-[150px] w-[150px] overflow-hidden bg-red-500 rounded-full object-cover'>
                            <img className='h-full w-full' src="./assets/hero.png " alt="" />
                        </div>

                    </div>

                    {/*  basic detail */}
                    <div className='flex w-[80%] m-auto flex-col justify-center gap-y-[5px] px-3'>
                        <div className=' text-[30px] font-medium'>
                            Pankaj Upadhyay
                        </div>
                        <div className='text-[20px]'>
                            Student
                        </div>
                        <div>
                            To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.
                        </div>
                    </div>
                </div>

                {/* basic detail completed  */}

                {/* Link/Contact */}
                <div className='flex justify-between px-[40px] w-full bg-slate-900 m-3'>
                    {/* left section */}
                    <div className='text-white items-start flex gap-3 flex-col text-[14px] py-[10px] '>
                        <div className=''>
                            <ion-icon name="mail"></ion-icon>
                            <span className='px-[10px]'>tecpankaj24@gmail.com </span>
                        </div>

                        <div className=''>
                            <ion-icon name="location"></ion-icon>
                            <span className='px-[10px]'>Haldwani, India </span>
                        </div>

                        <div className=''>
                            <ion-icon name="logo-github"></ion-icon>
                            <span className='px-[10px]'>
                                github.com/Pankajupadhyay01
                            </span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='text-white items-start flex gap-3 text-[14px] flex-col py-[10px]'>
                        <div className=''>
                            <ion-icon name="phone-portrait"></ion-icon>
                            <span className='px-[10px]'>07455994229</span>
                        </div>

                        <div className=''>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <span className='px-[10px]'>
                                linkedin.com/in/pankaj-upadhyay-a8b1b8214
                            </span>
                        </div>

                    </div>
                </div>
                {/* link/contact Completed */}

                {/* main Resume Start */}
                <div className='flex justify-between items-start w-[90%]'>
                    <div className='w-[47%]'>
                        <Left_resume />
                    </div>

                    <div className='w-[47%]'>
                        <Right_resume />
                    </div>
                </div>
                {/* Main Resume Ended */}

            </div>

            {/* download Button  */}
            <div className='flex justify-center my-[20px]'>

                <ReactToPrint
                    trigger={() => {

                        return <button className='bg-mustard p-[10px_10px] rounded-lg text-white hover:shadow-[10px_10px_10px_cyan] hover:translate-y-[-2px] hover:ease-in-out'>Print Resume</button>

                    }}
                    content={() => Resuref.current}
                />

            </div>
        </div>
    )
}

export default Resume_template
