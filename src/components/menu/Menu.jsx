import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./StyledMenu";
import Button from "../button/Button";

const Menu = () => {
   return (
      <Container>
         <ul>
            <NavLink to="/adm/funcionarios">Funcionários</NavLink>
            <NavLink to="/adm/cardapio">Cardápio</NavLink>
            <NavLink to="/adm/fornecedores">Fornecedores</NavLink>
            <Button text="Sair" />
         </ul>
      </Container>
   );
};

export default Menu;
