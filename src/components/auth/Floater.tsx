import React from "react"

interface FloaterProps {
  heading: string | null
  subheading: string | null
  buttonClick: any
  buttonText: string | null
}

function Floater({ heading, subheading, buttonClick, buttonText }: FloaterProps) {
  return (
    <div className="h-full max-w-[40%] rounded-3xl px-20 py-10 text-center shadow-2xl">
      <span className="flex h-full flex-col items-center justify-between">
        <h1 className="text-4xl font-extrabold">{heading}</h1>
        <p className="text-md font-light text-gray-400">{subheading}</p>
        <div
          onClick={buttonClick}
          className="shadow-cool mt-5 w-full cursor-pointer rounded-3xl bg-blue-600 p-3 text-white hover:bg-blue-500 "
        >
          {buttonText}
        </div>
      </span>
    </div>
  )
}

export default Floater
