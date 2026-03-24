import styles from "../../styles/ex08.module.css"

export default function TextoDoProduto({nome, descricao, preco}) {

    return (
        <div className={styles.info}>
            <p><strong>{nome}</strong></p>
            <p>{descricao}</p>
            <p className={styles.preco}><strong>R$</strong> {preco}</p>
        </div>
    )
}