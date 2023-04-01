import React from "react"
import Link from "next/link"

interface PaginationProps {
  total: number
  size: number
}

const Pagination = ({ size, total }: PaginationProps) => {
  return (
    <div className="flex-initial bg-white py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 justify-between sm:hidden">
          <Link
            href="/"
            className="focus:shadow-outline-blue relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-700"
          >
            Previous
          </Link>
          <Link
            href="/"
            className="focus:shadow-outline-blue relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-700"
          >
            Next
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="pl-2 text-sm leading-5 text-gray-700">
              Showing
              <span className="font-medium"> 1 </span>
              to
              <span className="font-medium"> {size} </span>
              of
              <span className="font-medium"> {total} </span>
              results
            </p>
          </div>
          <div>
            <span className="relative z-0 inline-flex shadow-sm">
              {/* prev */}
              <button
                type="button"
                className="focus:shadow-outline-blue relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-500"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {Array(Math.ceil(total / size))
                .fill(1)
                .map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="focus:shadow-outline-ive -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-700"
                  >
                    {i + 1}
                  </button>
                ))}

              {/* next */}
              <button
                type="button"
                className="focus:shadow-outline-blue relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-500"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
