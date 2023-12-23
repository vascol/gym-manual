import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const FullPost: React.FC = () => {
  const [post, setPost] = React.useState<{
    imageUrl: string
    name: string
  }>()

  const { id } = useParams()

  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      const apiKey = process.env.REACT_APP_MOCKAPI_KEY

      try {
        const { data } = await axios.get(
          `https://${apiKey}.mockapi.io/trainers/` + id
        )
        setPost(data)
      } catch (error) {
        alert("Такого поста немає!")
        navigate("/")
      }
    }
    fetchPizza()
  }, [])

  if (!post) {
    return <>Йде загрузка...</>
  }

  return (
    <div className="container">
      <img src={post.imageUrl} alt="img" />
      <h2>{post.name}</h2>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  )
}

export default FullPost
