import React from 'react'
import { Routes, Route } from 'react-router'
import HomeCliente from '../pages/homeCliente/HomeCliente'
import Sobre from '../pages/sobre/Sobre'
import Colaboradores from '../pages/colaboradores/Colaboradores'
import CardapioClientes from '../pages/cardapioClientes/CardapioClientes'

const RoutesCliente = () => {
  return (
    <Routes>
       <Route path="/" element={<HomeCliente/>}/>
       <Route path="/sobre" element={<Sobre/>}/>
       <Route path="/colaboradores" element={<Colaboradores/>}/>
       <Route path="/cardapio" element={<CardapioClientes/>}/>
    </Routes>
  )
}

export default RoutesCliente;
