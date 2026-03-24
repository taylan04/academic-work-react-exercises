import { useState } from 'react'
import './App.css'
import LoginForm from './exercicios/ex01/LoginForm'
import Ex02 from './exercicios/ex02/Ex02';
import Ex03 from './exercicios/ex03/Ex03';
import Ex04 from './exercicios/ex04/Ex04';
import Ex05 from './exercicios/ex05/Ex05';
import ListaTimes from './exercicios/ex06/ListaTimes';
import ListandoTarefas from './exercicios/ex07/ListandoTarefas';
import CartaoProduto from './exercicios/ex08/CartaoProduto';

function App() {

  const exercicio = 8;

  return (
    <>
      {exercicio == 1 && <LoginForm />}
      {exercicio == 2 && <Ex02 />}
      {exercicio == 3 && <Ex03 />}
      {exercicio == 4 && <Ex04 />}
      {exercicio == 5 && <Ex05 />}
      {exercicio == 6 && <ListaTimes />}
      {exercicio == 7 && <ListandoTarefas />}
      {exercicio == 8 && <CartaoProduto />}
    </>
  )
}

export default App
