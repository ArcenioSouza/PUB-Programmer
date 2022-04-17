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
   }

   .inputsCargoSalario {
      display: flex;
      width: 100%;

      .containerCargo {
         width: 49%;
         margin-right: 1%;
         display: flex;
         flex-direction: column;

         select {
            width: 100%;
            font-size: 1.1rem;
            padding: 5px;
            margin-bottom: 5px;
            border-radius: 5px;
         }
      }

      .containerSalario {
         width: 49%;
         margin-left: 1%;
         display: flex;
         flex-direction: column;
      }
   }

   @media (max-width: 800px) {
      width: 95%;
      height: 450px;

      h3 {
         font-size: 0.8rem;
      }

      button {
         width: 90px;
         font-size: 0.8rem;
         margin: 5px;
      }

      .inputs {
         label {
            font-size: 0.9rem;
         }

         input {
            font-size: 0.9rem;
         }
      }

      .inputsCargoSalario {
         flex-direction: column;

         .containerCargo {
            width: 100%;
            margin-right: 0;
            flex-direction: column;

            select {
               font-size: 0.9rem;
            }
         }

         .containerSalario {
            width: 100%;
            margin-left: 0;
            flex-direction: column;
         }
      }
   }
`;

export default Container;
