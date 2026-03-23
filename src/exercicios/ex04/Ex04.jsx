import Clicavel from "./Clicavel"
import styles from "../../styles/ex04.module.css"

export default function Ex04() {

    function alerta() {
        alert("Você clicou!")
    }

    return (
        <div className={styles.botao}>
        <Clicavel funcao={alerta}/>
        </div>
    )
}