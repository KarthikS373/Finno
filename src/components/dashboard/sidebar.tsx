import React from "react"
import Image from "next/image"

import logo from "../../assets/image/logo.svg"
import Card from "../atoms/card"
import Icon from "../atoms/icon"

const Sidebar = () => {
  return (
    <div className="flex flex-initial flex-col p-5 shadow">
      <div className="">
        <div className="flex max-h-[20px] content-start items-center">
          <Image src={logo} alt="logo" className="" />
        </div>
      </div>

      <hr className="my-6" />

      <div className="w-40 flex-grow px-1 lg:w-64">
        <Card card={{ type: "visa", mask: 4865 }} />
        <Card card={{ type: "mastercard", mask: 2241 }} active={true} />
        <Card card={{ type: "discover", mask: 8112 }} />
      </div>

      <div className="flex-grow-0">
        <div className="flex justify-between">
          <Icon icon="Edit card" title="Change settings" onClick={() => console.log("clicked")} />
          <Icon icon="Add new card" title="Add an account" onClick={() => console.log("clicked")} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
