import React from "react"

import AccountDetails from "../components/dashboard/account-details"
import Sidebar from "../components/dashboard/sidebar"

const DashboardPage = () => {
  return (
    <div className="flex h-screen content-center items-stretch justify-center p-4">
      <Sidebar />
      <AccountDetails />
    </div>
  )
}

export default DashboardPage
