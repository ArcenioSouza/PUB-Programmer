import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Container from "./StyledFuncionarios";
import Button from "../../components/button/Button";
import ListarTodos from "../../components/sessaoFuncionarios/listarTodos/ListarTodos";
import ListarUm from "../../components/sessaoFuncionarios/listarUm/ListarUm";
import Salvar from "../../components/sessaoFuncionarios/salvar/Salvar";
import Atualizar from "../../components/sessaoFuncionarios/atualizar/Atualizar";
import Deletar from "../../components/sessaoFuncionarios/deletar/Deletar";

const Funcionarios = () => {
   
   const { params } = useParams();

   return (
      <Container>
         <h1>Sessão Funcionários</h1>
         <div className="containerInformacoes">
            <div className="grupoDeBotoes">
               <NavLink to={`/adm/funcionarios/listar-todos`}>
                  <Button id="listar-todos" text="Listar todos"/>
               </NavLink>
               <NavLink to={`/adm/funcionarios/listar-um`}>
                  <Button
                     id="listar-um"
                     text="Listar um"
                  />
               </NavLink>
               <NavLink to={`/adm/funcionarios/salvar`}>
                  <Button id="salvar" text="Salvar"/>
               </NavLink>
               <NavLink to={`/adm/funcionarios/atualizar`}>
                  <Button
                     id="atualizar"
                     text="Atualizar"
                  />
               </NavLink>
               <NavLink to={`/adm/funcionarios/deletar`}>
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

export default Funcionarios;
