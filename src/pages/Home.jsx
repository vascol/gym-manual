import React from "react"
import axios from "axios"

import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Sort from "../components/Sort"
import Skeleton from "../components/PizzaBlock/Skeleton"

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  const [pizzaItems, setPizzaItems] = React.useState([])

  React.useEffect(() => {
    axios
      .get("https://63948ccc4df9248eada596f8.mockapi.io/items")
      .then((res) => {
        setPizzaItems(res.data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>

        {/* <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль, не вдалося отримати піци. Спробуйте пізніше.</p>
        </div> */}
      </div>
    </div>
  )
}

export default Home
