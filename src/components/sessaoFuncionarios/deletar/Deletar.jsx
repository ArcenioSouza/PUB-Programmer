import React from "react";
import Button from "../../button/Button";
import Container from "./StyledDeletar.jsx";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deletar = () => {
   const {register, handleSubmit} = useForm();

   const onSubmit = (data) => {      
      toast.promise(
         api.delete(`/employee/${data.id}`),
         {
            pending: "Apagando informações do funcionário",
            error: "Erro ao apagar os dados",
            success: "Dados apagados com sucesso",
         }
        )    
   }

   return (
      <Container>
         <form>
            <label htmlFor="id">Digite o id do funcionário</label>
            <div>
               <input
                  type="text"
                  {...register("id")}                
               />
               <Button text="Deletar" onClick={handleSubmit(onSubmit)}/>
            </div>
         </form>
         <ToastContainer position="top-right" autoClose={3000}/>
      </Container>
   );
};

export default Deletar;
