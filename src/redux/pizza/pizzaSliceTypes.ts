export type Pizza = {
  id: string
  name: string
  imageUrl: string
  price: number
  sizes: number[]
  types: string[]
  rating: number
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: string
  order: string
  category: string
  search: string
  currentPage: string
}

export interface PizzaSliceState {
  items: Pizza[]
  status: Status
}
