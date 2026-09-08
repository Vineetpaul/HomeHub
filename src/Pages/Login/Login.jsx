import React from 'react'
import { Link } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../../assets/logoipsum-427.png'
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa6'

const Login = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      delay: 200,
    })

  }, [])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [formState, setFormState] = useState({
    loading: false,
    error: {},
    showPassword: false,
    success: false,

  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({
        ...prev,
        error: errors
      }))
      return;
    }
    alert("Form is submitted")
    console.log("Form is Valid")

  };



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email" || name === "password") {
      setFormState((prev) => {
        if (!prev.error[name]) return prev;

        const errors = { ...prev.error };
        delete errors[name];
        return { ...prev, error: errors };
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    }

    if (!formData.password) {
      errors.password = "Please enter your password";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const togglePassword = ()=>{
    setFormState((prev)=>({
      ...prev,
      showPassword: !prev.showPassword,
    }))
  }




  return (
    <div className="w-full min-h-screen overflow-y-auto flex justify-center items-center bg-gray-800 p-6 md:p-10 lg:p-16">
      <div data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="w-full shadow-gray-900 shadow-lg md:max-w-[450px] lg:max-w-[400px] min-h-[450px] bg-gray-600 flex flex-col rounded-xl p-4 gap-2">

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
        <form onSubmit={handleSubmit} className='w-full min-h-[240px] flex flex-col gap-6'>
          {/* email section */}
          <div className="flex flex-col gap-2">
            <label className='text-sm text-white '>
              Email :-

            </label>

            <input
              name='email'
              type='email'
              value={formData.email}
              placeholder='Enter your email.'
              onChange={handleChange}

              className='flex border-0 px-4 items-center shadow-gray-700 shadow-lg rounded-full bg-gray-200 w-full h-[40px]'

            />
            {formState.error.email && (
              <p className="text-red-500 text-[12px]">{formState.error.email}</p>
            )}



          </div>

          {/* password section */}

          <div className="flex flex-col gap-2">
            <label className='text-sm text-white'>
              Password:-

            </label>

            <div className="relative w-full">

              <input
                name="password"
                type={formState.showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password."
                className="w-full border-0 px-4 pr-12 rounded-full bg-gray-200 h-[40px]"
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2"
              >
                {formState.showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>


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
              <FaGoogle className='' />

            </div>
            <div className='flex items-center justify-center  border-0 rounded-full w-8 h-8 hover:text-gray-800 hover:bg-white transition-all duration-300 text-white'>
              <FaFacebook className='' />
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
