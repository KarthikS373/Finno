declare interface Transaction {
  id: string
  name: string
  owner?: string | null
  amount: number
  category: string[]
  date: string
  currency: string
  location: {
    address?: string | null
    city?: string | null
    country?: string | null
    lat?: string | null
    lon?: string | null
    pin?: string | null
    region?: string | null
  }
  payment_channel: string
  status: "pending" | "completed" | "failed" | "cancelled"
  type: string
}
