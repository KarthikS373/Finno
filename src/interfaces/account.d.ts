declare interface Account {
  name: string
  holderemail: string
  account: string
  balances: {
    current: number
    currency: string
    limit?: number
  }
  mask: string
  type: string
}
