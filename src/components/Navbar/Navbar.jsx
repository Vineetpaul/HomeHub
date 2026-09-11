import React from 'react'
import { useEffect } from 'react'
import navItems from '../../Config/Navitems'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logoipsum-427.png'

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/login');
    }
   


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            delay: 200,
        })

    }, [])





    return (
        <div className="sticky top-0 z-50 shadow-lg dark:bg-gray-800">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-2 shadow-lg">

                {/* logo section */}
                <div

                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"

                    className="flex items-center space-x-2">
                    <img src={Logo} alt="Company Logo"
                        className="w-8 h-8 " />
                    <h1 className='text-xl font-bold text-black dark:text-white'>HomeHub</h1>

                </div>

                {/* Routes section */}
                <div className="hidden h-10 w-[500px] items-center justify-center rounded-full bg-gray-200 sm:flex dark:bg-gray-600">
                    <ul className="flex h-full items-center justify-center gap-6">
                        {navItems.map((items) => (
                            <li data-aos="fade-down" key={items.id} className="cursor-pointer text-black transition-colors duration-200 hover:text-blue-300 dark:text-white"><Link to={items.path}>{items.name}</Link></li>
                        ))}
                    </ul>




                </div>

                {/* search section */}
                <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="flex gap-4">
                   <button type='button' onClick={handleClick} className="flex items-center justify-center w-20 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-full font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Login</button>
                    <button className="bg-gradient-to-r from-red-500 to-red-400 text-white rounded-full px-3 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Get Started</button>

                </div>
            </div>

        </div>
    )
}

export default Navbar
