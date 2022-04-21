import React, { useState } from "react";
import { formataReais } from "../../../../services/formatacaoDeDados.js";
import api from "../../../../services/api";
import Button from "../../../button/Button";
import Container from "./StyledListarUm.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListarUm = () => {
  const [idBebida, setIdBebida] = useState("");
  const [informacoesBebida, setInformacoesBebida] = useState([]);
  function buscarBebida(event) {
    event.preventDefault();
    api
      .get(`/drinks/${idBebida}`)
      .then((response) => {
        if (response.data !== null) {
          setInformacoesBebida(response.data);
          toast.success("Dados obtidos com sucesso");
        } else {
          toast.error("Não existe bebida com esse Id");
        }
      })
      .catch((error) => {
        console.error("Error", error);
        toast.error("Não foi possível obter os dados da bebida");
      });
  }

  return (
    <Container>
      <form>
        <label htmlFor="id">Digite o id da bebida </label>
        <div>
          <input
            type="text"
            name="id"
            id="inputId"
            value={idBebida}
            onChange={(e) => setIdBebida(e.target.value)}
          />
          <Button text="Buscar" onClick={buscarBebida} />
        </div>
      </form>
      <div className="informacoesDaBebida">
        {informacoesBebida.length === 0 ? (
          <p>Digite o id de uma bebida e clique em buscar</p>
        ) : (
          <ul>
            <li>
              <b>Id:</b> {informacoesBebida._id}
            </li>
            <li>
              <b>Título:</b> {informacoesBebida.title}
            </li>
            <li>
              <b>Descrição:</b> {informacoesBebida.description}
            </li>
            <li>
              <b>Preço:</b> {formataReais(informacoesBebida.price)}
            </li>
          </ul>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default ListarUm;
