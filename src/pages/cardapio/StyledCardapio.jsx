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
  width: 10px;
  height: 228px;
  margin-left: 500px;
  /* position: absolute;
  left: 650px;
  bottom: 480px; */

  #btn {
    box-shadow: 4px 4px rgba(255, 255, 255, 0.274);
  }

  #btn:hover {
    background-color: var(--rosa);
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    #btn {
      position: relative;
      right: 145px;
      bottom: 20px;
    }
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 372px;
  border-radius: 45px;

  img {
    width: 580px;
    height: 372px;
    border-radius: 45px;
    border: 2px solid var(--brancobg);
  }

  @media screen and (max-width: 700px) {
    img {
      position: relative;
      top: 200px;
      right: 300px;
      width: 294px;
      height: 243px;
    }
  }
`;

export const CentralContainer = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  height: 500px;
  justify-content: space-evenly;

  @media screen and (max-width: 700px) {
    #box {
      display: flex;
      flex-direction: column;
    }
  }
`;
