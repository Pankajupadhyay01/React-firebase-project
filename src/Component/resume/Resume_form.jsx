import React, { useEffect, useState } from 'react'
import Resume_template from './Resume_template'
import resume from '../../data/resume'
import { Basic } from '../../data/resume'
const Resume_form = () => {
    const [heading, setheading] = useState("Basic")
    const [data, setdata] = useState([])

    useEffect(() => {
        switch (heading) {
            case "Basic":
                setdata(Basic)
                break;

            default:
                setdata(Basic)
                break;
        }
    }, [heading])


    return (
        <div>
            <div className='flex justify-between m-[10px]'>
                {
                    resume.map((pro, i) => (
                        <li key={i} className=' list-none bg-blue-900 hover:text-mustard p-[10px] rounded text-white cursor-pointer' onClick={() => setheading(pro.id)}>
                            {pro.title}
                        </li>
                    ))
                }
            </div>

            <div className='w-[90%] flex flex-col justify-center h-[100vh] '>
                {
                    data.map((pro, i) => (
                        <input key={i} type={pro.type} />
                    ))
                }
            </div>
            {/* Template */}
            <Resume_template />
        </div >
    )
}

export default Resume_form
