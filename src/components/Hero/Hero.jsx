import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Building from '../../assets/Building1.jpg'

const Hero = () => {

    useEffect(()=>{
       AOS.init({
           duration:1000,
           once:true,
           easing:'ease-in-out',
           delay:200,
       })
   
     },[])


    return (
        <div className="flex flex-col justify-center gap-2 p-4 bg-gray-200 min-h-screen sm:flex-row">

            {/* left info section */}
            <div  className="flex flex-col justify-center w-full min-h-[300px] p-4 ">
                <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800">
                    DISCOVER NEXT <br />
                    PERFECT <span className="text-red-500">PROPERTY</span> <br />
                    ON HOMEHUB.
                </h1>

                {/* creating options section */}

                <div data-aos="fade-up" className="flex gap-4 mt-10">
                    <button className="bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg rounded-full h-10 w-20 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Buy</button>
                    <button className="bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg rounded-full h-10 w-20 font-semibold cursor-pointer hover:scale-105 transition-all duration-300 ">Rent</button>
                    <button className="bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg rounded-full h-10 w-20 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Sell</button>
                </div>


                {/* creating sections */}

                <div data-aos="fade-up" data-aos-duration="1000" className="mt-6 flex flex-col justify-center gap-4 rounded-lg bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex flex-col">
                        <p className="text-gray-500">Location</p>
                        <select className="bg-gray-200 rounded-lg p-2">
                            <option>Florida,US</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-gray-500">Type</p>
                        <select className="bg-gray-200 rounded-lg p-2">
                            <option>2 BHK</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-gray-500">Price</p>
                        <select className="bg-gray-200 rounded-lg p-2">
                            <option>$700-$1000</option>
                        </select>
                    </div>
                    <button className=" bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg rounded-full h-10 w-20 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Find</button>
                </div>


            </div>

            {/* Right Image section */}
            <div data-aos="zoom-in" className="flex items-center justify-center w-full min-h-[300px]">
                <img src={Building} alt="Building image"
                    className="w-[500px] rounded-xl shadow-xl " />

            </div>

        </div>
    )
}

export default Hero
