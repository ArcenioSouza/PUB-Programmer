import React from "react";
import { Routes, Route } from "react-router";
import Funcionarios from "../pages/funcionarios/Funcionarios";
import Cardapio from "../pages/cardapio/Cardapio";
import Comidas from "../pages/cardapio/comidas/Comidas";
import Fornecedores from "../pages/fornecedores/Fornecedores";
import HomeAdm from "../pages/homeAdm/HomeAdm";

const RoutesAdm = () => {
   return (
      <Routes>
         <Route path="/" element={<HomeAdm />} />
         <Route path="/funcionarios" element={<Funcionarios />} />
         <Route path="/funcionarios/:params" element={<Funcionarios />} />
         <Route path="/cardapio" element={<Cardapio />} />
         <Route path="/cardapio/comidas" element={<Comidas />} />
         <Route path="/cardapio/comidas/:params" element={<Comidas />} />
         <Route path="/fornecedores" element={<Fornecedores />} />
         <Route path="/fornecedores/:params" element={<Fornecedores />} />
      </Routes>
   );
};

export default RoutesAdm;
