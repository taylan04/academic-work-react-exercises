import styles from "../../styles/ex14.module.css"

export default function UserName({nome}) {

    return (
        <>
            <p className={styles.nome}>{nome}</p>
        </>
    )
}