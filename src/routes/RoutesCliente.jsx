import React from 'react'
import { Routes, Route } from 'react-router'
import HomeCliente from '../pages/homeCliente/HomeCliente'

const RoutesCliente = () => {
  return (
    <Routes>
       <Route path="/" element={<HomeCliente/>}/>
    </Routes>
  )
}

export default RoutesCliente;
