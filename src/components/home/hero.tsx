import React from "react"
import Image from "next/image"
import Link from "next/link"

import HomeImage from "../../assets/image/home-card.png"

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="modify grid place-items-center gap-5 md:grid-cols-2 md:pl-10">
        <div className="z-50 w-4/5">
          <h2 className="leading-40 z-50 ml-7 whitespace-nowrap text-3xl font-[550] md:text-6xl ">
            Take control
            <br />
            of your
            <br />
            Finances
            <br />
            with Finno
          </h2>
          <p className="mt-4 pl-8">
            Empowering you to take charge of your finances and achieve your short and long-term
            financial goals with ease using Finno
          </p>
          <div>
            <Link
              className="ml-7 mt-10 flex w-max items-center rounded-full bg-gray-900 px-6 py-4 text-white"
              href="/dashboard"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="cards ml-auto grid place-items-end">
          <Image src={HomeImage} alt="" className="ml-auto" />
        </div>
      </div>
      <div className="absolute -left-[600px] top-[10px] -z-10 h-[1000px] w-[1200px] rotate-[30deg] rounded-full bg-blur  blur-[150px]"></div>
    </div>
  )
}

export default Hero
