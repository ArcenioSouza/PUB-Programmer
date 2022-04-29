import styled from "styled-components";
import imgFundo from "../../assets/img/FundoApp.png"

const Container = styled.main`
   width: 100%;
   height: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: var(--font-textos);
   color: var(--branco);
   background-image: url(${imgFundo}) ;

   h1{
      background-color: var(--pretobg);
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
   }
`;
export default Container;