import React from 'react'
import Heading from '../Cards/Heading'
import { contact } from '../../data/contact'
import { getFirestore  , collection , addDoc} from "firebase/firestore";
import { app } from '../../firebase';


const firestore = getFirestore()
const Contact = () => {
     
}
function app(){
    const writeData = async() => {
        const result = await addDoc(collection(firestore, "Users") , {
            Name : "Niyati" ,
            Phone : 9876580680,
            City : "Delhi"
        });
        console.log ("Result" , result);
    };


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
                        <input type="name" className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Name' />
                        <input type="email" className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Email' />
                        <textarea rows={5} type="text" className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Message..' />
                        <button onClick={writeData} className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact
