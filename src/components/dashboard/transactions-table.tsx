import React from "react"
import { FaChevronDown } from "react-icons/fa"

import Icon from "../atoms/icon"

interface TransactionsTableProps {
  transactions: Transaction[]
  size: number
}

const TransactionsTable = ({ size, transactions }: TransactionsTableProps) => {
  return (
    <div className="flex-initial">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3"></th>

                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Amount($)
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Cleared?
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {transactions.slice(0, size).map((tx) => (
                  <tr key={tx.id}>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <Icon className="cursor-pointer" icon={<FaChevronDown />} />
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10"
                            src={`https://simpleicons.org/icons/${tx.name
                              .toLowerCase()
                              .replace(/['\s]/gi, "")}.svg`}
                            alt={tx.name}
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src =
                                "https://img.icons8.com/ios/50/000000/online-store.png"
                            }}
                            title={tx.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            {tx.name}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            {tx.payment_channel}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold leading-5 ${
                          tx.amount > 0 ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"
                        }`}
                      >
                        {tx.amount > 0 ? `-${tx.amount}` : `${Math.abs(tx.amount)}`}
                      </span>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-xs font-medium leading-5">
                      {tx.status === "pending" ? (
                        <Icon icon="close" className="text-red-500" />
                      ) : (
                        <Icon icon="done" className="text-green-500" />
                      )}
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      {tx.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsTable
