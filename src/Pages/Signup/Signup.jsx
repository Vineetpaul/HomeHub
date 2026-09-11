import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  const handleLogin = () =>{
    navigate('/login')
  }




  return (
    <div className='w-full min-h-screen bg-gray-800 flex items-center justify-center p-6 md:p-10 lg:p-16 overflow-y-auto'>
      <div className="bg-red-500 w-full h-[500px] md:max-w-[450px] lg:max-w-[400px] min-h-[450px] flex flex-col rounded-xl p-4 gap-2">
        {/* heading section */}
        <div className='flex flex-col w-full h-[80px] bg-purple-500 '>
          <div className='w-full h-[40px] bg-amber-500'>

          </div>
          <div className='w-full h-[40px] bg-green-500'>

          </div>

        </div>


        {/* form section */}
        <form className='w-full h-[300px] bg-blue-500 '>

        </form>


        {/* icons section */}
        <div className='flex flex-col w-full h-[80px] bg-yellow-500'>
          <div className="flex items-center justify-center w-full h-[40px] bg-green-400">

          </div>
          <div className="flex items-center justify-center w-full h-[40px] bg-yellow-700">
            <p>Already have an account? <span onClick={handleLogin}>Login</span></p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Signup
