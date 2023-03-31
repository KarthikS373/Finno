import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../../../assets/image/logo.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-2 shadow-sm md:h-24 md:px-8">
      <Image className="z-50 w-32" src={Logo} alt="" width={200} height={300} />
      <Link
        className="flex w-max items-center rounded-full bg-gray-900 px-6 py-2 text-white"
        href="/register"
        passHref
      >
        Sign in
      </Link>
    </div>
  )
}

export default Navbar
