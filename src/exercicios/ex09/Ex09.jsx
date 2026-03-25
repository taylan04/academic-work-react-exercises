import { useState } from "react";
import ListagemDeTarefas from "./ListagemDeTarefas"
import styles from "../../styles/ex09.module.css"

export default function Ex09() {

    const listaTarefas = [
    {
        id: 1,
        titulo: "Estudar React",
        status: false
    },
    {
        id: 2,
        titulo: "Fazer exercício da faculdade",
        status: false
    },
    {
        id: 3,
        titulo: "Treinar inglês",
        status: false
    },
    {
        id: 4,
        titulo: "Atualizar LinkedIn",
        status: false
    },
    {
        id: 5,
        titulo: "Revisar código do projeto",
        status: false
    }
    ];

    const [tarefas, setTarefas] = useState(listaTarefas);

    function marcarTodas() {
    const novasTarefas = tarefas.map((tarefa) => ({...tarefa, status: true }));

    setTarefas(novasTarefas);
    }

    function marcarTarefa(id) {
    const novasTarefas = tarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, status: true } : tarefa );

    setTarefas(novasTarefas);
}

    return (
        <div>
        <ListagemDeTarefas lista={tarefas} marcar={marcarTarefa}/>
        <button className={styles.botao} onClick={marcarTodas}>marcar todas como Concluída</button>
        </div>
    )
}