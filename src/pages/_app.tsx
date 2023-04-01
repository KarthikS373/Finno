import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import type { AppProps } from "next/app"

import "../styles/globals.css"

ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, LineElement, Tooltip, Legend)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
