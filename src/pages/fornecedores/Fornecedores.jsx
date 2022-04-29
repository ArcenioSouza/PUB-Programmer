import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Container from "./StyledFornecedores";
import Button from "../../components/button/Button";
import ListarTodos from "../../components/sessaoFornecedores/listarTodos/ListarTodos";
import ListarUm from "../../components/sessaoFornecedores/listarUm/ListarUm";
import Salvar from "../../components/sessaoFornecedores/salvar/Salvar";
import Atualizar from "../../components/sessaoFornecedores/atualizar/Atualizar";
import Deletar from "../../components/sessaoFornecedores/deletar/Deletar";

const Fornecedores = () => {
   const { params } = useParams();

   return (
      <Container>
         <h1>Sessão Fornecedores</h1>
         <div className="containerInformacoes">
            <div className="grupoDeBotoes">
               <NavLink to={`/adm/fornecedores/listar-todos`}>
                  <Button id="listar-todos" text="Listar todos"/>
               </NavLink>
               <NavLink to={`/adm/fornecedores/listar-um`}>
                  <Button
                     id="listar-um"
                     text="Listar um"
                  />
               </NavLink>
               <NavLink to={`/adm/fornecedores/salvar`}>
                  <Button id="salvar" text="Salvar"/>
               </NavLink>
               <NavLink to={`/adm/fornecedores/atualizar`}>
                  <Button
                     id="atualizar"
                     text="Atualizar"
                  />
               </NavLink>
               <NavLink to={`/adm/fornecedores/deletar`}>
                  <Button id="deletar" text="Deletar"/>
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

export default Fornecedores;
