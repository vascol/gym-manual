import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addPostItem, selectCartItemById } from "../../redux/cart/cartSlice"
import { CartItem } from "../../redux/cart/cartSliceTypes"
import AddBtn from "../AddBtn"

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
    if (addedPostCount < 1) {
      dispatch(addPostItem(item))
    }
  }

  return (
    <div className="post-block-wrapper">
      <div className="post-block">
        <Link key={id} to={`/gym-manual/post/${id}`}>
          <img className="post-block__image" src={imageUrl} alt="img" />
        </Link>
        <h4 className="post-block__title">{name}</h4>
        <AddBtn id={id} name={name} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default PostBlock
