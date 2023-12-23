import React from "react"
import { Link } from "react-router-dom"
import cartEmptyImg from "../assets/img/empty.png"

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Закладки відсутні <span>😕</span>
      </h2>
      <p>
        Скоріш за все, ви ще нічого не додали.
        <br />
        Для того, щоб це зробити, перейдіть на головну сторінку.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  )
}

export default CartEmpty
