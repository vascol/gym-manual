import React from "react"
import "./scss/app.scss"

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"

export const SearchContext = React.createContext()

const App = () => {
  const [searchValue, setSearchValue] = React.useState("")

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SearchContext.Provider>
    </div>
  )
}

export default App
