import styles from "../../styles/ex09.module.css"

export default function ListagemDeTarefas({ lista, marcar }) {
    return (
        <ul className={styles.tarefas}>
            {lista.map((tarefa) => (
                <li key={tarefa.id}>
                    {tarefa.titulo}
                    <div>
                        <input
                            type="checkbox"
                            checked={tarefa.status}
                            onChange={() => marcar(tarefa.id)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}