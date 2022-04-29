import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  ContainerButton,
  ContainerTitulo,
  ContainerImage,
  CentralContainer,
} from "./StyledCardapio";
import Button from "../../components/button/Button";
import Porcoes from "../../assets/img/Porcoes.png";

const Cardapio = () => {
  return (
    <Container>
      <ContainerTitulo>
        <h1>Escolha seu cardápio:</h1>
      </ContainerTitulo>
      <CentralContainer id="box">
        <ContainerButton>
          <NavLink to={"/adm/cardapio/comidas"}>
            <Button text="Comidas" id="btn" />{" "}
          </NavLink>{" "}
          <NavLink to={"/adm/cardapio/bebidas"}>
            <Button text="Bebidas" id="btn" />{" "}
          </NavLink>
        </ContainerButton>
        <ContainerImage>
          <img src={Porcoes} alt="" />
        </ContainerImage>
      </CentralContainer>
    </Container>
  );
};

export default Cardapio;
