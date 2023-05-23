import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import ContatosContext from "../contexts/ContatosContext";
import { useNavigate } from "react-router-dom";
import "./Novo.css";

const Novo = () => {
  const {incluirContato} = useContext(ContatosContext);
  const form = useForm();
  const {register, handleSubmit, formState: {errors}} = form;
  const navigate = useNavigate();

  const onSUbmit = (data) => {
    incluirContato(data)
    navigate('/')
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSUbmit)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input {...register("nome", { required: "Campo obrigatório" })} />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input {...register("telefone", { required: "Campo obrigatório" })} />
          {errors.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Novo;
