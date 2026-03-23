import ExibindoNomes from "./ExibindoNomes"
import styles from "../../styles/ex02.module.css"

export default function App() {

    const nomes = ["Maria", "João", "Sei lá quem"]

    return (
        <div className={styles.nomes}>
        <ExibindoNomes nomes={nomes}/>
        </div>
    )
}