import React from "react";
import Container from "./StyledAtualizar";
import Button from "../../../button/Button";
import { useForm } from "react-hook-form";
import api from "../../../../services/api.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Atualizar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    toast.promise(api.put(`/drinks/${data.id}`, data), {
      pending: "Enviando informações da bebida",
      error: "Erro ao atualizar os dados",
      success: "Dados atualizados com sucesso",
    });
  };

  return (
    <Container>
      <h3>Digite as informações da bebida que deseja atualizar</h3>
      <div className="inputs">
        <label htmlFor="id">Id: </label>
        <input type="text" {...register("id")} />
        <label htmlFor="name">Título: </label>
        <input type="text" {...register("title")} />
        <label htmlFor="job">Descrição: </label>
        <input type="text" {...register("description")} />
        <div className="inputs">
          <div className="containerPreco">
            <label htmlFor="wage">Preço: </label>
            <input type="number" {...register("price")} />
          </div>
          <div className="containerPreco">
            <label htmlFor="wage">Estoque: </label>
            <input type="number" {...register("storage")} />
          </div>
        </div>
      </div>
      <Button text="Atualizar" onClick={handleSubmit(onSubmit)} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Atualizar;
