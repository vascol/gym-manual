export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
}

export type Sort = {
  name: string
  sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
  searchValue: string
  categoryId: number
  currentPage: number
  sort: Sort
}
