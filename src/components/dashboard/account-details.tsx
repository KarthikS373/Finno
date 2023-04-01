import React from "react"

import data from "../../data/transactions.data.json"
import Pagination from "../atoms/pagination"

import Analytics from "./analytics"
import TransactionsTable from "./transactions-table"

const AccountDetails = () => {
  const transactions: any[] = data.transactions.transactions
  const totalTransactions = data.transactions.total_transactions
  const size = 3

  return (
    <div className="flex-1 px-5">
      <div className="flex h-full flex-col">
        <Analytics />

        <Pagination size={size} total={totalTransactions} />

        <TransactionsTable transactions={transactions} size={size} />
      </div>
    </div>
  )
}

export default AccountDetails
