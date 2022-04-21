import React from "react";
import Container from "./StyledSalvar";
import Button from "../../../button/Button";
import { useForm } from "react-hook-form";
import api from "../../../../services/api.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Salvar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    toast.promise(api.post("/drinks", data), {
      pending: "Enviando informações da bebida",
      error: "Erro ao salvar os dados",
      success: "Dados salvos com sucesso",
    });
  };

  return (
    <Container>
      <h3>Digite as informações da bebida que deseja salvar</h3>
      <div className="inputs">
        <label htmlFor="title">Título: </label>
        <input type="text" {...register("title")} />
        <label htmlFor="description">Descrição: </label>
        <input type="text" {...register("description")} />
        <label htmlFor="price">Preço: </label>
        <input type="text" {...register("price")} />
      </div>
      <Button text="Salvar" onClick={handleSubmit(onSubmit)} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Salvar;
