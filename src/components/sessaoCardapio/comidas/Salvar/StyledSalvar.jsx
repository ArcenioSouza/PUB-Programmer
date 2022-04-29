import styled from "styled-components";

export const Container = styled.form`
   width: 90%;
   height: 95%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h3 {
      margin-top: 0;
      text-align: center;
   }

   .inputs {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
         font-size: 1.1rem;
         font-weight: bold;
         margin: 2px 0 2px 0;
      }

      input {
         font-size: 1.1rem;
         padding: 5px;
         margin-bottom: 5px;
         border-radius: 5px;
      }

      select {
         font-size: 1.1rem;
         padding: 5px;
         margin-bottom: 5px;
         border-radius: 5px;
      }
   }

   button:hover {
      cursor: pointer;
   }

   button:active {
      background-color: var(--rosa);
   }
`;

export default Container;
