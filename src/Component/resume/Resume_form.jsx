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
    return (
        <div>
            {/* <form action="" className='flex w-[]'>
                {
                    form.map((pro, i) => (
                        <input key={i} type="text" placeholder={pro.name} />
                    ))
                }
                <button>save</button>
            </form> */}

            {/* Template */}
            <Resume_template />
        </div>
    )
}

export default Resume_form
