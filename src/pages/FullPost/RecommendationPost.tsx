import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import styles from "./FullPost.module.scss"

const RecommendationPost: React.FC = () => {
  const [post, setPost] = React.useState<{
    id: string
    list: string[]
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
    name: string
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
    category: number
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
  return <>{post.category === 3 && <h1>Recomendations</h1>}</>
}

export default RecommendationPost
