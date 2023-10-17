import React, { useEffect, useState } from 'react'
import Resume_template from './Resume_template'
import resume, { Basic, Education, Skills, Languages, Experience, Project } from '../../data/resume'
const Resume_form = () => {
    const [heading, setheading] = useState("Basic")
    const [data, setdata] = useState([])

    useEffect(() => {
        switch (heading) {
            case "Basic":
                setdata(Basic)
                break;

            case "Education":
                setdata(Education)
                break;
            case "Skills":
                setdata(Skills)
                break;
            case "Project":
                setdata(Project)
                break;
            case "Experience":
                setdata(Experience)
                break;
            case "Languages":
                setdata(Languages)
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

            <div className='w-[90%] flex flex-col justify-center m-auto'>
                <div className='flex flex-wrap gap-2 w-full justify-center m-[10px]'>

                    {
                        data.map((pro, i) => (
                            <div key={i} className='flex flex-col w-[30%] my-[10px] p-[10px]'>
                                <input key={i} type={pro.type} placeholder={pro.placeholder} className=' border-2 border-black text-center p-[8px] rounded outline-none' />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Template */}
            <Resume_template />
        </div >
    )
}

export default Resume_form
