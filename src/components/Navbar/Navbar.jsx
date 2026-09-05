import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logoipsum-427.png'

const Navbar = () => {

    const navItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'FAQs', path: '/faqs' },
        { id: 5, name: 'Contact', path: '/contact' },
    ];



    return (
        <div className="shadow-lg position-sticky top-0 z-50 dark:bg-gray-800 ">
            <div className="max-w-7xl shadow-lg mx-auto px-4 py-2 flex items-center justify-between h-16">

                {/* logo section */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Company Logo"
                        className="w-8 h-8 " />
                    <h1 className='text-xl font-bold text-black dark:text-white'>HomeHub</h1>

                </div>

                {/* Routes section */}
                <div className="flex items-center justify-center relative bg-gray-200 dark:bg-gray-600 hidden sm:flex rounded-full w-[500px] h-[40px]">
                    <ul className="flex h-full gap-6 justify-center items-center">
                        {navItems.map((items) => (
                            <li key={items.id} className="text-black dark:text-white hover:text-blue-300 transition-color duration-200 cursor-pointer"><Link to={items.path}>{items.name}</Link></li>
                        ))}
                    </ul>




                </div>

                {/* search section */}
                <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-gray-200 to-white text-gray-800 rounded-full px-3 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Login</button>
                    <button className="bg-gradient-to-r from-gray-200 to-white text-gray-800 rounded-full px-3 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">Get Started</button>

                </div>
            </div>

        </div>
    )
}

export default Navbar
