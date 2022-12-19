import React from "react"
import "./scss/app.scss"

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
