import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--preto);
  width: 100%;
  height: 100%;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  width: 100%;
  height: 102px;
  margin-top: 40px;
  justify-content: center;
  color: var(--branco);
  font-family: var(--font-textos);
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 233px;
  height: 228px;
  position: absolute;
  left: 650px;
  bottom: 480px;

  #btn {
    box-shadow: 4px 4px rgba(255, 255, 255, 0.274);
  }

  #btn:hover {
    background-color: var(--rosa);
    cursor: pointer;
  }
`;

export const ContainerImage = styled.div`
  position: absolute;
  width: 580px;
  height: 372px;
  border-radius: 45px;
  right: 580px;
  top: 250px;

  img {
    width: 580px;
    height: 372px;
    border-radius: 45px;
    border: 2px solid var(--brancobg);
  }
`;
