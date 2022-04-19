import React, { useState } from "react";
import Container from "./StyledNavbarCliente";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../button/Button";
import Menu from "../menuCliente/Menu";

const NavbarCliente = () => {
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
               <NavLink to="/">Home</NavLink>
               <NavLink to="/sobre">Sobre</NavLink>
               <NavLink to="/colaboradores">Colaboradores</NavLink>
               <NavLink to="/cardapio">Cardápio</NavLink>
            </ul>
         </nav>
         <NavLink to="/adm"><Button id="buttonNavbar" text="Entrar" /></NavLink>
         
         {ativaMenu ? <Menu /> : null}
      </Container>
   );
};

export default NavbarCliente;