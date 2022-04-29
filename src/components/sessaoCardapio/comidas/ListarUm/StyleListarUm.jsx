import styled from "styled-components";

export const Container = styled.div`
   width: 90%;
   height: 90%;

   form {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
         margin-bottom: 30px;
         font-size: 1.5rem;
         font-weight: bold;
      }

      div {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      input {
         width: 60%;
         margin-right: 5%;
         font-size: 1.3rem;
         padding: 5px;
         border-radius: 5px;
      }

      button:hover {
         cursor: pointer;
      }

      button:active {
         background-color: var(--rosa);
      }
   }


   .informacoesDComida{
      ul{
         width: 90%;
         list-style: none;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: flex-start;
         font-size: 1.3rem;
      }
   }
`;

export default Container;
