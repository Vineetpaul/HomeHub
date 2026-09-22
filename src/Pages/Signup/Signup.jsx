import Logo from '../../assets/logoipsum-427.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Signup = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const handleLogin = () =>{
    navigate('/login')
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev

      const nextErrors = { ...prev }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email'
    if (!formData.password) {
      nextErrors.password = 'Please enter a password'
    } else if (formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters long'
    }
    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(nextErrors)
  }



  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-800 to-blue-950 flex items-center justify-center p-5 sm:p-8 overflow-y-auto'>
      <div data-aos='fade-up' className='w-full max-w-[430px] bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/30 flex flex-col rounded-2xl p-6 sm:p-8 gap-6'>
        {/* heading section */}
        <div data-aos='fade-down' data-aos-delay='150' className='flex flex-col w-full gap-3'>
          <div className='flex items-center justify-center gap-3 w-full'>
            <img src={Logo} alt='HomeHub logo' className='w-10 h-10 rounded-xl shadow-lg' />
            <h1 className='text-2xl font-bold tracking-wide text-white'>HomeHub</h1>

          </div>
          <div className='flex items-center justify-center w-full'>
            <p className='text-sm text-center text-slate-300'>Create your account and connect with us</p>

          </div>

        </div>


        {/* form section */}
        <form data-aos='fade-up' data-aos-delay='300' onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-xs font-semibold uppercase tracking-wider text-slate-200'>Name</label>
            <input id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' className='px-4 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 outline-none w-full h-11 transition-shadow focus:ring-2 focus:ring-blue-300' />
            {errors.name && <p className='text-red-300 text-xs'>{errors.name}</p>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-xs font-semibold uppercase tracking-wider text-slate-200'>Email</label>
            <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='px-4 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 outline-none w-full h-11 transition-shadow focus:ring-2 focus:ring-blue-300' />
            {errors.email && <p className='text-red-300 text-xs'>{errors.email}</p>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-xs font-semibold uppercase tracking-wider text-slate-200'>Password</label>
            <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} placeholder='Create a password' className='px-4 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 outline-none w-full h-11 transition-shadow focus:ring-2 focus:ring-blue-300' />
            {errors.password && <p className='text-red-300 text-xs'>{errors.password}</p>}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='confirmPassword' className='text-xs font-semibold uppercase tracking-wider text-slate-200'>Confirm password</label>
            <input id='confirmPassword' name='confirmPassword' type='password' value={formData.confirmPassword} onChange={handleChange} placeholder='Repeat your password' className='px-4 rounded-lg bg-white/95 text-slate-900 placeholder:text-slate-400 outline-none w-full h-11 transition-shadow focus:ring-2 focus:ring-blue-300' />
            {errors.confirmPassword && <p className='text-red-300 text-xs'>{errors.confirmPassword}</p>}
          </div>

          <button type='submit' className='flex items-center justify-center rounded-lg w-full h-11 bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors duration-200'>
            Sign Up
          </button>
        </form>


        {/* icons section */}
        <div data-aos='fade-up' data-aos-delay='450' className='w-full border-t border-white/15 pt-5'>
          <div className='flex items-center justify-center'>
            <p className='text-sm text-slate-300'>Already have an account? <button type='button' onClick={handleLogin} className='text-blue-300 hover:text-blue-200 font-semibold transition-colors duration-200 cursor-pointer'>Log in</button></p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Signup
