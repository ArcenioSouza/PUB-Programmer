import styled from "styled-components";

const Container = styled.header`
   width: 100%;
   height: 80px;
   background-color: var(--preto);
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid var(--rosa);

   img {
      width: 180px;
      height: 100%;
      margin-left: 5%;
   }

   #buttonNavbar {
      margin-right: 5%;
   }

   button:hover {
      background-color: var(--rosa);
      cursor: pointer;
   }

   nav {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }

   ul {
      width: 100%;
      display: flex;
      padding: 0;
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

   svg {
      color: #fff;
      width: 40px;
      height: 35px;
      display: none;

   }

   @media (max-width: 1150px) {

      #buttonNavbar {
         display: none;
      }

      nav {
         display: none;
      }

      img{
         margin-right: 5%;
      }

      svg{
         display: flex;
         margin-left: 5%;
      }
   }
`;

export default Container;
