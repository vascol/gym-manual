import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import AddBtn from "../../components/AddBtn"

import styles from "./FullPost.module.scss"

const FoodPost: React.FC = () => {
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

  return (
    <>
      {post.category === 2 && (
        <div className="container">
          <div className={styles.wrapper1}>
            <div className={styles.postText}>
              <h2>{post.name}</h2>

              <p>
                <span>{post.list[0]} </span>
                {post.text}
              </p>
              <img src={post.imageUrl1} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[1]} </span>
                {post.text2}
              </p>
              <img src={post.imageUrl2} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[2]} </span>
                {post.text3}
              </p>
              <img src={post.imageUrl3} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[3]} </span>
                {post.text4}
              </p>
              <img src={post.imageUrl4} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[4]} </span>
                {post.text5}
              </p>
              <img src={post.imageUrl5} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[5]} </span>
                {post.text6}
              </p>
              <img src={post.imageUrl6} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[6]} </span>
                {post.text7}
              </p>
              <img src={post.imageUrl7} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[7]} </span>
                {post.text8}
              </p>
              <img src={post.imageUrl8} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[8]} </span>
                {post.text9}
              </p>
              <img src={post.imageUrl9} alt="img" />
            </div>
            <div className={styles.postText}>
              <p>
                <span>{post.list[9]} </span>
                {post.text10}
              </p>
              <img src={post.imageUrl10} alt="img" />
            </div>
          </div>
          <AddBtn id={post.id} name={post.name} imageUrl={post.imageUrl} />
          <div className={styles.btn_wrapper}>
            <Link to="/">
              <button className="button button--outline button--add">
                <span>Назад</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default FoodPost
