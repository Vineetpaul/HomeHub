import React from 'react'
import Building from '../../assets/Building2.jpg'

const Discover = () => {
    return (
        <div className="flex flex-col justify-center shadow-lg gap-2 lg:gap-10 p-4 lg:p-16 bg-gray-300 min-h-screen sm:flex-row ">
            {/* right image container */}
            <div className="flex w-full min-h-[300px] sm:w-[500px] mt-10 lg:mt-0 items-center justify-center">
                <img src={Building} alt="Building image"
                    className="rounded-2xl shadow-white-xl " />

            </div>

            {/* left info container */}
            <div className="w-full min-h-[300px] sm:w-[500px] mt-10 lg:mt-0 flex flex-col gap-4 p-4">
                <p className="text-red-500">// DISCOVER OUR STORY</p>
                <h1 className='text-gray-800 text-4xl font-bold '>UNVEILING PALACE REAL ESTATE JOURNEY</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


                <div className="flex flex-col mt-5 min-h-[120px]">
                    <div className="flex gap-4 w-full min-h-[80px]">
                        <div className="flex rounded-full w-10 h-10 border border-red-400 items-center justify-center text-red-400">01</div>
                        <div className="flex flex-col">
                            <h1 className="text-lg text-gray-800 font-semibold">Client Centric Approach</h1>
                            <p className="text-gray-600 ">Simple explanation text here.</p>
                        </div>


                    </div>
                    <div className="flex gap-4 w-full min-h-[80px]">
                        <div className="flex rounded-full w-10 h-10 border border-red-400 items-center justify-center text-red-400">02</div>
                        <div className="flex flex-col">
                            <h1 className="text-lg text-gray-800 font-semibold">Integrity & Transparency</h1>
                            <p className="text-gray-600 ">Simple explanation text here.</p>
                        </div>

                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-red-400 to-red-300 text-gray-800 rounded-full h-10 w-30 font-semibold cursor-pointer hover:scale-105 transition-all duration-300 mt-4">Read More</button>
                </div>

            </div>

        </div>

    )
}

export default Discover
