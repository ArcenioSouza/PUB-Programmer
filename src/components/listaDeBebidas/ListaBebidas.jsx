import React, { useState } from "react";
import Container from "./StyledListaBebidas";

const ListaBebidas = () => {
   const [Bebida, setBebida] = useState("1");

   return (
      <Container>
         <div className="imagens">
            <img
               id="1"
               src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg"
               alt=""
               onClick={() => setBebida("1")}
            />
            <img
               id="2"
               src="https://www.thecocktaildb.com/images/media/drink/9uqt9p1576519019.jpg"
               alt=""
               onClick={() => setBebida("2")}
            />
            <img
               id="3"
               src="https://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg"
               alt=""
               onClick={() => setBebida("3")}
            />
            <img
               id="4"
               src="https://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg"
               alt=""
               onClick={() => setBebida("4")}
            />
            <img
               id="5"
               src="https://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg"
               alt=""
               onClick={() => setBebida("5")}
            />
            <img
               id="6"
               src="https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg"
               alt=""
               onClick={() => setBebida("6")}
            />
         </div>
         <div className="informacoes">
            {Bebida === "1" ? (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Mojito</b>
                  </h2>
                  <p>Por apenas</p>
                  <h2>R$8,00</h2>
               </div>
            ) : Bebida === "2" ? (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/9uqt9p1576519019.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Dry Martini</b>
                  </h2>
                  <p>Por apenas</p>
                  <h2>R$14,00</h2>
               </div>
            ) : Bebida === "3" ? (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Blue Lagoon</b>
                  </h2>

                  <p>Por apenas</p>
                  <h2>R$15,00</h2>
               </div>
            ) : Bebida === "4" ? (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Caipirinha</b>
                  </h2>

                  <p>Por apenas</p>
                  <h2>R$8,00</h2>
               </div>
            ) : Bebida === "5" ? (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Cuba Libre</b>
                  </h2>

                  <p>Por apenas</p>
                  <h2>R$9,00</h2>
               </div>
            ) : (
               <div>
                  <img
                     src="https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg"
                     alt=""
                  />
                  <h2>
                     <b>Cosmopolitan</b>
                  </h2>

                  <p>Por apenas</p>
                  <h2>R$22,00</h2>
               </div>
            )}
         </div>
      </Container>
   );
};

export default ListaBebidas;
