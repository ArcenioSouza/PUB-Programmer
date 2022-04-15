import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Container from "./StyledFuncionarios";
import Button from "../../components/button/Button";
import ListarTodos from "../../components/sessaoFuncionarios/ListarTodos";
import ListarUm from "../../components/sessaoFuncionarios/ListarUm";
import Salvar from "../../components/sessaoFuncionarios/Salvar";
import Atualizar from "../../components/sessaoFuncionarios/Atualizar";
import Deletar from "../../components/sessaoFuncionarios/Deletar";

const Funcionarios = () => {
   const { params } = useParams();

   function handleOnClick(event) {
      
   }

   return (
      <Container>
         <h1>Sessão Funcionários</h1>
         <div className="containerInformacoes">
            <div className="grupoDeBotoes">
               <NavLink to={`/adm/funcionarios/listar-todos`}>
                  <Button id="listar-todos" text="Listar todos" onClick={handleOnClick}/>
               </NavLink>
               <NavLink to={`/adm/funcionarios/listar-um`}>
                  <Button
                     id="listar-um"
                     text="Listar um"
                     onClick={handleOnClick}
                  />
               </NavLink>
               <NavLink to={`/adm/funcionarios/salvar`}>
                  <Button id="salvar" text="Salvar" onClick={handleOnClick} />
               </NavLink>
               <NavLink to={`/adm/funcionarios/atualizar`}>
                  <Button
                     id="atualizar"
                     text="Atualizar"
                     onClick={handleOnClick}
                  />
               </NavLink>
               <NavLink to={`/adm/funcionarios/deletar`}>
                  <Button id="deletar" text="Deletar" onClick={handleOnClick} />
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
