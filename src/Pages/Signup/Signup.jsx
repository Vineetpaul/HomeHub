import Logo from '../../assets/logoipsum-427.png'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  const handleLogin = () =>{
    navigate('/login')
  }




  return (
    <div className='w-full min-h-screen bg-gray-800 flex items-center justify-center p-6 md:p-10 lg:p-16 overflow-y-auto'>
      <div className="bg-gray-600 w-full h-[500px] md:max-w-[450px] lg:max-w-[400px] min-h-[450px] flex flex-col rounded-xl p-4 gap-2">
        {/* heading section */}
        <div className='flex flex-col w-full h-[80px] '>
          <div className='flex items-center justify-center gap-2   w-full h-[40px] 0'>
            <img src={Logo} alt="Logo" className='w-8 h-8 '/>
            <h1 className='text-xl font-bold text-white '>HomeHub</h1>

          </div>
          <div className='flex items-center justify-center w-full h-[40px] '>
            <h1 className=' text-white text-semibold  leading-lose'>Create your account and Connect with us</h1>

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
            <p className='text-md text-gray-900'>Already have an account? <span onClick={handleLogin} className='text-blue-500 hover:text-blue-400 transition-colors duration-200 cursor-pointer'>Login</span></p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Signup
