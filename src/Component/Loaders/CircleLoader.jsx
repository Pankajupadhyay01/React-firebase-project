import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const CircleLoader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[100vh] flex-col '>
            <RingLoader
                color="#3cd7b8"
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    )
}

export default CircleLoader
