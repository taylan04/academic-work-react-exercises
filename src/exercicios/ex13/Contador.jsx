import { useState } from "react"
import styles from "../../styles/ex13.module.css"

export default function Contador() {

    const [cliques, setCliques] = useState(0)

    function contabilizarClique() {
        setCliques(cliques + 1)
    }

    return (
        <div className={styles.contador}>
            <button onClick={contabilizarClique}>Cliques</button>
            <p>{cliques}</p>
        </div>
    )
}