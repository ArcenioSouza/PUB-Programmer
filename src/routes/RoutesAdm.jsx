import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomeAdm from '../pages/homeAdm/HomeAdm'
import Funcionarios from '../pages/funcionarios/Funcionarios'

const RoutesAdm = () => {
   return (
      <Routes>
         <Route path="/" element={<HomeAdm />} />
         <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
   );
};

export default RoutesAdm;
