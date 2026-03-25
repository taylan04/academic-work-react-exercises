import { useState } from "react";
import ListaTarefas from "./ListaTarefas";

export default function Ex11() {

    const listaTarefas = [
    {
        id: 1,
        titulo: "Estudar React",
        prazo: "06/04/2026",
        status: false
    },
    {
        id: 2,
        titulo: "Fazer exercício da faculdade",
        prazo: "06/04/2026",
        status: false
    },
    {
        id: 3,
        titulo: "Treinar inglês",
        prazo: "06/04/2026",
        status: false
    },
    {
        id: 4,
        titulo: "Atualizar LinkedIn",
        prazo: "06/04/2026",
        status: false
    },
    {
        id: 5,
        titulo: "Revisar código do projeto",
        prazo: "06/04/2026",
        status: false
    }
    ];

    const [tarefas, setTarefas] = useState(listaTarefas);
    const [titulo, setTitulo] = useState("");
    const [prazo, setPrazo] = useState("");
    const [filtro, setFiltro] = useState("todas");

    function adicionar() {
    const novaTarefa = {
        id: proximoId(),
        titulo: titulo,
        prazo: prazo,
        status: false
    }

    setTarefas([...tarefas, novaTarefa])
    }

    function proximoId() {
    const ids = tarefas.map((tarefa) => tarefa.id);
    return Math.max(...ids) + 1;
    }

    function alternarFiltro() {
    if (filtro === "todas") setFiltro("pendentes");
    else if (filtro === "pendentes") setFiltro("concluidas");
    else setFiltro("todas");
    }

    const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.status;
    if (filtro === "concluidas") return tarefa.status;
    return true;
    });

    function marcarTarefa(id) {
    const novasTarefas = tarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, status: !tarefa.status }  : tarefa );

    setTarefas(novasTarefas);
    }

    return (
        <>
        <input onChange={(e) => setTitulo(e.target.value)} placeholder="Tarefa" />
        <input onChange={(e) => setPrazo(e.target.value)} placeholder="Prazo" />
        <button onClick={adicionar}>Adicionar</button>
        <button onClick={alternarFiltro}>Mostrar: {filtro}</button>
        <ListaTarefas tarefas={tarefasFiltradas} marcar={marcarTarefa}/>
        </>
    )
}