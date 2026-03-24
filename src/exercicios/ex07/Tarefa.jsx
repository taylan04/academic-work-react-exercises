import styles from "../../styles/ex07.module.css"

export default function Tarefa({titulo, status}) {

    return (
        <div>
            <p>{titulo}</p>
            <p>{status}</p>
        </div>
    )
}