import React, { useState } from "react"
import { Line, Pie } from "react-chartjs-2"

import Tab from "../atoms/tab"

interface AnalyticsProps extends React.HTMLAttributes<HTMLLIElement> {
  something?: string
}

const Analytics = ({ something }: AnalyticsProps) => {
  const charts = [
    {
      index: 1,
      title: "Cash Flow",
    },
    {
      index: 2,
      title: "Categories",
    },
  ]
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="flex-1">
      <div className="grid h-full grid-flow-row grid-rows-6 gap-0">
        {/* tab nav */}
        <div className="row-span-1">
          <ul className="flex border-b">
            {charts.map(({ index, title }) => (
              <Tab
                key={index}
                label={title}
                tabIndex={index}
                activeTab={activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}

            <div className={"-mb-px mr-1 flex flex-1 justify-end border-b"}>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-blue-100 px-4 py-2 pr-8 text-sm italic leading-tight tracking-widest text-blue-500 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option>This month</option>
                  <option>Past 3 months</option>
                  <option>Past 6 months</option>
                  <option>Past year</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-400">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </ul>
        </div>

        {/* monthly income vs expenses */}
        <div
          className={`duration-2000 ease row-span-5 transition-all ${activeTab === 1 || "hidden"}`}
        >
          <Line
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Income",
                  fill: false,
                  backgroundColor: "#9ad0f5",
                  borderColor: "#9ad0f5",
                  data: [2500, 1800, 2600, 2500, 2350, 2800, 2000],
                },
                {
                  label: "Expenses",
                  backgroundColor: "#ffb1c1",
                  borderColor: "#ffb1c1",
                  fill: false,
                  data: [1250, 2250, 1950, 2300, 2550, 2000, 2750],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              hover: {
                mode: "nearest",
                intersect: true,
              },
            }}
          />
        </div>

        {/* expenses by category */}
        <div
          className={`duration-2000 ease row-span-5 transition-all ${activeTab === 2 || "hidden"}`}
        >
          <Pie
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            data={{
              labels: ["Grocery", "Restaraunts & Bars", "Shopping"],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: ["#ffb1c1", "#9ad0f5", "#FFCE56"],
                  hoverBackgroundColor: ["#ffb1c1", "#9ad0f5", "#FFCE56"],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Analytics
