import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Container from "./StyledComidas";
import Button from "../../../components/button/Button";
import ListarTodos from "../../../components/sessaoCardapio/comidas/ListarTodos/ListarTodos";
import ListarUm from "../../../components/sessaoCardapio/comidas/ListarUm/ListarUm";
import Salvar from "../../../components/sessaoCardapio/comidas/Salvar/Salvar";
import Atualizar from "../../../components/sessaoCardapio/comidas/Atualizar/Atualizar";
import Deletar from "../../../components/sessaoCardapio/comidas/Deletar/Deletar";

const Comidas = () => {
   const { params } = useParams();

   return (
      <Container>
         <h1>Sessão Comidas</h1>
         <div className="containerInformacoes">
            <div className="grupoDeBotoes">
               <NavLink to={`/adm/cardapio/comidas/listar-todos`}>
                  <Button id="listar-todos" text="Listar todos"/>
               </NavLink>
               <NavLink to={`/adm/cardapio/comidas/listar-um`}>
                  <Button
                     id="listar-um"
                     text="Listar um"
                  
                  />
               </NavLink>
               <NavLink to={`/adm/cardapio/comidas/salvar`}>
                  <Button id="salvar" text="Salvar" />
               </NavLink>
               <NavLink to={`/adm/cardapio/comidas/atualizar`}>
                  <Button
                     id="atualizar"
                     text="Atualizar"
                  
                  />
               </NavLink>
               <NavLink to={`/adm/cardapio/comidas/deletar`}>
                  <Button id="deletar" text="Deletar" />
               </NavLink>
            </div>
            <div className="informacoesDaApi">
               {params === undefined ? (
                  <p>
                     Clique em uma opção nos botões ao lado para requerer
                     informações do banco de dados
                  </p>
               ) : params === "listar-todos" ? (
                  <ListarTodos />
               ) : params === "listar-um" ? (
                  <ListarUm />
               ) : params === "salvar" ? (
                  <Salvar />
               ) : params === "atualizar" ? (
                  <Atualizar />
               ) : params === "deletar" ? (
                  <Deletar />
               ) : (
                  console.error("Problemas na renderização da página")
               )}
            </div>
         </div>
      </Container>
   );
};

export default Comidas;
