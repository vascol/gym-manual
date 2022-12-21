import React from "react"
import axios from "axios"

import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Sort from "../components/Sort"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Pagination from "../components/Pagination/Pagination"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryId, setCurrentPage } from "../redux/filter/filterSlice"

const Home = () => {
  const dispatch = useDispatch()

  const { categoryId, searchValue, currentPage, sort } = useSelector(
    (state) => state.filter
  )

  const [isLoading, setIsLoading] = React.useState(true)

  const [pizzaItems, setPizzaItems] = React.useState([])

  const onCklickCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true)

    const sortBy = sort.sortProperty.replace("-", "")
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"
    const category = categoryId > 0 ? `category=${categoryId}` : ""
    const search = searchValue ? `&filter=${searchValue}` : ""
    const pagination = `&page=${currentPage}&limit=8`

    axios
      .get(
        `https://63948ccc4df9248eada596f8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${pagination}`
      )
      .then((res) => {
        setPizzaItems(res.data)
        setIsLoading(false)
        window.scrollTo(0, 0)
      })
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // Фільтрація для статичних даних

  // const pizzas = pizzaItems
  //   .filter((obj) => {
  //     if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true
  //     }
  //     return false
  //   })
  //   .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const pizzas = pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={onCklickCategory}
        />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>

      <Pagination onChangePage={(number) => dispatch(setCurrentPage(number))} />

      {/* <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль, не вдалося отримати піци. Спробуйте пізніше.</p>
        </div> */}
    </div>
  )
}

export default Home
