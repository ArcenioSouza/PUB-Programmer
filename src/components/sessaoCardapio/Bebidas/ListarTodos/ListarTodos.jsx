import React, { useEffect, useState } from "react";

import api from "../../../../services/api";
import Container from "./StyledListarTodos.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListarTodos = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    toast.promise(
      api.get("/drinks").then((response) => {
        setList(response.data);
      }),
      {
        pending: "Buscando informações de bebidas",
        error: "Dados não encontrados",
        success: "Dados obtidos com sucesso",
      }
    );
  }, []);

  return (
    <Container>
      {list === null ? (
        <p>Não foi possível encontrar os dados das bebidas</p>
      ) : list.length === 0 ? (
        <p>Aguarde um momento</p>
      ) : (
        list.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <b>Id:</b> {item._id}
              </li>
              <li>
                <b>Título:</b> {item.title}
              </li>
              <li>
                <b>Descrição:</b> {item.description}
              </li>
              <li>
                <b>Preço:</b> {item.price}
              </li>
              <li>
                <b>Estoque:</b> {item.storage}
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
