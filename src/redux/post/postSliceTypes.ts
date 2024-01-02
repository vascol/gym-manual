export type Post = {
  id: string
  list: string[]
  listVitamins: string[]
  listMinerals: string[]
  name: string
  imageUrl: string
  imageUrl1: string
  imageUrl2: string
  imageUrl3: string
  imageUrl4: string
  imageUrl5: string
  imageUrl6: string
  imageUrl7: string
  imageUrl8: string
  imageUrl9: string
  imageUrl10: string
  imageUrl11: string
  imageUrl12: string
  imageUrlARRAY1: string[]
  imageUrlARRAY2: string[]
  textFood: string[]
  text: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
  text9: string
  text10: string
  text11: string
  text12: string
  rating: number
  category: number
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
