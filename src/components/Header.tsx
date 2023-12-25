import React from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import logoSvg from "../assets/img/logo.png"
import { selectCart } from "../redux/cart/cartSlice"
import Search from "./Search/Search"

const Header: React.FC = () => {
  const { postItems } = useSelector(selectCart)

  const location = useLocation()

  const isMounted = React.useRef(false)

  const totalCount = postItems.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  )

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(postItems)
      localStorage.setItem("cart", json)
    }
    isMounted.current = true
  }, [postItems])

  return (
    <div className="header">
      <div className="container">
        <Link to="/gym-manual/">
          <div className="header__logo">
            <img width="64" src={logoSvg} alt="logo" />
            <div>
              <h1>Old School Gym</h1>
              <p>Стань найсильнішим у Всесвіті</p>
            </div>
          </div>
        </Link>

        {location.pathname === "/gym-manual/" && <Search />}

        {location.pathname !== "/gym-manual/cart" && (
          <div className="header__cart">
            <Link to="/gym-manual/cart" className="button button--cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
              </svg>
              <span>Закладки: {totalCount} шт.</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
