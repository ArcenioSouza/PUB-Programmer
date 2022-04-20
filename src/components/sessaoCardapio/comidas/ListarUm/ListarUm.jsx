import React, { useState } from "react";
import {
  
  formataReais,
} from "../../../../services/formatacaoDeDados.js";
import api from "../../../../services/api";
import Button from "../../../button/Button";
import Container from "./StyleListarUm.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListarUm = () => {
   const [idComida, setIdComida] = useState("");
   const [informacoesComida, setInformacoesComida] = useState([]);
   function buscarComida(event) {
      event.preventDefault();
      api.get(`/foods/${idComida}`)
         .then((response) => {
            if (response.data !== null) {
               setInformacoesComida(response.data);
               toast.success("Dados obtidos com sucesso");
            } else {
               toast.error("Não existe comida com esse Id");
            }
         })
         .catch((error) => {
            console.error("Error", error);
            toast.error("Não foi possível obter os dados da comida");
         });
   }

   return (
      <Container>
         <form>
            <label htmlFor="id">Digite o id da comida </label>
            <div>
               <input
                  type="text"
                  name="id"
                  id="inputId"
                  value={idComida}
                  onChange={(e) => setIdComida(e.target.value)}
               />
               <Button text="Buscar" onClick={buscarComida} />
            </div>
         </form>
         <div className="informacoesDaComida">
            {informacoesComida.length === 0 ? (
               <p>Digite o id de uma comida e clique em buscar</p>
            ) : (
               <ul>
                  <li>
                     <b>Id:</b> {informacoesComida._id}
                  </li>
                  <li>
                     <b>Título:</b> {informacoesComida.title}
                  </li>
                  <li>
                     <b>Descricao:</b> {informacoesComida.description}
                  </li>
                  <li>
                     <b>Preço:</b> {formataReais(informacoesComida.price)}
                  </li>
                  
               </ul>
            )}
         </div>
         <ToastContainer position="top-right" autoClose={3000} />
      </Container>
   );
};

export default ListarUm;
