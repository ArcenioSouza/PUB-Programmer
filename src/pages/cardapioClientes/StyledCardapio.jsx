import styled from "styled-components";

export const Container = styled.main`
   background-color: var(--preto);
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1 {
      color: var(--branco);
      margin-top: 20px;
   }

   .containerEscolhaCardapio {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 90%;

      .botoes {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 10%;

         #btnComidas{
            margin-right: 20px;
         }

         button:hover {
            cursor: pointer;
            background-color: var(--rosa);
         }

         .active{
            button{
               background-color: var(--rosa);
            }            
         }
      }

      .image {
         width: 80%;
         height: 80%;
         display: flex;
         justify-content: flex-start;
         align-items: center;

         #imageInicio {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            border: 2px solid var(--roxo);
         }
      }
   }
`;
