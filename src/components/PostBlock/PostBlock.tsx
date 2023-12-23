import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addPostItem, selectCartItemById } from "../../redux/cart/cartSlice"
import { CartItem } from "../../redux/cart/cartSliceTypes"

type ItemsBlockProps = {
  id: string
  name: string
  imageUrl: string
  rating: number
}

const PostBlock: React.FC<ItemsBlockProps> = ({ id, name, imageUrl }) => {
  const dispatch = useDispatch()

  const cartPostItem = useSelector(selectCartItemById(id))

  const addedPostCount = cartPostItem ? cartPostItem.count : 0

  const onAddPostItem = () => {
    const item: CartItem = {
      id,
      name,
      imageUrl,
      count: 0,
    }
    dispatch(addPostItem(item))
  }

  return (
    <div className="post-block-wrapper">
      <div className="post-block">
        <Link key={id} to={`post/${id}`}>
          <img className="post-block__image" src={imageUrl} alt="img" />
        </Link>
        <h4 className="post-block__title">{name}</h4>
        <div className="post-block__bottom">
          <button
            className={
              addedPostCount > 0
                ? "button active"
                : "button button--outline button--add"
            }
            onClick={onAddPostItem}
          >
            {addedPostCount < 0 && (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
              </>
            )}
            {addedPostCount > 0 ? (
              <span>Додано в закаладки</span>
            ) : (
              <span>Додати в закладки</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostBlock
