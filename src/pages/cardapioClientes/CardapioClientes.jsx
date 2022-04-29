import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./StyledCardapio";
import Button from "../../components/button/Button";
import Porcoes from "../../assets/img/Porcoes.png";
import { useParams } from "react-router";
import ListaComidas from "../../components/listaDeComidas/ListaComidas";
import ListaBebidas from "../../components/listaDeBebidas/ListaBebidas";

const CardapioClientes = () => {

  const {opcao} = useParams()

   return (
      <Container>
         <h1>Escolha um cardápio</h1>

         <div className="containerEscolhaCardapio">
            <div className="botoes">
               <NavLink to={"/cardapio/comidas"}>
                  <Button text="Comidas" id="btnComidas"/>
               </NavLink>
               <NavLink to={"/cardapio/bebidas"}>
                  <Button text="Bebidas"/>
               </NavLink>
            </div>
            <div className="image">
              { opcao === undefined ?
                <img id="imageInicio" src={Porcoes} alt="" />
                :
                opcao === "comidas" ?
                <ListaComidas/>
                :
               <ListaBebidas/>
              }               
            </div>
         </div>
      </Container>
   );
};

export default CardapioClientes;
