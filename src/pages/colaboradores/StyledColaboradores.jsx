import styled from "styled-components";
import imgFundo from "../../assets/img/Barman.png";

const Container = styled.main`
   width: 100%;
   height: 80%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: var(--font-textos);
   color: var(--branco);
   background-image: linear-gradient(var(--pretobg), var(--pretobg)),
      url(${imgFundo});
   box-sizing: border-box;
   padding: 10px;

   .imagensColaboradores {
      width: 60%;
      height: 80%;
      margin-right: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      overflow-y: scroll;

      ::-webkit-scrollbar {
         width: 12px;
      }

      ::-webkit-scrollbar-track {
         background: #2e2e2e;
         border-radius: 20px;
      }

      ::-webkit-scrollbar-thumb {
         background-color: var(--roxo);
         border-radius: 20px;
         border: 3px solid var(--roxo);
      }

      a {
         width: 200px;
         height: 200px;
         border: 4px solid var(--roxo);
         border-radius: 60%;
         margin: 20px;
      }

      img {
         width: 200px;
         height: 200px;
         border-radius: 60%;
      }

      a:hover {
         cursor: pointer;
      }

      .active {
         border: 8px solid var(--rosa);
      }
   }

   .dadosColaboradores {
      width: 40%;
      height: 90%;

      .containerDados {
         border: 4px solid var(--roxo);
         width: 90%;
         height: 80%;
         box-sizing: border-box;
         padding: 20px 20px 20px 60px;
         border-radius: 20px;
         background-color: var(--brancobg);
         color: var(--preto);
         font-weight: bold;
         font-size: 1.3rem;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
      }
   }

   @media (max-width: 1350px) {
      height: 80%;

      .imagensColaboradores {
         width: 30%;

         a {
            width: 150px;
            height: 150px;
         }

         img {
            width: 150px;
            height: 150px;
         }
      }

      .dadosColaboradores {
         width: 70%;
         height: 80%;
      }
   }

   @media (max-width: 800px) {
      flex-direction: column;

      .imagensColaboradores {
         width: 90%;
         height: 200px;
         flex-wrap: nowrap;
         align-items: flex-start;
         justify-content: flex-start;
         overflow-y: visible;
         overflow-x: scroll;

         a {
            width: 100px;
            height: 100px;
         }

         img {
            width: 100px;
            height: 100px;
         }
      }

      .dadosColaboradores {
         width: 90%;
         height: 70%;

         h1 {
            text-align: center;
            font-size: 1.2rem;
         }

         .containerDados {
            border: 4px solid var(--roxo);
            width: 100%;
            height: 70%;
            box-sizing: border-box;
            padding: 0px 0px 0px 10px;
            border-radius: 20px;
            background-color: var(--brancobg);
            color: var(--preto);
            font-weight: bold;
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
         }
      }
   }

   
`;

export default Container;
