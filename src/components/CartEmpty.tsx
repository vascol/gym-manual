import React from "react"
import { Link } from "react-router-dom"
import cartEmptyImg from "../assets/img/list-cart-empty.png"

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Закладки відсутні <span>😕</span>
      </h2>
      <p>Скоріш за все, ви ще нічого не додали.</p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/gym-manual/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  )
}

export default CartEmpty
