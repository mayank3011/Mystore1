import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<div><h1>404 not found</h1></div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
