import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   height: 95%;
   display: flex;
   justify-content: center;
   align-items: center;

   .imagens {
      width: 20%;
      height: 95%;
      margin-right: 20px;
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

      img {
         width: 90%;
         height: 180px;
         border-radius: 20px;
         margin-bottom: 5px;
      }

      img:hover{
         cursor: pointer;
         border: 2px solid var(--rosa);
      }
   }

   .informacoes {
      width: 50%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--branco);
      text-align: center;

      img {
         width: 300px;
         height: 250px;
         border-radius: 20px;
         margin-bottom: 5px;
      }
   }
`;

export default Container;
