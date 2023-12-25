import React from "react"
import { Categories } from "../components/Categories"
import PostBlock from "../components/PostBlock/PostBlock"
import { Sort } from "../components/Sort"
import Skeleton from "../components/PostBlock/Skeleton"
import Pagination from "../components/Pagination/Pagination"
import { useSelector } from "react-redux"
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from "../redux/filter/filterSlice"
import { selectPostData } from "../redux/post/postSlice"
import { useAppDispatch } from "../redux/store"
import { fetchPosts } from "../redux/post/asyncActions"

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { categoryId, searchValue, currentPage, sort } =
    useSelector(selectFilter)

  const { items, status } = useSelector(selectPostData)

  const onClickCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getPosts = async () => {
    const sortBy = sort.sortProperty.replace("-", "")
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"
    const category = categoryId > 0 ? `category=${categoryId}` : ""
    const search = searchValue ? `&search=${searchValue}` : ""
    const pagination = `&page=${currentPage}&limit=8`

    dispatch(
      fetchPosts({
        sortBy,
        order,
        category,
        search,
        currentPage: String(pagination),
      })
    )

    window.scrollTo(0, 0)
  }

  // Якщо змінили параметри і був перший рендер
  React.useEffect(() => {
    getPosts()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const posts = items.map((obj: any) => <PostBlock key={obj.id} {...obj} />)

  // const skeletons = [...new Array(10)].map((_, index) => (
  //   <Skeleton key={index} />
  // ))
  const skeletons = (
    <h1 style={{ textAlign: "center", marginTop: "155px" }}>Loading...</h1>
  )

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        {/* <Sort value={sort} /> */}
      </div>
      <h2 className="content__title"></h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Порожньо 😕</h2>
          <p>Спробуйте пізніше.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : posts}
        </div>
      )}
      {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
    </div>
  )
}

export default Home
