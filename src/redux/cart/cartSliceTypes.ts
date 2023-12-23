export type CartItem = {
  id: string
  name: string
  imageUrl: string
  count: number
}

export interface CartSliceState {
  postItems: CartItem[]
}
