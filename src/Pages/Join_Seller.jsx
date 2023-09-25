import React, { useState } from 'react'
import { input } from '../data/Sellers_input'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'
const Join_Seller = () => {
    const [seller, setseller] = useState({})
    const handle = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "seller", "AzQFl4KiXowK6WaNtex0"), {
            ...seller,
        });
    }

    const sellerData = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        setseller({ ...seller, [id]: val })
    }

    return (
        <div className='pt-[50px] w-[90%] flex m-auto justify-around items-center h-[100vh]'>


            <div className='w-[50%] flex justify-center items-center'>
                <input type="file" />

            </div>
            <div className='flex flex-col w-[50%] justify-center items-center gap-6 '>
                <div className='flex flex-wrap gap-6 w-full justify-center'>

                    {
                        input.map((pro, i) => (
                            <div key={i} className='flex flex-col w-[40%] my-[10px]'>
                                <label>{pro.label}</label>
                                <input id={pro.id} type={pro.type} placeholder={pro.placeholder} onChange={sellerData} className='w-full py-2 outline-none text-center border-b-2 border-b-black' />
                            </div>
                        ))
                    }
                </div>
                <button onClick={handle} className='w-[30%] bg-main  text-white font-medium p-[10px_20px] rounded-xl cursor-pointer'>Submit</button>

            </div>
        </div>
    )
}

export default Join_Seller