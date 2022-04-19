import styled from "styled-components";

const Container = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 150px;
   font-family: var(--font-textos);
   color: var(--branco);
   background-color: var(--preto);
   border-top: 1px solid var(--rosa);

   .logoEmpresa {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
         width: 180px;
         height: 100px;
      }
   }

   .redesSociais {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 2px solid var(--branco);

      h1 {
         font-family: var(--font-titulos);
         font-size: 1.2rem;
         margin: 0;
      }

      img {
         width: 50px;
         height: 50px;
         margin: 3px;
      }
   }

   .contato {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 2px solid var(--branco);

      h1 {
         font-family: var(--font-titulos);
         font-size: 1.2rem;
         margin: 0;
      }

      #iEmail {
         width: 70px;
      }

      img {
         width: 50px;
         height: 50px;
         margin: 3px;
      }
   }

   .localizacao {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
         font-family: var(--font-titulos);
         font-size: 1.2rem;
         margin: 0;
      }

      .imagens-endereco {
         display: flex;
         justify-content: space-between;
         align-items: center;
         flex-direction: row;
      }

      img {
         width: 50px;
         height: 50px;
         margin: 3px;
      }

      .endereco {
         margin: 0 5px 0 5px;

         p {
            margin: 0;
         }
      }
   }

   @media (max-width: 800px) {
      .localizacao {
         width: 20%;

         h1 {
            font-size: 1rem;
         }

         img {
            width: 30px;
            height: 30px;
         }

         .endereco {
            display: none;
         }
      }

      .contato {
         width: 20%;

         #iEmail {
            width: 50px;
         }

         h1 {
            font-size: 1rem;
         }

         img {
            width: 30px;
            height: 30px;
         }
      }

      .redesSociais {
         width: 30%;

         h1 {
            font-size: 1rem;
         }

         img {
            width: 30px;
            height: 30px;
         }
      }
      .logoEmpresa {
         width: 20%;

         img {
            width: 140px;
            height: 80px;
         }
      }
   }

   @media (max-width: 550px) {
      .localizacao {
         display: none;
      }

      .contato{
         display: none;
      }

      .redesSociais{
         width: 50%;
         border-right: none;
         border-left: 2px solid var(--branco);
      }

      .logoEmpresa {
         width: 50%;
      }
   }
`;

export default Container;
