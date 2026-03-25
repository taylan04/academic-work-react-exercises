import styles from "../../styles/ex16.module.css"

export default function Ator({imagem, nome, idade, principal}) {

    return (
        <div className={styles.ator}>
            <img src={imagem} alt="foto-do-ator"/>
            <p><strong>{nome}</strong></p>
            <p>{idade} anos</p>
            <p>{principal}</p>
        </div>
    )
}