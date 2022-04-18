import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./StyledMenu";
import Button from "../button/Button";

const Menu = () => {
   return (
      <Container>
         <ul>
         <NavLink to="/">Home</NavLink>
               <NavLink to="/adm/cardapio">Sobre</NavLink>
               <NavLink to="/adm/fornecedores">Colaboradores</NavLink>
               <NavLink to="/adm/fornecedores">Cardápio</NavLink>
            <Button text="Entrar" />
         </ul>
      </Container>
   );
};

export default Menu;
