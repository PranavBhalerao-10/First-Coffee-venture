import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.component'
import HomePage from './components/Homepage/HomePage.component'
import Login from './components/login/login.component'
import Register from './components/register/register.component.jsx'


const App = () => {
  const [itemList, setItemList] = useState([])
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" exact element={<HomePage itemList={itemList} />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard setItemList={setItemList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
