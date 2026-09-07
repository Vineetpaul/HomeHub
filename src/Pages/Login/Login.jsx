import React from 'react'
import { Link } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../../assets/logoipsum-427.png'
import {FaGoogle, FaFacebook} from 'react-icons/fa6'

const Login = () => {

   useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      easing:'ease-in-out',
      delay:200,
    })

  },[])

  const [formData, setFormData] = useState({
    email:"",
    password:"",
    remeberMe:false,
  });

  const [formState, setFormState] = useState({
    loading:false,
    error:{},
    showPassword:false,
    success:false,

  });

  


 

  return (
    <div className="w-full min-h-screen overflow-hidden flex justify-center items-center bg-gray-800 p-6 md:p-10 lg:p-16  ">
      <div data-aos="fade-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
      className=" w-full shadow-gray-900 shadow-lg md:max-w-[450px] lg:max-w-[400px] h-[450px]  bg-gray-600 flex flex-col rounded-xl p-4 gap-2 ">

        {/* Heading section */}
        <div className='w-full h-[80px]'>
          <div className='w-full h-[40px] flex gap-2 justify-center items-center '>
            <img src={Logo} alt="Logo" className="w-8 h-8 " />
            <h1 className='text-white font-bold text-xl'>HomeHub</h1>

          </div>
          <div className=' w-full h-[40px] flex justify-center items-center '>
            <h1 className="text-white leading-loose  ">Login to proceed with HomeHub</h1>

          </div>

        </div>


        {/* Form section */}
        <div className="">
          
        </div>
        <form className=' w-full h-[240px] flex flex-col gap-6 '>
          {/* email section */}
          <div className="flex flex-col gap-2">
            <label className='text-sm text-white '>
              Email :-

            </label>

            <input
              type='email'
              placeholder='Enter your email.'
              // value={email}
              className='flex border-0 px-4 items-center shadow-gray-700 shadow-lg rounded-full bg-gray-200 w-full h-[40px]'

            />



          </div>

          {/* password section */}

          <div className="flex flex-col gap-2">
            <label className='text-sm text-white'>
              Password:-

            </label>

           <input
              type='password'
              placeholder='Enter your password.'
              // value={email}
              className='flex border-0 px-4 items-center shadow-gray-700 shadow-lg rounded-full bg-gray-200 w-full h-[40px]'

            />



          </div>

          <button className="flex items-center justify-center shadow-gray-700 shadow-lg  rounded-full w-full h-[40px] bg-blue-400 border-0 text-white font-semibold cursor-pointer hover:scale-105 transition-all duration-300 "
          type='submit'
          
          >
            Login

          </button>


        </form>


        {/* Sign up section */}
        <div className=' w-full h-[80px]'>
          <div className=" w-full h-[40px] flex items-center justify-center gap-4 ">
            <p className='text-white text-sm '>Login with:- </p>
           <div className="flex items-center justify-center  border-0 rounded-full w-8 h-8 hover:text-gray-800 hover:bg-white transition-all duration-300 text-white">
             <FaGoogle className=''/>
            
           </div>
           <div className='flex items-center justify-center  border-0 rounded-full w-8 h-8 hover:text-gray-800 hover:bg-white transition-all duration-300 text-white'>
            <FaFacebook className=''/>
           </div>

          </div>
          <div className=" w-full h-[40px] flex items-center justify-center ">
            <p className='text-white text-sm '>Don't have an account? <span className='cursor-pointer text-blue-500 hover:text-blue-400 transition-colors duration-200'>Sign Up</span></p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login
