import React from 'react'
import Building from '../../assets/Building1.jpg'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center gap-2 p-4 bg-gray-200 min-h-screen sm:flex-row">

            {/* left info section */}
            <div className="w-full min-h-[300px] p-4 ">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    DISCOVER NEXT <br />
                    PERFECT <span className="text-red-500">PROPERTY</span> <br />
                    ON PALACE.
                </h1>

                {/* creating options section */}

                <div className="flex gap-4 mt-10">
                    <button className="bg-gradient-to-r from-red-400 to-red-300 text-gray-800 rounded-full h-10 w-20 font-bold cursor-pointer hover:scale-105 transition-all duration-300">Buy</button>
                    <button className="bg-gradient-to-r from-red-400 to-red-300 text-gray-800 rounded-full h-10 w-20 font-bold cursor-pointer hover:scale-105 transition-all duration-300 ">Rent</button>
                    <button className="bg-gradient-to-r from-red-400 to-red-300 text-gray-800 rounded-full h-10 w-20 font-bold cursor-pointer hover:scale-105 transition-all duration-300">Sell</button>
                </div>


                {/* creating sections */}

                <div className="bg-white mt-6 p-6 rounded-lg shadow flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center">
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
                    <button className=" bg-gradient-to-r from-red-400 to-red-300 text-gray-800 rounded-full h-10 w-20 font-bold cursor-pointer hover:scale-105 transition-all duration-300">Find</button>
                </div>


            </div>

            {/* Right Image section */}
            <div className="flex items-center justify-center w-full min-h-[300px]">
                <img src={Building} alt="Building image"
                    className="w-[500px] rounded-xl " />

            </div>

        </div>
    )
}

export default Hero
