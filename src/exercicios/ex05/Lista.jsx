import styles from "../../styles/ex05.module.css"

export default function Lista({lista}) {

    return (
        <div className={styles.itens}>
            <ul>
                {lista.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
        </div>
    )
}