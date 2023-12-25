import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CartEmpty from "../components/CartEmpty"
import CartItem from "../components/CartItem"
import { clearPostItems, selectCart } from "../redux/cart/cartSlice"

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const { postItems } = useSelector(selectCart)

  const totalCount = postItems.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  )

  const onCklickClear = () => {
    if (window.confirm("Очистити закладки?")) {
      dispatch(clearPostItems())
    }
  }

  if (!totalCount) {
    return <CartEmpty />
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
              <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
            </svg>
            <div className="cart__bottom-details">
              <span>
                {" "}
                Всього:{" "}
                <b>
                  {totalCount} {totalCount === 1 ? "закладка" : "закладки"}
                </b>{" "}
              </span>
            </div>
          </h2>
          <div className="cart__clear" onClick={onCklickClear}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Очистити все</span>
          </div>
        </div>
        <div className="content__items">
          {postItems.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          {/* <div className="cart__bottom-details">
            <span>
              {" "}
              Всього:{" "}
              <b>
                {totalCount} {totalCount === 1 ? "закладка" : "закладки"}
              </b>{" "}
            </span>
          </div> */}
          <div className="cart__bottom-buttons">
            <Link
              to="/gym-manual/"
              className="button pay-btn button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Повернутися назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
