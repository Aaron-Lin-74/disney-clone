import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
