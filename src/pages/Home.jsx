import React from "react"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Sort, { sortList } from "../components/Sort"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Pagination from "../components/Pagination/Pagination"
import { useDispatch, useSelector } from "react-redux"
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/filterSlice"
import qs from "qs"
import { useNavigate } from "react-router-dom"
import { fetchPizzas, selectPizzaData } from "../redux/pizza/pizzaSlice"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { categoryId, searchValue, currentPage, sort } =
    useSelector(selectFilter)

  const { items, status } = useSelector(selectPizzaData)

  // const [isLoading, setIsLoading] = React.useState(true)

  // const [pizzaItems, setPizzaItems] = React.useState([])

  const onCklickCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = () => {
    const sortBy = sort.sortProperty.replace("-", "")
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"
    const category = categoryId > 0 ? `category=${categoryId}` : ""
    const search = searchValue ? `&filter=${searchValue}` : ""
    const pagination = `&page=${currentPage}&limit=8`

    dispatch(fetchPizzas({ sortBy, order, category, search, pagination }))
    window.scrollTo(0, 0)
    // axios
    //   .get(
    //     `https://63948ccc4df9248eada596f8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${pagination}`
    //   )
    //   .then((res) => {
    //     setPizzaItems(res.data)
    //     setIsLoading(false)
    //   })
  }

  // Якщо був перший рендер, то робимо запит піци
  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // Якщо змінили параметри і був перший рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoryId: categoryId > 0 ? categoryId : null,
        sortProperty: sort.sortProperty,
        currentPage,
      }

      const queryString = qs.stringify(params, { skipNulls: true })

      navigate(`/?${queryString}`)
    }

    if (!window.location.search) {
      fetchPizzas()
    }
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // Якщо був перший рендер, то перевіряємо параметри і зберігаємо в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy)
      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: params.category,
          currentPage: params.currentPage,
          sort: sort || sortList[0],
        })
      )
    }
  }, [])

  // Фільтрація для статичних даних

  // const pizzas = pizzaItems
  //   .filter((obj) => {
  //     if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true
  //     }
  //     return false
  //   })
  //   .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)

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
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль, не вдалося отримати піци. Спробуйте пізніше.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
