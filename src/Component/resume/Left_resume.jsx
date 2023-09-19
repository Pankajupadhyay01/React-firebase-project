import React from 'react'

const Left_resume = () => {
  return (
    <div className='flex '>
      {/* Education */}
      <div className='flex  flex-col gap-3'>
        <h1 className=' font-semibold text-blue-900 text-2xl'>
          EDUCATION
        </h1>
        {/* Education Detail */}
        <div className='flex flex-col gap-1'>
          <div className='font-semibold text-lg'>
            Bachelor's Degree in Computer Application
          </div>

          <p className='font-[600] text-gray-600'>
            Graphic Era
          </p>

          <div className='flex justify-between font-light text-sm'>
            <p>07/2021 - Present</p>
            <p>Haldwani</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Left_resume
