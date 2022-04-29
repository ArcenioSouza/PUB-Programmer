import styled from "styled-components";
import imgFundo from "../../assets/img/FundoApp.png";

export const MainContainer = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-textos);
  color: var(--branco);
  background-image: url(${imgFundo});
`;

export const LoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: column;
  align-items: center;
  width: 23.2vw;
  height: 60.4vh;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8.5px);

  button:hover {
    background-color: var(--rosa);
    cursor: pointer;
  }

  #buttonLogin {
    position: absolute;
    top: 60%;
    left: 35%;
  }

  @media screen and (max-width: 700px) {
    width: 318px;
    height: 514px;

    #buttonLogin {
      position: absolute;
      top: 70%;
      left: 90px;
    }
  }
`;

export const LoginText = styled.h2`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 70%;
  color: var(--roxo);
  font-size: 40px;
  letter-spacing: 2px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  position: absolute;
  top: 200px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
