import styled from "styled-components";

export const Container = styled.div`
   width: 90%;
   height: 90%;
   overflow-y: scroll;

   ul {
      list-style: none;
   }

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
`;

export default Container;
