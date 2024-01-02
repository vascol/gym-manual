import axios from "axios"
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import AddBtn from "../../components/AddBtn"
import { Modal } from "../../components/Modal"
import Quiz from "../../components/Quiz/Quiz"

import styles from "./FullPost.module.scss"

interface PostItem {
  id: string
  list: string[]
  listVitamins: string[]
  listMinerals: string[]
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
  imageUrl11: string
  imageUrl12: string
  imageUrlARRAY1: string[]
  imageUrlARRAY2: string[]
  name: string
  textFood: string[]
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
  text11: string
  text12: string
  category: number
}

const FullPost: React.FC = () => {
  const [open, setOpen] = React.useState<Boolean>(false)
  const [post, setPost] = React.useState<PostItem>()

  const { id } = useParams()

  const navigate = useNavigate()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchPosts() {
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
    fetchPosts()
  }, [])

  if (!post) {
    return <h1 className="preloader">Loading...</h1>
  }

  return (
    <>
      {post.category === 1 && (
        <div className="container">
          <div className={styles.food_wrapper}>
            <div className={styles.food_header}>
              <img src={post.imageUrl} alt="img" />
              <div className={styles.food_header__top}>
                <h2>{post.name}</h2>
                <ul>
                  <h3>Харчова цінність на 100г:</h3>
                  <li style={{ fontWeight: 700, color: "#1e4976" }}>
                    {post.list[0]}
                  </li>
                  <li style={{ color: "#388e3c", fontWeight: 700 }}>
                    {post.list[1]}
                  </li>
                  <li style={{ color: "blue", fontWeight: 700 }}>
                    {post.list[2]}
                  </li>
                  <li style={{ color: "red", fontWeight: 700 }}>
                    {post.list[3]}
                  </li>
                  <li>
                    <i>{post.list[4]}</i>
                  </li>
                  <li>
                    <i>{post.list[5]}</i>
                  </li>
                  <li>
                    <i>{post.list[6]}</i>
                  </li>
                  <li>
                    <i>{post.list[7]}</i>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.food_content}>
              <div className={styles.food_info}>
                <div className={styles.food_info__list}>
                  <h3>Містить вітаміни:</h3>
                  <ul>
                    {post.listVitamins.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.food_info__list}>
                  <h3>Містить мінерали:</h3>
                  <ul>
                    {post.listMinerals.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.food_text}>
                <h3>Детальніше:</h3>
                {post.textFood.map((obj, index) => (
                  <p key={index}>{obj}</p>
                ))}
              </div>
            </div>
          </div>
          <AddBtn id={post.id} name={post.name} imageUrl={post.imageUrl} />
          <div className={styles.btn_wrapper}>
            <Link to="/gym-manual/">
              <button className="button button--outline button--add">
                <span>Назад</span>
              </button>
            </Link>
          </div>
        </div>
      )}
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
              {!post.imageUrl6 ? (
                <>
                  <img src={post.imageUrlARRAY1[0]} alt="img" />
                  <img src={post.imageUrlARRAY1[1]} alt="img" />
                </>
              ) : (
                <img src={post.imageUrl6} alt="img" />
              )}
            </div>

            {post.list[6] && (
              <div className={styles.postText}>
                <p>
                  <span>{post.list[6]} </span>
                  {post.text7}
                </p>
                <img src={post.imageUrl7} alt="img" />
              </div>
            )}

            {post.list[7] && (
              <div className={styles.postText}>
                <p>
                  <span>{post.list[7]} </span>
                  {post.text8}
                </p>
                <img src={post.imageUrl8} alt="img" />
              </div>
            )}

            {post.list[8] && (
              <div className={styles.postText}>
                <p>
                  <span>{post.list[8]} </span>
                  {post.text9}
                </p>
                <img src={post.imageUrl9} alt="img" />
              </div>
            )}

            {post.list[9] && (
              <div className={styles.postText}>
                <p>
                  <span>{post.list[9]}</span>
                  {post.text10}
                </p>
                {!post.imageUrl10 ? (
                  <>
                    <img src={post.imageUrlARRAY2[0]} alt="img" />
                    <img src={post.imageUrlARRAY2[1]} alt="img" />
                  </>
                ) : (
                  <img src={post.imageUrl10} alt="img" />
                )}
              </div>
            )}
          </div>
          <AddBtn id={post.id} name={post.name} imageUrl={post.imageUrl} />
          <div className={styles.btn_wrapper}>
            <Link to="/gym-manual/">
              <button className="button button--outline button--add">
                <span>Назад</span>
              </button>
            </Link>
          </div>
          {/* {open && (
            <div className="modal_wrapper">
              <Modal isOpen={open} setOpen={setOpen}>
                <h3>{post.list[0]} </h3>
                <img
                  onClick={() => setOpen(false)}
                  src={post.imageUrl1}
                  alt="img"
                />
                <h3>{post.list[1]} </h3>
                <img
                  onClick={() => setOpen(false)}
                  src={post.imageUrl2}
                  alt="img"
                />
                <h3>{post.list[2]} </h3>
                <img
                  onClick={() => setOpen(false)}
                  src={post.imageUrl3}
                  alt="img"
                />
              </Modal>
            </div>
          )} */}
        </div>
      )}
      {post.category === 3 && (
        <div className="container">
          <div className={styles.recomendation_wrapper}>
            <img src={post.imageUrl} />

            <p>
              <span> {post.list[0]}</span>
              {post.text}
            </p>
            <div className={styles.wrapper_modalBtn}>
              <button className="open-modal-btn" onClick={() => setOpen(true)}>
                ✨ ПРОЙТИ ТЕСТ НА ПЕРЕТРЕНОВАНІСТЬ
              </button>
              {open && (
                <Modal isOpen={open} setOpen={setOpen}>
                  <Quiz />
                  {/* <h1>aaa</h1> */}
                </Modal>
              )}
            </div>
            <p>{post.text2}</p>
            <p>{post.text3}</p>
            <p>{post.text4}</p>
            <p>{post.text5}</p>
            <p>{post.text6}</p>
            <p>{post.text7}</p>
            <p>
              <span>{post.list[1]} </span>
              {post.text8}
            </p>
          </div>
          <AddBtn id={post.id} name={post.name} imageUrl={post.imageUrl} />
          <div className={styles.btn_wrapper}>
            <Link to="/gym-manual/">
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

export default FullPost
