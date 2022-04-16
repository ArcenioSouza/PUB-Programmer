import React, { useEffect, useState } from "react";
import {
   formataCPF,
   formataReais,
} from "../../../services/formatacaoDeDados.js";
import api from "../../../services/api";
import Container from "./StyledListarTodos.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListarTodos = () => {
   const [list, setList] = useState([]);

   useEffect(() => {
      toast.promise(
         api.get("/employees").then((response) => {
            setList(response.data);
         }),
         {
            pending: "Buscando informações de funcionários",
            error: "Dados não encontrados",
            success: "Dados obtidos com sucesso",
         }
      );
   }, []);

   return (
      <Container>
         {list === null ? (
            <p>Não foi possível encontrar os dados dos funcionários</p>
         ) : list.length === 0 ? (
            <p>Aguarde um momento</p>
         ) : (
            list.map((item, index) => {
               let valorEmReais = formataReais(item.wage);
               let mascaraCpf = formataCPF(item.cpf);
               return (
                  <ul key={index}>
                     <li>
                        <b>Id:</b> {item._id}
                     </li>
                     <li>
                        <b>Nome:</b> {item.name}
                     </li>
                     <li>
                        <b>Cargo:</b> {item.job}
                     </li>
                     <li>
                        <b>Salário:</b> {valorEmReais}
                     </li>
                     <li>
                        <b>CPF:</b> {mascaraCpf}
                     </li>
                     <li>-------------------------------------</li>
                  </ul>
               );
            })
         )}
         <ToastContainer position="top-right" autoClose={3000} />
      </Container>
   );
};

export default ListarTodos;
