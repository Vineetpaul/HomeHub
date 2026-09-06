import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <section className="w-full bg-gray-100 px-4 py-12 sm:px-6 lg:px-16">
      <div
        data-aos="fade-up"
        className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8"
      >
        <p className="text-sm font-medium text-red-500">Subscribe</p>
        <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
          Get the latest property updates
        </h2>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-red-400"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
