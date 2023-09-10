import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logimg from '/assets/login.png'
import FormsLoader from '../Component/Loaders/FormsLoader';
const Login = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3500);
  }, [])


  return (
    <>
      {
        loading ?
          < FormsLoader />
          :
          <div className='h-[100vh] bg-main flex items-center'>

            <div className='bg-white bg-opacity-20 border-1 w-[90%] lg:w-[70%] py-[40px] m-auto'>
              {/* heading */}
              <h1 className='flex justify-center text-[42px] text-mustard mb-5'>
                Sign In
              </h1>
              <div className='flex md:flex-row w-full flex-col m-auto justify-between items-center'>

                {/* Left Section */}

                <div className='flex justify-center gap-4 flex-col flex-1 items-center w-full lg:w-[55%] md:border-r-2'>

                  {/* form */}

                  <form action="" className='flex flex-col gap-4  justify-center items-center'>
                    <input type="text" className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg ' placeholder='Enter Your Email' />
                    <input type="text" className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg ' placeholder='Enter Your Password' />
                    <button className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Login</button>
                  </form>

                  {/* login with options  */}
                  <div className='flex gap-x-3'>
                    <div className='cursor-pointer ' >Google</div>
                    <div className='cursor-pointer '>Github</div>
                  </div>

                  {/* Signup page link */}
                  <div className='text-white md:hidden'>
                    Don't Have Account ? <Link className='text-blue-300 ' to={"/"}>Sign up</Link>
                  </div>
                </div>

                {/* Right Section */}

                <div className='md:flex flex-col justify-center items-center w-[45%] flex-2 animate-[test_2s_infinite_ease_alternate] hidden'>
                  <img className='w-full ' src={Logimg} alt="" srcset={Logimg} />

                  {/* Signup page link */}
                  <div className='text-white'>
                    Don't Have Account ? <Link className='text-blue-300 ' to={"/"}>Sign up</Link>
                  </div>
                </div>


              </div>
            </div>


          </div>
      }
    </>

  )
}

export default Login
