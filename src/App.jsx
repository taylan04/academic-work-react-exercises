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
import Ex09 from './exercicios/ex09/Ex09';
import Ex10 from './exercicios/ex10/Ex10'
import Ex11 from './exercicios/ex11/Ex11';
import Ex12 from './exercicios/ex12/Ex12';
import Contador from './exercicios/ex13/Contador';
import Profile from './exercicios/ex14/Profile';
import Ex15 from './exercicios/ex15/Ex15';
import Ex16 from './exercicios/ex16/Ex16';

function App() {

  const exercicio = 16;

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
      {exercicio == 9 && <Ex09 />}
      {exercicio == 10 && <Ex10 />}
      {exercicio == 11 && <Ex11 />}
      {exercicio == 12 && <Ex12 />}
      {exercicio == 13 && <Contador />}
      {exercicio == 14 && <Profile />}
      {exercicio == 15 && <Ex15 />}
      {exercicio == 16 && <Ex16 />}
    </>
  )
}

export default App
