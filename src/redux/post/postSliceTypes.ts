export type Post = {
  id: string
  name: string
  imageUrl: string
  rating: number
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type SearchPostParams = {
  sortBy: string
  order: string
  category: string
  search: string
  currentPage: string
}

export interface PostSliceState {
  items: Post[]
  status: Status
}
