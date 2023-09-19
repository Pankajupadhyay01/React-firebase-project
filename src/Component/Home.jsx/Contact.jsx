import React from 'react'
import Heading from '../Cards/Heading'
import { contact } from '../../data/contact'
const Contact = () => {
    return (
        <>
            <Heading value="Contact Us" />
            <div className='flex w-[90%] m-auto justify-between items-center my-5'>
                <div className='flex md:flex-col gap-3 flex-1 justify-center items-center border-r-2 border-black'>
                    {
                        contact.map((pro, i) => (
                            <div>
                                
                            </div>
                        ))
                    }
                </div>
                <div className='flex md:flex-col gap-3 flex-1 justify-center items-center border-r-2 border-black'>

                </div>
            </div>
        </>
    )
}

export default Contact
