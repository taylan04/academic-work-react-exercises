import styles from "../../styles/ex11.module.css"

export default function ListaTarefas({tarefas, marcar}) {

    return (
        <>
            {tarefas.length > 0 ? tarefas.map((tarefa) => (
                <div className={styles.tarefa} style={ tarefa.status ? {color:"green"} : {color:"black"} } key={tarefa.id}>
                <p><strong>{tarefa.titulo}</strong></p>
                <p>{tarefa.prazo}</p>
                <input type="checkbox" checked={tarefa.status} onChange={() => marcar(tarefa.id)} className=""/>
                </div>
            )) : "A lista está vazia!"}
        </>
    )
}