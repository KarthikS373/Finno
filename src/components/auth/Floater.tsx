import React from "react"

interface FloaterProps {
    heading: string | null,
    subheading: string | null,
    buttonClick: any,
    buttonText: string | null
}

function Floater({ heading, subheading, buttonClick, buttonText } : FloaterProps) {
  return (
    <div className="shadow-cool h-full max-w-[40%] rounded-lg px-20 py-10 text-center">
      <span className="flex h-full flex-col items-center justify-between">
        <h1 className="text-4xl font-extrabold">{heading}</h1>
        <p className="text-md font-light text-gray-400">{subheading}</p>
        <div onClick={buttonClick} className="shadow-cool">
          {buttonText}
        </div>
      </span>
    </div>
  )
}

export default Floater
