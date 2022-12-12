import "./scss/app.scss"

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
