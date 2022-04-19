import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Container from "./StyledBebidas";
import Button from "../../../components/button/Button";
import ListarTodos from "../../../components/sessaoCardapio/Bebidas/ListarTodos/ListarTodos";
import ListarUm from "../../../components/sessaoCardapio/Bebidas/ListarUm/ListarUm";
import Salvar from "../../../components/sessaoCardapio/Bebidas/Salvar/Salvar";
import Atualizar from "../../../components/sessaoCardapio/Bebidas/Atualizar/Atualizar";
import Deletar from "../../../components/sessaoCardapio/Bebidas/Deletar/Deletar";

const Bebidas = () => {
  const { params } = useParams();

  function handleOnClick(event) {}

  return (
    <Container>
      <h1>Sessão Bebidas</h1>
      <div className="containerInformacoes">
        <div className="grupoDeBotoes">
          <NavLink to={`/adm/cardapio/bebidas/listar-todos`}>
            <Button
              id="listar-todos"
              text="Listar todos"
              onClick={handleOnClick}
            />
          </NavLink>
          <NavLink to={`/adm/cardapio/bebidas/listar-um`}>
            <Button id="listar-um" text="Listar um" onClick={handleOnClick} />
          </NavLink>
          <NavLink to={`/adm/cardapio/bebidas/salvar`}>
            <Button id="salvar" text="Salvar" onClick={handleOnClick} />
          </NavLink>
          <NavLink to={`/adm/cardapio/bebidas/atualizar`}>
            <Button id="atualizar" text="Atualizar" onClick={handleOnClick} />
          </NavLink>
          <NavLink to={`/adm/cardapio/bebidas/deletar`}>
            <Button id="deletar" text="Deletar" onClick={handleOnClick} />
          </NavLink>
        </div>
        <div className="informacoesDaApi">
          {params === undefined ? (
            <p>
              Clique em uma opção nos botões ao lado para requerer informações
              do banco de dados
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

export default Bebidas;
