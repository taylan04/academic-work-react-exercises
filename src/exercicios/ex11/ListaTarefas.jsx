export default function ListaTarefas({tarefas, marcar}) {

    return (
        <div>
            {tarefas.length > 0 ? tarefas.map((tarefa) => (
                <div style={ tarefa.status ? {color:"red"} : {color:"black"} } key={tarefa.id}>
                <p>{tarefa.titulo}</p>
                <p>{tarefa.prazo}</p>
                <input type="checkbox" checked={tarefa.status} onChange={() => marcar(tarefa.id)} className=""/>
                </div>
            )) : "A lista está vazia!"}
        </div>
    )
}