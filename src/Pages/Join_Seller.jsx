import React, { useState } from 'react'
import { input } from '../data/Sellers_input'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const Join_Seller = () => {
    const [seller, setseller] = useState({})

    // Collecting data from input field
    const sellerData = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        setseller({ ...seller, [id]: val })
    }

    // Sending data to firestore
    const handle = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, seller.email, seller.password);
            await setDoc(doc(db, "seller", res.user.uid), {
                ...seller,
            });
            alert("Hey user You are sucessfully Become a Seller . if you want to change any detail further you can change here itself.")
        } catch (error) {
            alert("Please Enter you Email Password using which you login.")
        }

    }

    return (
        <div className='pt-[50px] w-[90%] flex m-auto justify-around items-center h-[80vh] align-middle shadow-2xl'>


            <div className='w-[50%] flex flex-col gap-4 justify-center items-center'>
                <label >Please select you image</label>
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