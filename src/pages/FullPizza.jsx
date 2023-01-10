import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const FullPizza = () => {
  const [pizza, setPizza] = React.useState()

  const { id } = useParams()

  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63948ccc4df9248eada596f8.mockapi.io/items/" + id
        )
        setPizza(data)
      } catch (error) {
        alert("Такої піци немає!")
        navigate("/")
      }
    }
    fetchPizza()
  }, [])

  if (!pizza) {
    return <>Йде загрузка...</>
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="img" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  )
}

export default FullPizza
