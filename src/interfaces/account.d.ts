declare interface Account {
  name: string
  account: string
  balances: {
    available: number
    current: number
    currency: string
    limit?: number
  }
  mask: string
  type: string
}
