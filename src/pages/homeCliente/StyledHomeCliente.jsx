import styled from "styled-components";
import imgFundo from "../../assets/img/FundoApp.png"

const Container = styled.main`
   width: 100%;
   height: 88.2%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: var(--font-textos);
   color: var(--branco);
   background-image: url(${imgFundo}) ;

   .carousel-root{
      width: 70%;
      height: 75%;
      border: 4px solid var(--roxo);
      box-shadow: 15px 15px 25px var(--branco), -15px -15px 25px var(--branco);
   }

   .carousel.carousel-slider{
      display: block;
   }

   .carousel{
      height: 100%;
      display: none;
   }

   .selected div img{
      width: 100%;
      height: 700px;
   }
`;
export default Container;