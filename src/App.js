import React from "react"
import "./scss/app.scss"

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"

const App = () => {
  const [searchValue, setSearchValue] = React.useState("")

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        >
          <Route path="" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
