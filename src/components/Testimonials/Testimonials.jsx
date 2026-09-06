import React from 'react'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Bonnie from '../../assets/Testimonial-images/Bonnie.jpg'
import Saul from '../../assets/Testimonial-images/Saul.jpg'
import Vineet from '../../assets/Testimonial-images/pic-web.webp'
import Aman from '../../assets/Testimonial-images/Hostel.avif'


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: Vineet,
      name: 'Vineet',
      feedback:
        'I bought a flat from HomeHub and I am excited to say that the process was smooth and hassle-free. The team was helpful and I got the best deal for my dream home.',
    },
    {
      id: 2,
      image: Aman,
      name: 'Aman',
      feedback:
        'I bought land from HomeHub and I am excited to say that the process was smooth and hassle-free. The team was helpful and I got the best deal for my dream property.',
    },
    {
      id: 3,
      image: Bonnie,
      name: 'Bonnie Blue',
      feedback:
        'I rented a penthouse for my shoot and I am very happy with the experience. The premises were well-maintained and the shoot was great.',
    },
    {
      id: 4,
      image: Saul,
      name: 'Saul Goodman',
      feedback:
        'HomeHub is the best real estate company. The office I bought from them is outstanding and Mr. Fring is a great person to deal with. I will recommend HomeHub to everyone.',
    },
  ]

  useEffect(()=>{
    AOS.init({
        duration:1000,
        once:true,
        easing:'ease-in-out',
        delay:200,


    })

  },[])

  return (
    <section className="w-full bg-gray-200 px-4 py-10 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-aos="fade-up" className="mb-10">
          <p className="text-sm font-medium text-red-400">// Users Review</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-800 sm:text-4xl">
            Take a Look Around Users Feedback
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map(({ id, image, name, feedback }) => (
            <article
           data-aos="fade-up"
              key={id}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 p-4">
                <img
                  src={image}
                  alt={name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>

              <p className="flex-1 p-4 text-sm leading-6 text-gray-700">
                {feedback}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
