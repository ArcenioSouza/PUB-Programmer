import styled from "styled-components";
import imgFundo from "../../../assets/img/FundoApp.png";

const Container = styled.main`
   width: 100%;
   height: 90%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   font-family: var(--font-textos);
   color: var(--branco);
   background-image: url(${imgFundo});

   h1 {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--pretobg);
      font-family: var(--font-titulos);
   }

   .containerInformacoes {
      display: flex;
      align-items: center;
      width: 90%;
      height: 550px;
      background-color: var(--pretobg);
      border-radius: 10px;
      border: 2px solid var(--roxo);
   }

   .grupoDeBotoes {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin: 10px;
      justify-content: center;
      align-items: center;

      button {
         margin: 10px;
      }

      button:hover {
         background-color: var(--rosa);
         cursor: pointer;
      }

      .active {
         button {
            background-color: var(--rosa);
         }
      }
   }

   .informacoesDaApi {
      box-sizing: border-box;
      width: 65%;
      height: 80%;
      background-color: var(--brancobg);
      border-radius: 20px;
      padding: 2%;
      color: var(--preto);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
         font-size: 1.3rem;
         text-align: center;
      }
   }
`;

export default Container;
