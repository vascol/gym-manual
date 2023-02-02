import React from "react"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Sort, { sortList } from "../components/Sort"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Pagination from "../components/Pagination/Pagination"
import { useSelector } from "react-redux"
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  // setFilters,
} from "../redux/filter/filterSlice"
// import qs from "qs"
// import { useNavigate } from "react-router-dom"
import { fetchPizzas, selectPizzaData } from "../redux/pizza/pizzaSlice"
import { useAppDispatch } from "../redux/store"
// import { SearchPizzaParams } from "../redux/pizza/pizzaSliceTypes"

const Home: React.FC = () => {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // const isSearch = React.useRef(false)
  // const isMounted = React.useRef(false)

  const { categoryId, searchValue, currentPage, sort } =
    useSelector(selectFilter)

  const { items, status } = useSelector(selectPizzaData)

  // const [isLoading, setIsLoading] = React.useState(true)

  // const [pizzaItems, setPizzaItems] = React.useState([])

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "")
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"
    const category = categoryId > 0 ? `category=${categoryId}` : ""
    const search = searchValue ? `&search=${searchValue}` : ""
    const pagination = `&page=${currentPage}&limit=8`

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(pagination),
      })
    )

    window.scrollTo(0, 0)
  }

  // const getPizzas = () => {
  //   const sortBy = sort.sortProperty.replace("-", "")
  //   const order = sort.sortProperty.includes("-") ? "asc" : "desc"
  //   const category = categoryId > 0 ? `category=${categoryId}` : ""
  //   const search = searchValue ? `&search=${searchValue}` : ""
  //   // const pagination = `&page=${currentPage}&limit=8`

  //   dispatch(
  //     fetchPizzas({
  //       sortBy,
  //       order,
  //       category,
  //       search,
  //       currentPage: String(currentPage),
  //     })
  //   )

  //   window.scrollTo(0, 0)
  //   // axios
  //   //   .get(
  //   //     `https://63948ccc4df9248eada596f8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${pagination}`
  //   //   )
  //   //   .then((res) => {
  //   //     setPizzaItems(res.data)
  //   //     setIsLoading(false)
  //   //   })
  // }

  // // Якщо був перший рендер, то робимо запит піци
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     }

  //     const queryString = qs.stringify(params, { skipNulls: true })

  //     navigate(`/?${queryString}`)
  //   }

  //   const params = qs.parse(
  //     window.location.search.substring(1)
  //   ) as unknown as SearchPizzaParams
  //   const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy)
  //   dispatch(
  //     setFilters({
  //       searchValue: params.search,
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort: sortObj || sortList[0],
  //     })
  //   )

  //   getPizzas()
  // }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // Якщо змінили параметри і був перший рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     }

  //     const queryString = qs.stringify(params, { skipNulls: true })

  //     navigate(`/?${queryString}`)
  //   }

  //   const params = qs.parse(
  //     window.location.search.substring(1)
  //   ) as unknown as SearchPizzaParams
  //   const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy)
  //   dispatch(
  //     setFilters({
  //       searchValue: params.search,
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort: sortObj || sortList[0],
  //     })
  //   )

  //   // if (!window.location.search) {
  //   //   dispatch(fetchPizzas({} as SearchPizzaParams))
  //   // }
  // }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // Якщо був перший рендер, то перевіряємо параметри і зберігаємо в redux
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy)
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       })
  //     )
  //   }
  //   isMounted.current = true
  // }, [])

  // Фільтрація для статичних даних

  // const pizzas = pizzaItems
  //   .filter((obj) => {
  //     if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true
  //     }
  //     return false
  //   })
  //   .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  // Якщо змінили параметри і був перший рендер
  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
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
