
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/regsiter' element={<Regsiter/>} />
            <Route  path='/account' element={<Account/>} />
          </Routes>
          <Footer />
      
      
        </BrowserRouter>
        
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App

