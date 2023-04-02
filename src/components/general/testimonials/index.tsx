import React from "react"
import Image from "next/image"

import testimonials from "../../../data/testimonial.data.json"

const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div>
          <div className="max-w-2xl">
            <p className="text-4xl text-black">Testimonials</p>
            <p className="mt-4 max-w-2xl text-lg tracking-tight text-gray-600">
              Because we believe in our product, so do others
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full">
          <div className="relative m-auto items-center gap-12">
            <div className="mx-auto p-4 lg:w-full lg:p-0">
              <ul
                role="list"
                className="grid w-full list-none grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12"
              >
                {testimonials.map((testimonial, index) => (
                  <li key={index} className="flex flex-col items-center">
                    <div className="flex h-72 flex-col items-center justify-center rounded bg-gray-100 px-4 py-2">
                      <p className="text-center">{testimonial.review}</p>
                      <div className="relative my-3 h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.profile}
                          height={1200}
                          width={1200}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-1 flex flex-col items-center justify-center">
                        <h2 className="font-semibold">{testimonial.name}</h2>
                        <p className="text-sm text-gray-500/50">{testimonial.position}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
