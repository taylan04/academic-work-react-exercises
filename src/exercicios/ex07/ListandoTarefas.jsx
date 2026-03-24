import { useState } from "react"
import Tarefa from "./Tarefa"
import styles from "../../styles/ex07.module.css"

export default function ListandoTarefas() {

    const [tarefas, setTarefas] = useState([])
    const [titulo, setTitulo] = useState("")

    function adicionar() {
    const novaTarefa = {
        titulo: titulo,
        status: "andamento"
    }

    setTarefas([...tarefas, novaTarefa])
    }

    function remover(index) {
    setTarefas((tarefasAtuais) =>
        tarefasAtuais.filter((tarefa, i) => i !== index)
    );
}

    return (
        <div className={styles.form}>
            <input className={styles.campo} onChange={(e) => setTitulo(e.target.value)} placeholder="Tarefa" />
            <button className={styles.botao} onClick={adicionar}>Adicionar</button>
            <div className={styles.tarefas}>
            {tarefas.map((tarefa, i) => (
                <div className={styles.tarefa}>
                    <Tarefa titulo={tarefa.titulo} status={tarefa.status} key={i}/>
                    <button onClick={() => remover(i)}><i className="fa-solid fa-trash fa-lg"></i></button>
                </div>
            ))}
            </div>
        </div>
    )
}