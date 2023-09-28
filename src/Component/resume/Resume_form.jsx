import React from 'react'
import Resume_template from './Resume_template'

const Resume_form = () => {
    const form = [
        {
            name: "one"
        },
        {
            name: "one"
        },
        {
            name: "one"
        },

    ]

    const heading = [
        {
            title: "Basic Information"
        },
        {
            title: "Education"
        },
        {
            title: "Add SkillS"
        },
        {
            title: "Personal Project"
        },
        {
            title: "WORK EXPERIENCE"
        },
        {
            title: "Achievement"
        },
        {
            title: "Languages"
        },
        {
            title: "Social Link"
        },


    ]
    return (
        <div>
            {
                heading.map((pro, i) => (
                    <div>
                        {pro.title}
                        <form action="" className='flex w-[]'>
                            {
                                form.map((pro, i) => (
                                    <input key={i} type="text" placeholder={pro.name} />
                                ))
                            }
                        </form>
                    </div>

                ))
            }
            < button > save</button>

            {/* Template */}
            <Resume_template />
        </div >
    )
}

export default Resume_form
