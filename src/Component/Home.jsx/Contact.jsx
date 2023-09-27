import React, { useState } from 'react'
import Heading from '../Cards/Heading'
import { contact } from '../../data/contact'
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firestore = getFirestore()


const Contact = () => {
    const [data, setdata] = useState({})

    const dataListner = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        setdata({ ...data, [id]: val })
    }

    const writeData = async (e) => {
        e.preventDefault();
        try {
            const result = await addDoc(collection(firestore, "contacts"), {
                ...data,
            });
            alert("We have Stored your Detail. Will Contact you ASAP")
        } catch (error) {
            alert(error.code)
        }
    }

    return (
        <>
            <Heading value="Contact Us" />
            <div className='flex sm:flex-row flex-col w-[90%] m-auto justify-between items-center my-5'>
                <div className='hidden sm:flex sm:flex-col gap-3 flex-1 justify-center items-center border-r-2 border-gray-500'>
                    {
                        contact.map((pro, i) => (
                            <div key={i} className='flex flex-col items-center'>
                                <div className=''>icon</div>
                                <div className='text-[24px] font-semibold text-blue-950'>{pro.name}</div>
                                <div className='text-pink-900'>{pro.detail}</div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex md:flex-col gap-3 flex-1 justify-center items-center'>
                    <form action="" className='flex flex-col gap-4  justify-center items-center'>
                        <input type="name" onChange={dataListner} id='name' className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Name' />
                        <input type="email" onChange={dataListner} id='email' className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Email' />
                        <textarea rows={5} onChange={dataListner} id='message' type="text" className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Message..' />
                        <button onClick={writeData} className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact
