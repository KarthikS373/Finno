import React from "react"

interface TaxProps extends React.HTMLAttributes<HTMLLIElement> {
  tabIndex: number
  activeTab: number
  label: string
}

const Tax = ({ tabIndex, activeTab, label, onClick }: TaxProps) => {
  return (
    <li className={"-mb-px mr-1"} onClick={onClick}>
      <span
        className={`tracking-widest-xl ease inline-block cursor-pointer bg-white text-sm uppercase transition-all ${
          tabIndex === activeTab
            ? "rounded-t border-l border-r border-t px-4 py-2 text-blue-700"
            : "px-4 py-2 text-blue-500 hover:text-blue-800"
        }`}
      >
        {label}
      </span>
    </li>
  )
}

export default Tax
