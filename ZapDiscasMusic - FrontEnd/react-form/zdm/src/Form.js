import React from 'react'
import './App.css';
import { useForm } from "react-hook-form";
import FormLogo from './assets/form-image.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
  music1: yup.string().required("Coloque pelo menos uma obrigatório"),

}).required();

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  console.log(watch("music1"))
  console.log(watch("music2"))
  console.log(watch("music3"))
  console.log(watch("music4"))
  console.log(watch("music5"))
  console.log(watch("music6"))
  console.log(watch("music7"))

  function onSubmit(userData) {
    console.log(userData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formulario-musicas'>
      <img className='imagem-form' src={FormLogo} alt="apresentacao" />

      <label className='label-form'>
        Nome:
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>

      <label className='label-form'>
        E-mail:
        <input type="text" {...register("email", { required: true })} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label className='label-form'>
        Música 1:
        <input {...register("music1")} />
        {errors.music1 && <span>{errors.music1.message}</span>}
      </label>
      <label className='label-form'>
        Música 2:
        <input type="text" {...register("music2")} />
      </label>
      <label className='label-form'>
        Música 3:
        <input type="text" {...register("music3")} />
      </label>
      <label className='label-form'>
        Música 4:
        <input type="text" {...register("music4")} />
      </label>
      <label className='label-form'>
        Música 5:
        <input type="text" {...register("music5")} />
      </label>
      <label className='label-form'>
        Música 6:
        <input type="text" {...register("music6")} />
      </label>
      <label className='label-form'>
        Música 7:
        <input type="text" {...register("music7")} />
      </label>
      <button className='botao-form' type='submit'>Enviar</button>

    </form>
  );
}

export default App;
