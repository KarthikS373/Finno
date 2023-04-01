import React from "react"
import Image from "next/image"
import Link from "next/link"

interface FeatureProps {
  feature: Feature
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div
      className={`font-apple flex
       h-56 cursor-pointer select-none flex-row items-start rounded-md bg-gradient-to-r from-[#6ac88e] 
       to-[#45b875] p-2 shadow shadow-[#45b875e1] transition-all`}
    >
      <div className="w-[200px] py-8">
        <Image src={feature.image} alt="image" width={1200} height={800} />
      </div>
      <div className="w-full px-2 py-6">
        <div className="flex flex-row items-center justify-between pb-1">
          <h1 className="font-poppins text-[18px] uppercase text-white">{feature.name}</h1>
        </div>

        <p className="font-proxima font-normal text-white">{feature.description} </p>
        <div className="flex flex-row items-center justify-between px-0.5 pt-2.5">
          <Link
            scroll={false}
            href={`/?slug=${feature.name.toLowerCase()}`}
            as={`/projects/${feature.name.toLowerCase()}`}
          >
            <p
              className="mobile:text-[10px] border-b-[1px] border-gray-600/50
            text-[12px] uppercase text-gray-600/50 transition-all hover:border-white hover:text-white"
            >
              Read More
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Feature
