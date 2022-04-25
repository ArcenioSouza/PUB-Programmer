import styled from "styled-components";
import imgFundo from "../../assets/img/FundoApp.png";

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

   .containerInformacoes {
      display: flex;
      align-items: center;
      width: 90%;
      height: 600px;
      background-color: var(--brancobg);
      border-radius: 10px;
      border: 2px solid var(--roxo);
      box-sizing: border-box;
      padding: 20px;

      .paragrafo {
         width: 60%;
         font-size: 1.5rem;
         color: var(--preto);
         text-align: justify;
         box-sizing: border-box;
         padding: 3%;
      }

      .imagemAmigos {
         width: 40%;

         img {
            width: 100%;
            height: 100%;
            border-radius: 15px;
         }
      }
   }

   @media (max-width: 1500px) {
      .containerInformacoes {
         flex-direction: column;
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

         .paragrafo {
            width: 90%;
            padding: 0;
         }

         .imagemAmigos {
            width: 90%;

            img {
               width: 100%;
               height: 100%;
               border-radius: 15px;
            }
         }
      }
   }

   @media (max-width: 500px){
      .containerInformacoes{
         .paragrafo {
            font-size: 1.1rem;
         }
      }
      
   }
`;

export default Container;
