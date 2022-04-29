import React, { useState } from "react";
import Container from "./StyledNavbarAdm";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../button/Button";
import Menu from "../menu/Menu";

const NavbarAdm = () => {
   const [ativaMenu, setAtivaMenu] = useState(false);

   return (
      <Container>
         <GiHamburgerMenu onClick={() => {
            setAtivaMenu(!ativaMenu)
            setTimeout(() => {
               setAtivaMenu(false)
            },3000)
         }}/>
         <img src={require("../../assets/img/Logotipo-dark.png")} alt="" />
         <nav>
            <ul>
               <NavLink to="/adm/funcionarios">Funcionários</NavLink>
               <NavLink to="/adm/cardapio">Cardápio</NavLink>
               <NavLink to="/adm/fornecedores">Fornecedores</NavLink>
            </ul>
         </nav>
         <NavLink to="/"><Button id="buttonNavbar" text="Sair" /></NavLink>
         
         {ativaMenu ? <Menu /> : null}
      </Container>
   );
};

export default NavbarAdm;