import React from 'react'
import { useEffect } from 'react';
import icons from '../../Config/Icons'
import { FaMapLocationDot, FaPhone } from 'react-icons/fa6'
import products from '../../Config/Products';
import navItems from '../../Config/Navitems';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Logo from '../../assets/logoipsum-427.png'

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            delay: 100,
        })
    }, [])

    return (
        <div  className='flex flex-col gap-4 p-4 lg:p-10  w-full min-h-[500px] lg:min-h-[300px] md:min-h-[300px] bg-gray-800 md:flex-row lg:flex-row'>

            {/* First about section  */}
            <div data-aos="fade-up" className=" w-full h-[150px] lg:min-h-[250px] md:min-h-[250px]">
                <div className="flex items-center p-2 gap-2">
                    <img src={Logo} className='w-10 h-10 ' />
                    <h1 className='text-2xl font-bold text-white'>HomeHub</h1>
                </div>
                <div className='flex p-2 text-white'>
                    <p> HomeHub is the Platform where you can easily Buy, Sell, and Rent a property and we will provide you the best that you deserves.</p>
                </div>
            </div>

            {/* Footer details */}
            <div data-aos="fade-up" className=" flex w-full h-[250px] lg:min-h-[250px] md:min-h-[250px] mt-5 md:mt-0 lg:mt-0">
                <div className=" w-full h-200px p-2 gap-2">
                    <h1 className='text-white font-bold text-xl'>Important Links</h1>
                    <ul className="flex flex-col p-2 gap-2">
                        {navItems.map((items) => (
                            <li key={items.id}
                                className='text-white font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-200'
                            >{items.name}</li>
                        ))}
                    </ul>

                </div>

                <div className="w-full h-200px p-2 gap-2 ">
                    <h1 className='text-white font-bold text-xl'>Services</h1>
                    <ul className="flex flex-col p-2 gap-1 ">
                        {products.map((product) => (
                            <li key={product.id}
                                className='text-white font-semibold hover:text-blue-400 transition-colors duration-200 cursor-pointer'
                            >{product.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* footer last section icons */}
            <div data-aos="fade-up" className=" w-full h-[110px] md:h-[150px] lg:h-[150px] p-2">
                <div className=" flex flex-row w-full h-[40px] items-center px-2  gap-4">
                    {icons.map((items) => (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-0 transition-colors duration-200 hover:bg-gray-500" key={items.id}><items.icon className='text-xl text-white' /></div>
                    ))}

                </div>
                <div className="flex md:flex-col lg:flex-col w-full h-[40px] md:h-[80px] lg:h-[80px] mt-2">
                    <div className='flex items-center gap-2 p-2  w-full h-full '>
                        <FaMapLocationDot className='text-white font-semibold'/>
                        <p className='text-white font-semibold'>Haryana</p>

                    </div>
                    <div className='flex items-center gap-2 p-2 w-full h-full '>
                        <FaPhone className='text-white font-semibold' />
                        <p className='text-white font-semibold'>+91 12345677</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
