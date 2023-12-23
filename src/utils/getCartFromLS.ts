import { CartItem } from "../redux/cart/cartSliceTypes"

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart")
  const items = data ? JSON.parse(data) : []

  return {
    items: items as CartItem[],
  }
}
