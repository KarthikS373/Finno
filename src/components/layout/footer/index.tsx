import React from "react"
import { FaDiscord, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import Icon from "../../atoms/icon"

const Footer = () => {
  return (
    <div id="contact">
      <div className="tablet:px-8 mini-laptop:px-8 laptop:px-8 mobile:px-4 desktop:container m-auto  max-w-[1000px] border-slate-200 bg-white pb-[60px] pt-[130px]">
        <div className="px-2">
          <h1 className="font-poppins mb-1.5 text-center text-3xl font-bold uppercase">
            Contact us
          </h1>
          <p className="font-proxima mt-2 text-center text-[18px]">
            Get in touch, we&apos;ll reach out to you soon.
          </p>
        </div>

        <div className="tablet:px-10 mobile:px-8 flex flex-row items-center justify-center gap-6 px-14 py-12">
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaGithub />}
          />
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaTwitter />}
          />
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaLinkedin />}
          />
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaDiscord />}
          />
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaGoogle />}
          />
          <Icon
            className="cursor-pointer rounded-full border p-2 text-2xl transition-all hover:border-green-500/50 hover:bg-green-500/25 hover:text-black/90"
            url=""
            icon={<FaInstagram />}
          />
        </div>
      </div>

      <div className="mobile:px-6 tablet:px-8 border-t-[0.6px] border-slate-200 py-6 text-center text-[14px] text-slate-500">
        <p>© March 2023 Finno. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
