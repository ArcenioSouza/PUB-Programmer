import styled from "styled-components";
import imgFundo from "../../assets/img/FundoApp.png";

const Container = styled.main`
   width: 100%;
   height: 88.2%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   font-family: var(--font-textos);
   color: var(--branco);
   background-image: linear-gradient(var(--pretobg), var(--pretobg)),
      url(${imgFundo}); 

   .carousel-root {
      width: 75%;
      height: 75%;
      border: 4px solid var(--roxo);
      animation: entradaCarousel 1s;
      margin-top: 3%;
   }

   @media (max-width: 1200px) {
      .carousel-root {
         width: 95%;
         height: 70%;
      }
   }

   @media (max-width: 500px) {
      .carousel-root {
         width: 120%;
         height: 80%;
      }
      .selected div img {
         width: 120%;
         height: 500px;
      }
   }

   @keyframes entradaCarousel {
      0% {
         transform: translatey(500px);
      }
      100% {
         transform: translatey(0);
      }
   }

   .carousel.carousel-slider {
      display: block;
   }

   .carousel {
      height: 100%;
      display: none;
   }

   .selected div img {
      width: 100%;
      height: 700px;
      z-index: 0;
   }
`;
export default Container;
