import styled from "styled-components";

const Container = styled.menu`
   position: absolute;
   left: 0;
   top: 81px;
   width: 250px;
   height: 500px;
   background-color: black;
   padding: 10px;
   margin: 0;

   ul{
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding-left: 10px;
   }

   a {
      margin-right: 10%;
      text-decoration: none;
      font-family: var(--font-titulos);
      color: var(--branco);
      font-size: 1.2rem;
   }

   a:hover {
      cursor: pointer;
      color: var(--rosa);
   }

   .active {
      color: var(--rosa);
   }
`;

export default Container;