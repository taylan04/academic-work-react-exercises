import Ator from "./Ator";
import styles from "../../styles/ex16.module.css"

export default function DataList({atores}) {

    return (
        <div className={styles.atores}>
        {atores.map((ator,i) => (
            <Ator key={i} imagem={ator.imagem} nome={ator.nome} idade={ator.idade} principal={ator.principal_filme} />
        ))}
        </div>
    )
}