import React from "react"

import features from "../../../data/features.data.json"

import Feature from "./feature"

const Features = () => {
  return (
    <div className="bg-fill bg-cover bg-no-repeat">
      <div className="bg-white/60 pb-24 backdrop-blur-[100px]">
        <div className="desktop:container">
          <div className="tablet:max-w-[550px] m-auto max-w-[1000px] p-2 ">
            <div className="px-4 py-20">
              <h1 className="font-poppins pb-1 text-center text-3xl uppercase text-black">
                Features
              </h1>

              <p className="font-proxima text-center text-[18px] text-slate-900">
                I have worked with multiple technologies as a developer to build and maintain my
                projects.
              </p>
            </div>
            <div className="mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2 grid grid-cols-2 gap-4">
              {features.map((feature, i: number) => (
                <Feature key={feature.name} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
