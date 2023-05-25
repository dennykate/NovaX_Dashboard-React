import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registetr' element={<Register/>}/>

    </Routes>
  )
}

export default App