import React from "react";
import { Routes, Route } from "react-router";
import HomeCliente from "../pages/homeCliente/HomeCliente";
import Sobre from "../pages/sobre/Sobre";
import Colaboradores from "../pages/colaboradores/Colaboradores";
import CardapioClientes from "../pages/cardapioClientes/CardapioClientes";
import Login from "../pages/login/Login";

const RoutesCliente = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeCliente />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/colaboradores/:id" element={<Colaboradores />} />
      <Route path="/cardapio" element={<CardapioClientes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesCliente;
