import React from "react"
import { FaChevronRight } from "react-icons/fa"

import Icon from "../icon"

interface CardProps {
  card: {
    type: string
    mask: number
  }
  active?: boolean
}

const Card = ({ card, active }: CardProps) => {
  return (
    <div
      className={`my-1 flex cursor-pointer content-center items-center rounded p-5 hover:bg-gray-100 ${
        active ? "bg-gray-200" : ""
      }`}
    >
      <img
        src={`https://img.icons8.com/ios/50/000000/${card.type}.png`}
        alt="visa"
        className="w-10 flex-grow-0"
      />
      <p className="flex-grow pl-2">
        <span className="text-gray-700">**** </span> {card.mask}
      </p>
      <Icon icon={<FaChevronRight />} />
    </div>
  )
}

export default Card
