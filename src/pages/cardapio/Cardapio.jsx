import React from "react";

import { NavLink } from "react-router-dom";

const Cardapio = () => {
  return (
    <div>
      <h1>Escolha o tipo de cardápio:</h1>

      <NavLink to={"/adm/cardapio/bebidas"}>
        <button>Bebidas</button>
      </NavLink>
    </div>
  );
};

export default Cardapio;
