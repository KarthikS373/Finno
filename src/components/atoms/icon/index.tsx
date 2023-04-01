import React from "react"

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactNode
  title?: string
  url?: string
}

const Icon = ({ icon, title, onClick, className, url, ...props }: IconProps) => {
  return (
    <span
      className={`material-icons rounded-full text-gray-600 ${
        onClick ? "cursor-pointer p-3 hover:bg-gray-200" : ""
      } ${className}`}
      title={title}
      onClick={onClick}
      {...props}
    >
      {icon}
    </span>
  )
}

export default Icon
