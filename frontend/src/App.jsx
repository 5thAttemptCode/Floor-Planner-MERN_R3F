import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/nav'
import Home from './pages/home'
import Configurator from './pages/configurator'
import Footer from './components/footer'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context'
import Checkout from './pages/checkout'


axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true


export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Nav />
        <Footer />
        <Toaster position="bottom-right" toastOption={{duration: 2000}} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}
