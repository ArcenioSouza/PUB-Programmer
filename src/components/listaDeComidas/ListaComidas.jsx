import React, { useState } from "react";
import Container from "./StyledListaComidas";

const ListaComidas = () => {
   const [comida, setComida] = useState("1");

   return (
      <Container>
         <div className="imagens">
            <img
               id="1"
               src="https://3wftqo2m2mls1wr1c62cv1x6-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/image12-2.jpg"
               alt=""
               onClick={() => setComida("1")}
            />
            <img
               id="2"
               src="https://www.decorfacil.com/wp-content/uploads/2020/03/20200316torresmo.jpg"
               alt=""
               onClick={() => setComida("2")}
            />
            <img
               id="3"
               src="https://vejasp.abril.com.br/wp-content/uploads/2016/11/9296_bar-do-gibamario-rodrigues-6.jpeg"
               alt=""
               onClick={() => setComida("3")}
            />
            <img
               id="4"
               src="https://3wftqo2m2mls1wr1c62cv1x6-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/image6.jpg"
               alt=""
               onClick={() => setComida("4")}
            />
            <img
               id="5"
               src="https://revistafactual.com.br/wp-content/uploads/2019/04/savana-cervejaria_coxinha-a-savana_goiania_2019-1-otimizada.jpg"
               alt=""
               onClick={() => setComida("5")}
            />
            <img
               id="6"
               src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-petiscos-de-boteco-4.jpg"
               alt=""
               onClick={() => setComida("6")}
            />
         </div>
         <div className="informacoes">
            {comida === "1" ? (
               <div>
                  <img
                     src="https://3wftqo2m2mls1wr1c62cv1x6-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/image12-2.jpg"
                     alt=""
                  />
                  <h2><b>Mandioca Frita</b></h2>
                  <p>Nossas deliciosas mandiocas fritas são sequinhas, crocantes e servidas em porções generosas</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$12,00</h2>
               </div>
            ) : comida === "2" ? (
               <div>
                  <img
                  src="https://www.decorfacil.com/wp-content/uploads/2020/03/20200316torresmo.jpg"
                  alt=""
               />
                  <h2><b>Toresmo</b></h2>
                  <p>Esses toresmos são de dar água na boca, com um limão por cima então fica incrível</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$18,00</h2>
               </div>
            ) : comida === "3" ? (
               
               <div>
                  <img
                  src="https://vejasp.abril.com.br/wp-content/uploads/2016/11/9296_bar-do-gibamario-rodrigues-6.jpeg"
                  alt=""
               />
                  <h2><b>Pastéis</b></h2>
                  <p>Sabe aquele pastel de feira inesquecível, é dele que você vai lembrar quando provar os nossos pastéis</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$15,00</h2>
               </div>
            ) : comida === "4" ? (
               
               <div>
                  <img
                  src="https://3wftqo2m2mls1wr1c62cv1x6-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/image6.jpg"
                  alt=""
               />
                  <h2><b>Bolinho de bacalhau</b></h2>
                  <p>O sabor inesquecível do bacalhau Norueguês você só encontra aqui, bolinhos feitos com o melhor bacalhau do mundo</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$35,00</h2>
               </div>
            ) : comida === "5" ? (
               
               <div>
                  <img
                  src="https://revistafactual.com.br/wp-content/uploads/2019/04/savana-cervejaria_coxinha-a-savana_goiania_2019-1-otimizada.jpg"
                  alt=""
               />
                  <h2><b>Coxinha de frango</b></h2>
                  <p>O tradicional petisco para curtir aquela cerveja com os amigos, não tem nada melhor.</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$25,00</h2>
               </div>
            ) : (
               
               <div>
                  <img
                  src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-petiscos-de-boteco-4.jpg"
                  alt=""
               />
                  <h2><b>Porção de Calabresa</b></h2>
                  <p>Mais um tradicional brasileiro em nosso PUB que é sucesso, reinventamos a forma de servir com o nosso molho da casa, não tem como descrever o sabor.</p>
                  <br />
                  <p>Por apenas</p>
                  <h2>R$15,00</h2>
               </div>
            )}
         </div>
      </Container>
   );
};

export default ListaComidas;
