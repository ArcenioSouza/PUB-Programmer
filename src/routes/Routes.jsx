import React from "react";
import { Routes, Route } from "react-router";
import Funcionarios from "../pages/funcionarios/Funcionarios";
import Cardapio from "../pages/cardapio/Cardapio";
import Fornecedores from "../pages/fornecedores/Fornecedores";
import Home from "../pages/homeAdm/HomeAdm";
import Bebidas from "../pages/cardapio/bebidas/Bebidas";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adm/funcionarios" element={<Funcionarios />} />
      <Route path="/adm/funcionarios/:params" element={<Funcionarios />} />
      <Route path="/adm/cardapio" element={<Cardapio />} />
      <Route path="/adm/cardapio/bebidas" element={<Bebidas />} />
      <Route path="/adm/cardapio/bebidas/:params" element={<Bebidas />} />
      <Route path="/adm/fornecedores" element={<Fornecedores />} />
    </Routes>
  );
};

export default RoutesApp;
